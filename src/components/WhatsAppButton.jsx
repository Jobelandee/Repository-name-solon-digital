import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const whatsappNumber = '34621805864';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      animate={{ scale: isHovered ? 1.1 : 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '90px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #25D366 0%, #20BA5E 100%)',
        border: 'none',
        color: '#FFFFFF',
        fontSize: '1.8rem',
        cursor: 'pointer',
        boxShadow: '0 8px 25px rgba(37, 211, 102, 0.5)',
        zIndex: 898,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        fontWeight: 'bold',
      }}
      title="Chat on WhatsApp"
    >
      💬
    </motion.a>
  );
}
