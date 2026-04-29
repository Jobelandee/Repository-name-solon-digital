import { useTranslation } from 'react-i18next';
import React from 'react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/websiteContent';

export default function ContactPage() {
  const { t } = useTranslation();

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
          {t('contact.title')}
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#555555',
          lineHeight: 1.6,
          fontFamily: 'Outfit, sans-serif',
        }}>
          {t('contact.subtitle')} We'd love to hear from you. Reach out through any of the methods below.
        </p>
      </motion.div>

      {/* Contact Options */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 2rem 6rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            style={{
              background: '#F5F5F5',
              padding: '2rem',
              borderRadius: '12px',
              textAlign: 'center',
              border: '1px solid #E0E0E0',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0077BE';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 119, 190, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E0E0E0';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📧</div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#333333',
              marginBottom: '0.5rem',
              fontFamily: 'Outfit, sans-serif',
            }}>
              Email
            </h3>
            <p style={{
              color: '#555555',
              marginBottom: '1rem',
              fontFamily: 'Outfit, sans-serif',
            }}>
              {t('contact.email_label')}
            </p>
            <a href="mailto:info@solondigital.com" style={{
              color: '#0077BE',
              textDecoration: 'none',
              fontWeight: 600,
              fontFamily: 'Outfit, sans-serif',
            }}>
              info@solondigital.com
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              background: '#F5F5F5',
              padding: '2rem',
              borderRadius: '12px',
              textAlign: 'center',
              border: '1px solid #E0E0E0',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#25D366';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(37, 211, 102, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E0E0E0';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💬</div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#333333',
              marginBottom: '0.5rem',
              fontFamily: 'Outfit, sans-serif',
            }}>
              WhatsApp
            </h3>
            <p style={{
              color: '#555555',
              marginBottom: '1rem',
              fontFamily: 'Outfit, sans-serif',
            }}>
              Quick chat via WhatsApp
            </p>
            <a
              href={websiteContent.contact.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#25D366',
                textDecoration: 'none',
                fontWeight: 600,
                fontFamily: 'Outfit, sans-serif',
              }}
            >
              Start Chat
            </a>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: '#F5F5F5',
              padding: '2rem',
              borderRadius: '12px',
              textAlign: 'center',
              border: '1px solid #E0E0E0',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0077BE';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 119, 190, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E0E0E0';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📅</div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#333333',
              marginBottom: '0.5rem',
              fontFamily: 'Outfit, sans-serif',
            }}>
              Book a Demo
            </h3>
            <p style={{
              color: '#555555',
              marginBottom: '1rem',
              fontFamily: 'Outfit, sans-serif',
            }}>
              Schedule your free strategy session
            </p>
            <a href="/#audit" style={{
              color: '#0077BE',
              textDecoration: 'none',
              fontWeight: 600,
              fontFamily: 'Outfit, sans-serif',
            }}>
              Book Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          background: '#F5F5F5',
          color: '#333333',
          padding: '4rem 2rem',
          textAlign: 'center',
        }}
      >
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '1rem',
          fontFamily: 'Outfit, sans-serif',
          color: '#0077BE',
        }}>
          What to Expect
        </h2>
        <p style={{
          fontSize: '1rem',
          color: '#555555',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.8,
          fontFamily: 'Outfit, sans-serif',
        }}>
          Whether you reach out via email, WhatsApp, or our booking form, we'll respond within 24 hours.
          We'll listen to your needs, understand your goals, and discuss how we can help grow your digital presence.
        </p>
      </motion.div>
    </div>
  );
}
