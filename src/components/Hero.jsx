import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Video Background - Your Brand Logo - Optimized */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'center',
          zIndex: 0,
          opacity: 0.3,
          backgroundColor: '#f8f8f8',
          willChange: 'transform',
        }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

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
            style={{
              color: '#FF9500',
              fontSize: '0.95rem',
              fontWeight: 700,
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '1rem',
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
              fontSize: 'clamp(3.2rem, 7vw, 5.5rem)',
              fontWeight: 800,
              fontFamily: 'Playfair Display, serif',
              marginBottom: '2rem',
              textShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
            }}
          >
            {t('hero.headline1')}{' '}
            <br />
            <span style={{ color: '#0077BE', fontWeight: 900 }}>
              {t('hero.headline2')}
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              color: '#E8E8E8',
              fontSize: '1.08rem',
              lineHeight: 1.75,
              fontWeight: 400,
              fontFamily: 'Inter, sans-serif',
              marginBottom: '2.8rem',
              letterSpacing: '-0.005em',
              maxWidth: '500px',
            }}
          >
            {t('hero.description')}
          </motion.p>

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
            {/* Gold Primary Button */}
            <motion.a
              href="#audit"
              whileHover={{ scale: 1.07, y: -3 }}
              whileTap={{ scale: 0.96 }}
              style={{
                background: '#0077BE',
                color: '#1a1a1a',
                padding: '1.2rem 3rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.98rem',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-0.01em',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 40px rgba(0, 119, 190, 0.8), 0 12px 35px rgba(0, 119, 190, 0.45)',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                display: 'inline-block',
                whiteSpace: 'nowrap',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 60px rgba(0, 119, 190, 1), 0 18px 50px rgba(0, 119, 190, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 119, 190, 0.8), 0 12px 35px rgba(0, 119, 190, 0.45)';
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
                color: '#FFFFFF',
                padding: '1.2rem 3rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.98rem',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-0.01em',
                border: '2px solid rgba(255, 255, 255, 1)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                display: 'inline-block',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 119, 190, 0.12)';
                e.currentTarget.style.borderColor = '#0077BE';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 119, 190, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 1)';
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

          p[style*="D4AF37"][style*="Playfair"] {
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

          a[style*="D4AF37"][style*="D4AF37"],
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
