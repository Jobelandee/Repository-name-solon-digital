
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function MethodPage() {
  const { t } = useTranslation();

  // Build methods array from translations
  const methods = [
    { num: '1', title: t('method.step1_title'), description: t('method.step1_description') },
    { num: '2', title: t('method.step2_title'), description: t('method.step2_description') },
    { num: '3', title: t('method.step3_title'), description: t('method.step3_description') },
    { num: '4', title: t('method.step4_title'), description: t('method.step4_description') },
    { num: '5', title: t('method.step5_title'), description: t('method.step5_description') },
  ];

  return (
    <div style={{
      background: '#FFFFFF',
      minHeight: '100vh',
      paddingTop: '2rem',
    }}>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          paddingBottom: '4rem',
          paddingTop: '2rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700,
          color: '#333333',
          fontFamily: 'Outfit, sans-serif',
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
        }}>
          {t('method.title') || 'Our Method'}
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#555555',
          lineHeight: 1.6,
          fontFamily: 'Outfit, sans-serif',
        }}>
          {t('method.subtitle')}
        </p>
      </motion.div>

      {/* Process Timeline */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 2rem 6rem',
      }}>
        <div style={{
          display: 'grid',
          gap: '3rem',
        }}>
          {methods.map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '100px 1fr',
                gap: '2rem',
                alignItems: 'flex-start',
              }}
            >
              {/* Step Number */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0077BE, #0099FF)',
                fontWeight: 700,
                fontSize: '2rem',
                color: '#333333',
                flexShrink: 0,
              }}>
                {method.num}
              </div>

              {/* Content */}
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#333333',
                  marginBottom: '0.75rem',
                  fontFamily: 'Outfit, sans-serif',
                }}>
                  {method.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#666',
                  lineHeight: 1.6,
                }}>
                  {method.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
          color: '#FFFFFF',
          padding: '4rem 2rem',
          textAlign: 'center',
        }}
      >
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: '1rem',
          fontFamily: 'Outfit, sans-serif',
        }}>
          {t('method.cta_title')}
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#E0E0E0',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem',
        }}>
          {t('method.cta_description')}
        </p>
        <a href="/#audit" style={{
          display: 'inline-block',
          background: '#0077BE',
          color: '#333333',
          padding: '1rem 2.5rem',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          boxShadow: '0 0 30px rgba(0, 119, 190, 0.7)',
        }}
        >
          {t('method.cta_button')}
        </a>
      </motion.div>
    </div>
  );
}
