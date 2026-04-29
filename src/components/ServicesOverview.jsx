import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function ServicesOverview() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const services = [
    {
      icon: '🌐',
      key: 'service1',
    },
    {
      icon: '🔍',
      key: 'service2',
    },
    {
      icon: '⚡',
      key: 'service3',
    },
    {
      icon: '💬',
      key: 'service4',
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        background: '#F5F5F5',
        padding: '8rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0, 119, 190, 0.02) 0%, rgba(255, 149, 0, 0.01) 100%)',
          zIndex: 0,
          pointerEvents: 'none',
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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: '5rem',
            maxWidth: '700px',
            margin: '0 auto 5rem',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#0077BE',
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            {t('services.title')}
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#555555',
              fontFamily: 'Outfit, sans-serif',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            {t('services.description')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              translationKey={service.key}
              index={index}
              inView={inView}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, translationKey, index, inView, t }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{
        background: '#FFFFFF',
        border: '1px solid #E0E0E0',
        borderRadius: '16px',
        padding: '2.5rem',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#0077BE';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 119, 190, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#E0E0E0';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
      }}
    >
      {/* Icon */}
      <div
        style={{
          fontSize: '3rem',
          marginBottom: '1.5rem',
          lineHeight: 1,
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '1.3rem',
          fontWeight: 700,
          color: '#0077BE',
          marginBottom: '1rem',
          fontFamily: 'Outfit, sans-serif',
          letterSpacing: '-0.01em',
        }}
      >
        {t(`services.${translationKey}.name`)}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.95rem',
          lineHeight: 1.7,
          color: '#555555',
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 400,
        }}
      >
        {t(`services.${translationKey}.desc`)}
      </p>
    </motion.div>
  );
}
