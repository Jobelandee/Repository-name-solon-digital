import React from 'react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/websiteContent';

export default function WhatsAppButton() {
  const whatsappUrl = websiteContent.contact.whatsAppLink;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: '100px',
        right: '80px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: '#25D366',
        border: 'none',
        color: '#FFFFFF',
        fontSize: '1.8rem',
        cursor: 'pointer',
        boxShadow: '0 8px 25px rgba(37, 211, 102, 0.5)',
        zIndex: 898,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 12px 35px rgba(37, 211, 102, 0.7)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.5)';
      }}
      title="Chat on WhatsApp"
    >
      💬
    </motion.a>
  );
}
