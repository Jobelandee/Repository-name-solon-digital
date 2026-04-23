import React from 'react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const whatsappNumber = '+34612345678'; // Replace with actual number
  const whatsappMessage = 'Hola! I\'m interested in your website services. Can we chat?';
  const whatsappURL = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: '100px',
        left: '20px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        zIndex: 998,
        boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
        textDecoration: 'none',
        cursor: 'pointer',
        border: 'none',
      }}
      title="Chat on WhatsApp"
    >
      💬
    </motion.a>
  );
}
