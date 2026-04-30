import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero-section" style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
      paddingTop: 'clamp(2rem, 5vw, 4rem)',
      paddingBottom: 'clamp(2rem, 5vw, 4rem)',
      minHeight: 'auto',
    }}>
      {/* Content Container - Pure Editorial Left Layout */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 1.5rem)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            maxWidth: '100%',
            width: '100%',
            textAlign: 'left',
          }}
        >
          {/* Brand Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="tagline"
            style={{
              color: '#FF9500',
              fontSize: 'clamp(13px, 3.5vw, 18px)',
              fontWeight: 700,
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '1.5rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {t('hero.tagline')}
          </motion.p>

          {/* Massive Main Headline - Dark Navy with Purple Accent */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{
              color: '#1a1a4d',
              fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
              fontWeight: 700,
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            {t('hero.headline1')}{' '}
            <span style={{ color: '#FF9500' }}>
              {t('hero.headline2')}
            </span>
          </motion.h1>

          {/* Subheadline - What We Do */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              color: '#444444',
              fontSize: 'clamp(0.95rem, 3.5vw, 1.3rem)',
              lineHeight: 1.8,
              fontWeight: 400,
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '2.5rem',
              letterSpacing: '-0.005em',
              maxWidth: '580px',
            }}
          >
            {t('hero.description')}
          </motion.p>

          {/* Statistics Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '2rem',
              marginBottom: '2.8rem',
              maxWidth: '580px',
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '2.2rem', color: '#FF9500', margin: '0 0 0.5rem 0', fontWeight: 700 }}>42+</h3>
              <p style={{ fontSize: '0.95rem', color: '#666666', margin: 0 }}>Businesses Growing</p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '2.2rem', color: '#FF9500', margin: '0 0 0.5rem 0', fontWeight: 700 }}>40%</h3>
              <p style={{ fontSize: '0.95rem', color: '#CCCCCC', margin: 0 }}>More Leads (Month 1)</p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '2.2rem', color: '#FF9500', margin: '0 0 0.5rem 0', fontWeight: 700 }}>15+</h3>
              <p style={{ fontSize: '0.95rem', color: '#CCCCCC', margin: 0 }}>Hours/Week Saved</p>
            </div>
          </motion.div>

          {/* CTA Buttons - Side by Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
            }}
          >
            {/* Primary Audit Button - Purple */}
            <motion.a
              href="#audit"
              className="hero-cta-button hero-cta-primary"
              style={{
                background: '#FF9500',
                color: '#FFFFFF',
                padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                fontFamily: 'Outfit, sans-serif',
                letterSpacing: '-0.01em',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 6px 16px rgba(199, 53, 132, 0.3)',
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#A82A6F';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(199, 53, 132, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FF9500';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(199, 53, 132, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {t('hero.cta_audit')}
            </motion.a>

            {/* Ghost Secondary Button - Links to Our Story */}
            <motion.a
              href="#our-story"
              className="hero-cta-button hero-cta-secondary"
              style={{
                background: 'transparent',
                color: '#FF9500',
                padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                fontFamily: 'Outfit, sans-serif',
                letterSpacing: '-0.01em',
                border: '2px solid #FF9500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(199, 53, 132, 0.1)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(199, 53, 132, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {t('hero.cta_story')}
            </motion.a>
          </motion.div>

          {/* Urgency Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{
              fontSize: '0.88rem',
              color: '#666666',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
          >
            {t('hero.urgency')}
          </motion.p>
        </motion.div>
      </div>

      {/* Mobile Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .hero-cta-button {
            display: block !important;
            width: 100% !important;
            text-align: center !important;
          }

          .hero-cta-button:not(:last-of-type) {
            margin-bottom: 0.5rem;
          }

          div[style*="marginBottom: 2.5rem"] > motion > div {
            flex-direction: column !important;
          }
        }

        @media (min-width: 769px) {
          .hero-cta-button {
            display: inline-block !important;
            width: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
