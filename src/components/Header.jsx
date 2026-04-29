import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

  return (
    <header className="solon-header">
      <div className="container">
        {/* Logo/Home Link */}
        <Link to="/" style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'flex',
          alignItems: 'center',
          marginRight: 'auto',
        }}>
          <div style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.3rem',
            fontWeight: 700,
            color: '#0077BE',
            letterSpacing: '-0.01em',
          }}>
            Solon
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link to="/insights">{t('header.services')}</Link>
          <Link to="/method">{t('header.process')}</Link>
          <Link to="/contact">{t('header.contact')}</Link>

          {/* Language Switcher */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginLeft: '1rem' }}>
            <button
              onClick={() => i18n.changeLanguage('en')}
              style={{
                background: i18n.language === 'en' ? '#0077BE' : 'transparent',
                color: i18n.language === 'en' ? '#1a1a1a' : '#FFFFFF',
                border: `1px solid ${i18n.language === 'en' ? '#0077BE' : '#0077BE'}`,
                padding: '0.4rem 0.8rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
              }}
            >
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage('es')}
              style={{
                background: i18n.language === 'es' ? '#0077BE' : 'transparent',
                color: i18n.language === 'es' ? '#1a1a1a' : '#FFFFFF',
                border: `1px solid ${i18n.language === 'es' ? '#0077BE' : '#0077BE'}`,
                padding: '0.4rem 0.8rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
              }}
            >
              ES
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
    </header>
  );
}
