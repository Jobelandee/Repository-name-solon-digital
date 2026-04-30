import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const phoneNumber = '+34621805864';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      animate={{ scale: isHovered ? 1.15 : 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        bottom: '110px',
        right: '30px',
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        zIndex: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
      }}
      title="Call us"
    >
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#0077BE"/>
        <path d="M17.7 12.1c-1.3-1.3-3.3-1.3-4.6 0l-.8.8c-.2.2-.5.2-.7 0l-2.5-2.5c-.2-.2-.2-.5 0-.7l.8-.8c1.3-1.3 1.3-3.3 0-4.6-1.3-1.3-3.3-1.3-4.6 0l-1.1 1.1c-1.2 1.2-1.6 2.9-.9 4.4.7 1.5 2 3.1 3.5 4.6 1.5 1.5 3.1 2.8 4.6 3.5 1.5.7 3.2.3 4.4-.9l1.1-1.1c1.3-1.3 1.3-3.3 0-4.6z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="0.5"/>
      </svg>
    </motion.a>
  );
}
