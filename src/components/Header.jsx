import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

  return (
    <header className="solon-header" style={{
      background: '#0077BE',
      borderBottom: '1px solid rgba(0, 119, 190, 0.3)',
      padding: '0.5rem 0',
    }}>
      <div className="container">
        {/* Logo/Home Link */}
        <Link to="/" style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          marginRight: 'auto',
          padding: '0.5rem 1.5rem',
          transition: 'all 0.3s ease',
          fontSize: '1.3rem',
          fontWeight: 700,
          color: '#FFFFFF',
          fontFamily: 'Outfit, sans-serif',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.8';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1';
        }}>
          Solon Digital
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link to="/">{t('header.home') || 'Home'}</Link>
          <Link to="/services">Services</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/method">{t('header.process')}</Link>
          <Link to="/contact">{t('header.contact')}</Link>

          {/* Language Switcher with Flags */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: '1rem' }}>
            <button
              onClick={() => i18n.changeLanguage('en')}
              title="English"
              style={{
                background: i18n.language === 'en' ? '#0077BE' : 'transparent',
                border: 'none',
                padding: '0.5rem 0.8rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease',
              }}
            >
              🇬🇧
            </button>
            <button
              onClick={() => i18n.changeLanguage('es')}
              title="Español"
              style={{
                background: i18n.language === 'es' ? '#FFFFFF' : 'transparent',
                border: 'none',
                padding: '0.5rem 0.8rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease',
              }}
            >
              🇪🇸
            </button>
            <button
              onClick={() => i18n.changeLanguage('it')}
              title="Italiano"
              style={{
                background: i18n.language === 'it' ? '#FF9500' : 'transparent',
                border: 'none',
                padding: '0.5rem 0.8rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease',
              }}
            >
              🇮🇹
            </button>
            <button
              onClick={() => i18n.changeLanguage('nl')}
              title="Nederlands"
              style={{
                background: i18n.language === 'nl' ? '#FF9500' : 'transparent',
                border: 'none',
                padding: '0.5rem 0.8rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease',
              }}
            >
              🇳🇱
            </button>
          </div>
        </nav>

        {/* Hamburger Menu Toggle */}
        <motion.button
          className="hamburger-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '0.5rem',
          }}
        >
          <motion.div
            animate={isMobileMenuOpen ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }}
            style={{
              width: '24px',
              height: '2px',
              background: '#FFFFFF',
              borderRadius: '2px',
            }}
          />
          <motion.div
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            style={{
              width: '24px',
              height: '2px',
              background: '#FFFFFF',
              borderRadius: '2px',
            }}
          />
          <motion.div
            animate={isMobileMenuOpen ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
            style={{
              width: '24px',
              height: '2px',
              background: '#FFFFFF',
              borderRadius: '2px',
            }}
          />
        </motion.button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </div>
      <style>{`
        .nav-links a {
          color: #FFFFFF;
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.3s ease;
        }
        .nav-links a:hover {
          opacity: 0.8;
        }
      `}</style>
    </header>
  );
}
