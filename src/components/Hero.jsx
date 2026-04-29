import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero-section" style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
    }}>

      {/* Subtle Left Gradient for Text Readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '45%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.08) 0%, transparent 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Smooth Fade-to-Black at Bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.5) 50%, rgba(10, 10, 10, 1) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Content Container - Pure Editorial Left Layout */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '4rem 2rem 4rem 5%',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            maxWidth: '560px',
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
              fontSize: '18px',
              fontWeight: 700,
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '1.5rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {t('hero.tagline')}
          </motion.p>

          {/* Massive Main Headline - White with Ocean Blue Accent */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
              fontWeight: 700,
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '1.5rem',
              textShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            {t('hero.headline1')}{' '}
            <span style={{ color: '#0077BE' }}>
              {t('hero.headline2')}
            </span>
          </motion.h1>

          {/* Subheadline - What We Do */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              color: '#E8E8E8',
              fontSize: '1.3rem',
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
              <p style={{ fontSize: '0.95rem', color: '#CCCCCC', margin: 0 }}>Businesses Growing</p>
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
              gap: '1.2rem',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
            }}
          >
            {/* Primary Audit Button - Orange */}
            <motion.a
              href="#audit"
              whileHover={{ scale: 1.07, y: -3 }}
              whileTap={{ scale: 0.96 }}
              style={{
                background: '#FF9500',
                color: '#FFFFFF',
                padding: '1rem 2.5rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                fontFamily: 'Outfit, sans-serif',
                letterSpacing: '-0.01em',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 6px 16px rgba(255, 149, 0, 0.3)',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                whiteSpace: 'nowrap',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#E68600';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 149, 0, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FF9500';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 149, 0, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {t('hero.cta_audit')}
            </motion.a>

            {/* Ghost Secondary Button - Links to Our Story */}
            <motion.a
              href="#our-story"
              whileHover={{ scale: 1.07, y: -3 }}
              whileTap={{ scale: 0.96 }}
              style={{
                background: 'transparent',
                color: '#0077BE',
                padding: '1rem 2.5rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                fontFamily: 'Outfit, sans-serif',
                letterSpacing: '-0.01em',
                border: '2px solid #0077BE',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 119, 190, 0.1)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 119, 190, 0.2)';
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
              color: '#AAAAAA',
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
          div[style*="padding: 4rem 2rem"] {
            padding: 3rem 1.5rem 3rem 1.5rem !important;
            justify-content: center;
          }

          div[style*="maxWidth: 560px"] {
            max-width: 100% !important;
            text-align: center !important;
          }

          h1[style*="Playfair"][style*="5.5rem"] {
            text-align: center !important;
            font-size: 2.5rem !important;
          }

          p[style*="FF9500"][style*="Playfair"],
          p[style*="FF9500"][style*="letterSpacing"] {
            text-align: center !important;
            font-size: 1.5rem !important;
            margin-bottom: 1.5rem !important;
          }

          p[style*="E8E8E8"][style*="1.08rem"] {
            text-align: center !important;
            font-size: 0.95rem !important;
          }

          div[style*="gap: 1.2rem"][style*="flex-wrap"] {
            justify-content: center !important;
            gap: 0.8rem !important;
            margin-bottom: 1.5rem !important;
          }

          a[style*="FF9500"],
          a[style*="transparent"][style*="border: 2px"] {
            padding: 0.9rem 1.8rem !important;
            font-size: 0.85rem !important;
          }

          p[style*="AAAAAA"] {
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
