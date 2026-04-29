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
        cursor: 'pointer',
        boxShadow: '0 8px 25px rgba(37, 211, 102, 0.5)',
        zIndex: 898,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6 2H6.4C3.656 2 2 3.656 2 6.4v11.2C2 20.344 3.656 22 6.4 22h11.2c2.744 0 4.4-1.656 4.4-4.4V6.4C22 3.656 20.344 2 17.6 2zm.4 13.6c0 .44-.36.8-.8.8H7.6c-.44 0-.8-.36-.8-.8v-8.8c0-.44.36-.8.8-.8h9.6c.44 0 .8.36.8.8v8.8z" fill="white"/>
        <path d="M12 6.4c-3.08 0-5.6 2.52-5.6 5.6s2.52 5.6 5.6 5.6 5.6-2.52 5.6-5.6-2.52-5.6-5.6-5.6zm0 9.6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="white"/>
      </svg>
    </motion.a>
  );
}
