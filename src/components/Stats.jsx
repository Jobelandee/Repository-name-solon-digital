import { useTranslation } from 'react-i18next';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

export default function Stats() {
  const { t } = useTranslation();

  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  const stats = [
    {
      keyword: t('stats.stat1_keyword'),
      label: t('stats.stat1_label'),
      description: t('stats.stat1_description'),
      isLava: false,
    },
    {
      keyword: 'Lava',
      label: 'Fast Loading',
      description: 'Extreme performance optimization. Speed that keeps your customers engaged.',
      isLava: true,
    },
    {
      keyword: 'AI-First',
      label: 'Future Proof',
      description: 'Digital systems that work 24/7, automating your bookings and leads.',
      isLava: false,
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        padding: '10rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 3D Background Grid */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0, 119, 190, 0.03) 25%, rgba(0, 119, 190, 0.03) 26%, transparent 27%, transparent 74%, rgba(0, 119, 190, 0.03) 75%, rgba(0, 119, 190, 0.03) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 119, 190, 0.03) 25%, rgba(0, 119, 190, 0.03) 26%, transparent 27%, transparent 74%, rgba(0, 119, 190, 0.03) 75%, rgba(0, 119, 190, 0.03) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.2,
          zIndex: 0,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Stats Grid - Premium Spacing */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '5rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(0, 119, 190, 0.15)',
        borderRadius: '16px',
        padding: '4rem 3rem',
        textAlign: 'center',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Main Keyword with Gradient - HUGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
        style={{
          fontSize: '4.5rem',
          fontWeight: 900,
          marginBottom: '0.5rem',
          fontFamily: 'Playfair Display, serif',
          letterSpacing: '-0.02em',
          background: stat.isLava
            ? 'linear-gradient(135deg, #FF8C00, #FFB700, #FFFFFF)'
            : 'linear-gradient(135deg, #0077BE, #FFFFFF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: stat.isLava
            ? '0 0 30px rgba(255, 140, 0, 0.5), 0 8px 30px rgba(255, 140, 0, 0.3)'
            : '0 0 30px rgba(0, 119, 190, 0.5), 0 8px 30px rgba(0, 119, 190, 0.3)',
          filter: stat.isLava ? 'drop-shadow(0 0 20px rgba(255, 140, 0, 0.6))' : 'drop-shadow(0 0 20px rgba(0, 119, 190, 0.5))',
        }}
      >
        {stat.keyword}
      </motion.div>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
        style={{
          fontSize: '1.1rem',
          fontWeight: 700,
          color: stat.isLava ? '#FFB700' : '#0077BE',
          marginBottom: '1.5rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {stat.label}
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        style={{
          fontSize: '1rem',
          lineHeight: 1.7,
          color: '#D0D0D0',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
        }}
      >
        {stat.description}
      </motion.p>
    </motion.div>
  );
}
