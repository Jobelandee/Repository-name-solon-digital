import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hola! 👋 How can I help you today?', sender: 'bot' }
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

  const faqResponses = {
    'price': 'Our custom website packages start at €2,500 for small businesses. Each project is tailored to your specific needs.',
    'cost': 'Website development costs depend on complexity. Basic sites: €2,500. E-commerce: €5,000+. Let\'s discuss your budget!',
    'contact': 'You can reach us via WhatsApp, email at info@solondigital.com, or fill out our booking form on this page.',
    'how long': 'Most projects take 4-6 weeks from start to launch. We\'ll give you a timeline once we understand your needs.',
    'features': 'We build custom sites with fast loading, mobile optimization, booking systems, chatbots, and SEO setup.',
    'booking': 'You can book a free strategy call using the form below, or message us via WhatsApp!',
    'payment': 'We accept all major payment methods. Payment plans available for larger projects.',
    'services': 'We offer: custom website design, e-commerce setup, booking systems, chatbot integration, and digital strategy.',
    'help': `I can help you with:
• Pricing & costs
• Our services
• Booking information
• Contact details
• Timeline & process
• Payment options

Just ask your question!`
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let response = 'Great question! For more detailed information, please reach out via WhatsApp or our booking form. 😊';

      Object.keys(faqResponses).forEach(key => {
        if (lowerInput.includes(key)) {
          response = faqResponses[key];
        }
      });

      const botMessage = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot'
      };

      setMessages(prev => [...prev, botMessage]);
      setLoading(false);
    }, 600);
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
              border: '1px solid rgba(212, 175, 55, 0.3)',
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
              borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <h3 style={{ margin: '0 0 0.2rem 0', color: '#D4AF37', fontSize: '1rem', fontWeight: 700 }}>
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
                  }}
                >
                  <div style={{
                    background: msg.sender === 'user' ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)',
                    color: msg.sender === 'user' ? '#000' : '#DDD',
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    maxWidth: '80%',
                    wordWrap: 'break-word',
                    fontSize: '0.9rem',
                    lineHeight: 1.4,
                  }}>
                    {msg.text}
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
                        background: '#D4AF37',
                        borderRadius: '50%',
                      }}
                    />
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSend}
              style={{
                padding: '1rem',
                borderTop: '1px solid rgba(212, 175, 55, 0.2)',
                display: 'flex',
                gap: '0.6rem',
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
                  border: '1px solid rgba(212, 175, 55, 0.2)',
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
                  background: '#D4AF37',
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
          background: 'linear-gradient(135deg, #D4AF37 0%, #E5C158 100%)',
          border: 'none',
          color: '#000',
          fontSize: '1.8rem',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(212, 175, 55, 0.5)',
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
