import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getChatResponse } from '../services/claudeApi';
import { websiteContent } from '../data/websiteContent';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hola! 👋 How can I help you today? Ask me anything about our services, pricing, or process!', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Call Claude API with website content context
      const response = await getChatResponse(input, websiteContent);

      const botMessage = {
        id: Date.now() + 1,
        text: response.error ? response.message : response.message,
        sender: 'bot',
        showWhatsAppButton: response.suggestWhatsApp && !response.error,
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: 'Sorry, I encountered an error. Please try again or reach us via WhatsApp: +34 621 80 58 64',
        sender: 'bot',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              bottom: '100px',
              right: '20px',
              width: '380px',
              maxWidth: '90vw',
              height: '500px',
              background: '#0a0a0a',
              border: '1px solid rgba(0, 119, 190, 0.3)',
              borderRadius: '12px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 900,
              backdropFilter: 'blur(10px)',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1.2rem',
              borderBottom: '1px solid rgba(0, 119, 190, 0.2)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <h3 style={{ margin: '0 0 0.2rem 0', color: '#0077BE', fontSize: '1rem', fontWeight: 700 }}>
                  Solon Assistant
                </h3>
                <p style={{ margin: 0, color: '#888', fontSize: '0.8rem' }}>Always here to help</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#888',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
            }}>
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: 'flex',
                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    alignItems: msg.showWhatsAppButton ? 'flex-start' : 'auto',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '80%' }}>
                    <div style={{
                      background: msg.sender === 'user' ? '#0077BE' : 'rgba(255, 255, 255, 0.08)',
                      color: msg.sender === 'user' ? '#000' : '#DDD',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      wordWrap: 'break-word',
                      fontSize: '0.9rem',
                      lineHeight: 1.4,
                    }}>
                      {msg.text}
                    </div>
                    {msg.showWhatsAppButton && (
                      <motion.a
                        href={websiteContent.contact.whatsAppLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        style={{
                          background: '#25D366',
                          color: '#FFFFFF',
                          padding: '0.6rem 1rem',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          textAlign: 'center',
                          cursor: 'pointer',
                          border: 'none',
                          display: 'block',
                        }}
                      >
                        💬 Chat on WhatsApp
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                  {[0, 1, 2].map(i => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 0.6, delay: i * 0.1, repeat: Infinity }}
                      style={{
                        width: '6px',
                        height: '6px',
                        background: '#0077BE',
                        borderRadius: '50%',
                      }}
                    />
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div style={{
              padding: '0.75rem',
              borderTop: '1px solid rgba(0, 119, 190, 0.2)',
              background: 'rgba(0, 0, 0, 0.5)',
            }}>
              {/* Chat Input Form */}
              <form
                onSubmit={handleSend}
                style={{
                  display: 'flex',
                  gap: '0.6rem',
                  marginBottom: '0.6rem',
                }}
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything..."
                  style={{
                    flex: 1,
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(0, 119, 190, 0.2)',
                    borderRadius: '6px',
                    padding: '0.6rem 0.8rem',
                    color: '#FFF',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: '#0077BE',
                    color: '#000',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.6rem 1rem',
                    cursor: 'pointer',
                    fontWeight: 600,
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  Send
                </button>
              </form>

              {/* WhatsApp Quick Link */}
              <motion.a
                href={websiteContent.contact.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#25D366',
                  color: '#FFFFFF',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  width: '100%',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                💬 Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #0077BE 0%, #E5C158 100%)',
          border: 'none',
          color: '#000',
          fontSize: '1.8rem',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(0, 119, 190, 0.5)',
          zIndex: 899,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
        }}
      >
        {isOpen ? '×' : '💬'}
      </motion.button>
    </>
  );
}
