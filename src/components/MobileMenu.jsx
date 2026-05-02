import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function MobileMenu({ onClose }) {
  const { i18n, t } = useTranslation();

  const menuItems = [
    { label: t('ui.nav_services'), path: '/services' },
    { label: t('ui.nav_insights'), path: '/insights' },
    { label: t('header.process'), path: '/method' },
    { label: t('header.successStories'), path: '/success-stories' },
    { label: t('header.contact'), path: '/contact' },
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
          background: '#FFFFFF',
          boxShadow: '-4px 0 12px rgba(0, 0, 0, 0.08)',
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
            color: '#333333',
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
                  color: '#333333',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  fontFamily: 'Outfit, sans-serif',
                  display: 'block',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid #E0E0E0',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0077BE';
                  e.currentTarget.style.paddingLeft = '0.5rem';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#333333';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Language Switcher */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          justifyContent: 'center',
          paddingTop: '1rem',
          borderTop: '1px solid #E0E0E0',
        }}>
          <button
            onClick={() => { i18n.changeLanguage('en'); onClose(); }}
            style={{
              background: i18n.language === 'en' ? '#0077BE' : 'transparent',
              color: i18n.language === 'en' ? '#FFFFFF' : '#333333',
              border: '1px solid #0077BE',
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: 600,
              transition: 'all 0.3s ease',
            }}
          >
            EN
          </button>
          <button
            onClick={() => { i18n.changeLanguage('es'); onClose(); }}
            style={{
              background: i18n.language === 'es' ? '#0077BE' : 'transparent',
              color: i18n.language === 'es' ? '#FFFFFF' : '#333333',
              border: '1px solid #0077BE',
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: 600,
              transition: 'all 0.3s ease',
            }}
          >
            ES
          </button>
        </div>

        {/* Booking CTA */}
        <motion.a
          href="/#audit"
          onClick={onClose}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            background: '#FF9500',
            color: '#FFFFFF',
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
            e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 149, 0, 0.7)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {t('hero.cta_audit')}
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
