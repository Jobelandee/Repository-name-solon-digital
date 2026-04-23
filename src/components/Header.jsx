import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            color: '#D4AF37',
            letterSpacing: '-0.01em',
          }}>
            Solon
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link to="/insights">Insights</Link>
          <Link to="/method">Method</Link>
          <Link to="/contact">Contact</Link>
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
