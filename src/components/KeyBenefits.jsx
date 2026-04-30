import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function KeyBenefits() {
  const { t } = useTranslation();
  const ref = useRef(null);

  const benefits = [
    {
      icon: '⏰',
      titleKey: 'keyBenefits.benefit1.title',
      descriptionKey: 'keyBenefits.benefit1.description',
      color: '#FF9500',
    },
    {
      icon: '🔍',
      titleKey: 'keyBenefits.benefit2.title',
      descriptionKey: 'keyBenefits.benefit2.description',
      color: '#0077BE',
    },
    {
      icon: '💼',
      titleKey: 'keyBenefits.benefit3.title',
      descriptionKey: 'keyBenefits.benefit3.description',
      color: '#25D366',
    },
    {
      icon: '📈',
      titleKey: 'keyBenefits.benefit4.title',
      descriptionKey: 'keyBenefits.benefit4.description',
      color: '#A82A6F',
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        background: '#FFFFFF',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
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
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
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
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: '#333333',
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '1.2rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            {t('keyBenefits.sectionTitle')}
          </h2>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#666666',
              fontFamily: 'Outfit, sans-serif',
              lineHeight: 1.7,
              fontWeight: 400,
              letterSpacing: '-0.005em',
            }}
          >
            {t('keyBenefits.sectionSubtitle')}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem',
            placeItems: 'center',
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              style={{
                background: '#F5F5F5',
                border: `2px solid ${benefit.color}`,
                borderRadius: '16px',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 24px ${benefit.color}22`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  fontSize: '3.5rem',
                  marginBottom: '1rem',
                  display: 'block',
                }}
              >
                {benefit.icon}
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: benefit.color,
                  marginBottom: '1rem',
                  fontFamily: 'Outfit, sans-serif',
                }}
              >
                {t(benefit.titleKey)}
              </h3>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: '#555555',
                  lineHeight: 1.6,
                  fontFamily: 'Outfit, sans-serif',
                }}
              >
                {t(benefit.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
