import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { websiteContent } from '../data/websiteContent';

export default function IndustriesScale() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  // Map websiteContent industries to the format used here
  const industries = websiteContent.industries.map(ind => ({
    title: ind.title,
    glowColor: ind.glowColor,
    accentColor: ind.accentColor,
    text: ind.description,
  }));

  return (
    <section
      ref={ref}
      style={{
        background: '#0a0a0a',
        padding: '8rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Grid */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(212, 175, 55, 0.02) 25%, rgba(212, 175, 55, 0.02) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.02) 75%, rgba(212, 175, 55, 0.02) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(212, 175, 55, 0.02) 25%, rgba(212, 175, 55, 0.02) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.02) 75%, rgba(212, 175, 55, 0.02) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '60px 60px',
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
              color: '#FFFFFF',
              fontFamily: 'Playfair Display, serif',
              marginBottom: '1.2rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              textShadow: '0 8px 32px rgba(212, 175, 55, 0.25)',
            }}
          >
            {websiteContent.sections.industriesTitle}
          </h2>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#E0E0E0',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.7,
              fontWeight: 400,
              letterSpacing: '-0.005em',
            }}
          >
            {websiteContent.sections.industriesSubtitle}
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
            background: 'rgba(212, 175, 55, 0.08)',
            borderRadius: '20px',
            border: '1px solid rgba(212, 175, 55, 0.2)',
          }}
        >
          {/* Secondary CTA - Show All Pillars */}
          <motion.a
            href="#industries"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            style={{
              color: '#D4AF37',
              padding: '1.1rem 2.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.95rem',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              border: '2px solid rgba(212, 175, 55, 0.5)',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)';
            }}
          >
            Show All Pillars →
          </motion.a>

          {/* Primary CTA - Claim Your Audit */}
          <motion.a
            href="#audit"
            whileHover={{ scale: 1.07, y: -2 }}
            whileTap={{ scale: 0.96 }}
            style={{
              background: '#D4AF37',
              color: '#1a1a1a',
              padding: '1.1rem 2.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.95rem',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 30px rgba(212, 175, 55, 0.7), 0 8px 20px rgba(212, 175, 55, 0.4)',
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 50px rgba(212, 175, 55, 0.9), 0 12px 35px rgba(212, 175, 55, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.7), 0 8px 20px rgba(212, 175, 55, 0.4)';
            }}
          >
            Claim Your Audit →
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
        background: '#0f0f0f',
        border: `2px solid ${industry.glowColor}33`,
        borderRadius: '20px',
        padding: '3.5rem 2.5rem',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: `0 0 40px ${industry.glowColor}33, inset 0 1px 1px rgba(255, 255, 255, 0.05)`,
        transition: 'all 0.4s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${industry.glowColor}77`;
        e.currentTarget.style.boxShadow = `0 0 80px ${industry.glowColor}66, inset 0 1px 1px rgba(255, 255, 255, 0.1)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${industry.glowColor}33`;
        e.currentTarget.style.boxShadow = `0 0 40px ${industry.glowColor}33, inset 0 1px 1px rgba(255, 255, 255, 0.05)`;
      }}
    >
      {/* 3D Glow Background */}
      <div
        style={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${industry.glowColor}44 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* Inner Glow Circle */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: `radial-gradient(circle, ${industry.glowColor}33 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />

      {/* Top Gold Accent Line */}
      <div
        style={{
          height: '3px',
          width: '40px',
          background: '#D4AF37',
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
          color: '#FFFFFF',
          marginBottom: '1.5rem',
          fontFamily: 'Playfair Display, serif',
          textShadow: `0 0 15px ${industry.glowColor}44`,
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
          color: '#D0D0D0',
          fontFamily: 'Inter, sans-serif',
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
