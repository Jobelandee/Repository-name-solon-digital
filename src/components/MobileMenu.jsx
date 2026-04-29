import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MobileMenu({ onClose }) {
  const menuItems = [
    { label: 'Insights', path: '/insights' },
    { label: 'Method', path: '/method' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
      }}
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          height: '100vh',
          width: '100%',
          maxWidth: '300px',
          background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
          zIndex: 1000,
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: '#FFFFFF',
            fontSize: '1.8rem',
            cursor: 'pointer',
            alignSelf: 'flex-end',
            padding: 0,
            lineHeight: 1,
          }}
        >
          ×
        </button>

        {/* Menu Items */}
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          {menuItems.map((item, idx) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                to={item.path}
                onClick={onClose}
                style={{
                  textDecoration: 'none',
                  color: '#FFFFFF',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  fontFamily: 'Inter, sans-serif',
                  display: 'block',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(0, 119, 190, 0.2)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0077BE';
                  e.currentTarget.style.paddingLeft = '0.5rem';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Booking CTA */}
        <motion.a
          href="/#audit"
          onClick={onClose}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            background: '#0077BE',
            color: '#1a1a1a',
            padding: '0.95rem 1.5rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
            textAlign: 'center',
            cursor: 'pointer',
            marginTop: 'auto',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 119, 190, 0.7)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Book My Session →
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
