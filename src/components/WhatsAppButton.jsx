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
      title="Chat on WhatsApp"
    >
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#25D366"/>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-2.176 0-4.319.525-6.16 1.515l-.441-.227-4.572 1.197 1.217-4.45-.287-.457A9.865 9.865 0 011.5 3.5c0-5.338 4.226-9.675 9.426-9.675 2.305 0 4.474.795 6.162 2.372 1.688 1.577 2.618 3.637 2.618 5.825 0 5.34-4.226 9.677-9.426 9.677-.73 0-1.455-.088-2.154-.261" fill="#FFFFFF"/>
      </svg>
    </motion.a>
  );
}
