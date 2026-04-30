import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hola! 👋 Soy el asistente de Solon Digital. ¿En qué puedo ayudarte?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const faqResponses = {
    'cuánto': 'Las webs empiezan desde €2,500. Te puedo dar un presupuesto personalizado. ¿Quieres hablar por WhatsApp?',
    'cuanto': 'Las webs empiezan desde €2,500. Te puedo dar un presupuesto personalizado. ¿Quieres hablar por WhatsApp?',
    'precio': 'Las webs empiezan desde €2,500. Te puedo dar un presupuesto personalizado. ¿Quieres hablar por WhatsApp?',
    'time': 'Normalmente 1-2 semanas dependiendo de la complejidad. ¿Quieres agendar una llamada?',
    'tiempo': 'Normalmente 1-2 semanas dependiendo de la complejidad. ¿Quieres agendar una llamada?',
    'cuánto tiempo': 'Normalmente 1-2 semanas dependiendo de la complejidad. ¿Quieres agendar una llamada?',
    'how long': '1-2 weeks depending on complexity. Want to schedule a call?',
    'services': '✅ Web Development\n✅ SEO Optimization\n✅ AI Automation\n✅ AI Chatbots\n\n¿Cuál te interesa?',
    'servicios': '✅ Desarrollo Web\n✅ Optimización SEO\n✅ Automatización IA\n✅ Chatbots IA\n\n¿Cuál te interesa?',
    'seo': 'SEO te ayuda a aparecer en Google. Nuestros clientes ven resultados en 3-6 meses.',
    'automation': 'La automatización IA maneja inquiries, bookings y leads 24/7 sin que hagas nada.',
    'chatbot': 'Un chatbot IA responde clientes automáticamente en tu sitio web o WhatsApp.',
    'desarrollo': 'Hacemos webs rápidas, modernas y que venden. Optimizadas para móvil y SEO.',
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    const userInput = input.toLowerCase();
    setInput('');

    // Find matching FAQ response
    let response = 'No entiendo esa pregunta. 🤔 ¿Pregunta sobre servicios, precios o tiempo?';

    for (const [keyword, answer] of Object.entries(faqResponses)) {
      if (userInput.includes(keyword)) {
        response = answer;
        break;
      }
    }

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
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
              zIndex: 999,
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
                        href="tel:+34621805864"
                        animate={{ scale: 1 }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        style={{
                          background: '#0077BE',
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
                          transition: 'transform 0.2s ease',
                        }}
                      >
                        ☎️ Call us
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
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
                  style={{
                    background: '#0077BE',
                    color: '#000',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.6rem 1rem',
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  Send
                </button>
              </form>

              {/* Call Quick Link */}
              <motion.a
                href="tel:+34621805864"
                animate={{ scale: 1 }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#0077BE',
                  color: '#FFFFFF',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  width: '100%',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                }}
              >
                ☎️ Call us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{ scale: isButtonHovered ? 1.1 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #0077BE 0%, #0099FF 100%)',
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
