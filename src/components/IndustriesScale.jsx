
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function IndustriesScale() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  // Industries with their styling
  const industries = [
    {
      title: t('industries.gym.title'),
      description: t('industries.gym.description'),
      glowColor: '#0077BE',
      accentColor: '#4A90E2',
    },
    {
      title: t('industries.realestate.title'),
      description: t('industries.realestate.description'),
      glowColor: '#8B7355',
      accentColor: '#D4A574',
    },
    {
      title: t('industries.services.title'),
      description: t('industries.services.description'),
      glowColor: '#0099FF',
      accentColor: '#FFA500',
    },
  ].map(ind => ({
    title: ind.title,
    glowColor: ind.glowColor,
    accentColor: ind.accentColor,
    text: ind.description,
  }));

  return (
    <section
      ref={ref}
      style={{
        background: '#F8F5FF',
        padding: '8rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Background Gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(199, 53, 132, 0.03) 0%, rgba(0, 119, 190, 0.03) 100%)',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: '5rem',
            maxWidth: '900px',
            margin: '0 auto 5rem',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2.8rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: '#1a1a4d',
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '1.2rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            {t('industries.title')}
          </h2>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#444444',
              fontFamily: 'Outfit, sans-serif',
              lineHeight: 1.7,
              fontWeight: 400,
              letterSpacing: '-0.005em',
            }}
          >
            {t('industries.subtitle')}
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
            maxWidth: '1200px',
            margin: '0 auto 5rem',
          }}
        >
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} index={index} inView={inView} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            textAlign: 'center',
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: '4rem 2rem',
            background: 'rgba(199, 53, 132, 0.08)',
            borderRadius: '20px',
            border: '1px solid rgba(199, 53, 132, 0.2)',
          }}
        >
          {/* Secondary CTA - Show All Pillars */}
          <motion.a
            href="#industries"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            style={{
              color: '#C73584',
              padding: '1.1rem 2.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.95rem',
              fontFamily: 'Outfit, sans-serif',
              letterSpacing: '-0.01em',
              border: '2px solid rgba(199, 53, 132, 0.5)',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(199, 53, 132, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(199, 53, 132, 1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(199, 53, 132, 0.5)';
            }}
          >
            {t('header.services')} →
          </motion.a>

          {/* Primary CTA - Claim Your Audit */}
          <motion.a
            href="#audit"
            whileHover={{ scale: 1.07, y: -2 }}
            whileTap={{ scale: 0.96 }}
            style={{
              background: '#C73584',
              color: '#FFFFFF',
              padding: '1.1rem 2.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.95rem',
              fontFamily: 'Outfit, sans-serif',
              letterSpacing: '-0.01em',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 6px 16px rgba(199, 53, 132, 0.3)',
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#A82A6F';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(199, 53, 132, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#C73584';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(199, 53, 132, 0.3)';
            }}
          >
            {t('auditForm.button')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function IndustryCard({ industry, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      style={{
        background: '#FFFFFF',
        border: '1px solid #E0E0E0',
        borderRadius: '20px',
        padding: '3.5rem 2.5rem',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.4s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#C73584';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(199, 53, 132, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#E0E0E0';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
      }}
    >
      {/* Subtle Gradient Background */}
      <div
        style={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, rgba(199, 53, 132, 0.08) 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* Inner Subtle Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: `radial-gradient(circle, rgba(199, 53, 132, 0.05) 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />

      {/* Top Purple Accent Line */}
      <div
        style={{
          height: '3px',
          width: '40px',
          background: '#C73584',
          borderRadius: '2px',
          marginBottom: '2rem',
          position: 'relative',
          zIndex: 2,
        }}
      />

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.15 + 0.15 }}
        style={{
          fontSize: '1.8rem',
          fontWeight: 800,
          color: '#1a1a4d',
          marginBottom: '1.5rem',
          fontFamily: 'Outfit, sans-serif',
          letterSpacing: '-0.01em',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {industry.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.15 + 0.2 }}
        style={{
          fontSize: '1.05rem',
          lineHeight: 1.8,
          color: '#444444',
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 400,
          marginBottom: '2rem',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {industry.text}
      </motion.p>

    </motion.div>
  );
}
