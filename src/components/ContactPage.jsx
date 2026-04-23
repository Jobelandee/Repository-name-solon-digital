import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
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
          color: '#1a1a1a',
          fontFamily: 'Playfair Display, serif',
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
        }}>
          Get In Touch
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          lineHeight: 1.6,
        }}>
          Have questions? We'd love to hear from you. Reach out through any of the methods below.
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
              background: '#F8F8F8',
              padding: '2rem',
              borderRadius: '12px',
              textAlign: 'center',
              border: '1px solid #e8e8e8',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#D4AF37';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(212, 175, 55, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e8e8e8';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📧</div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '0.5rem',
              fontFamily: 'Playfair Display, serif',
            }}>
              Email
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '1rem',
            }}>
              Send us an email anytime
            </p>
            <a href="mailto:job@gymtogether.nl" style={{
              color: '#D4AF37',
              textDecoration: 'none',
              fontWeight: 600,
            }}>
              job@gymtogether.nl
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              background: '#F8F8F8',
              padding: '2rem',
              borderRadius: '12px',
              textAlign: 'center',
              border: '1px solid #e8e8e8',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#25D366';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(37, 211, 102, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e8e8e8';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💬</div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '0.5rem',
              fontFamily: 'Playfair Display, serif',
            }}>
              WhatsApp
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '1rem',
            }}>
              Quick chat via WhatsApp
            </p>
            <a
              href="https://wa.me/34612345678?text=Hola!%20I'm%20interested%20in%20your%20website%20services"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#25D366',
                textDecoration: 'none',
                fontWeight: 600,
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
              background: '#F8F8F8',
              padding: '2rem',
              borderRadius: '12px',
              textAlign: 'center',
              border: '1px solid #e8e8e8',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#D4AF37';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(212, 175, 55, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e8e8e8';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📅</div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '0.5rem',
              fontFamily: 'Playfair Display, serif',
            }}>
              Book a Demo
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '1rem',
            }}>
              Schedule your free strategy session
            </p>
            <a href="/#audit" style={{
              color: '#D4AF37',
              textDecoration: 'none',
              fontWeight: 600,
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
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
          color: '#FFFFFF',
          padding: '4rem 2rem',
          textAlign: 'center',
        }}
      >
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '1rem',
          fontFamily: 'Playfair Display, serif',
        }}>
          What to Expect
        </h2>
        <p style={{
          fontSize: '1rem',
          color: '#E0E0E0',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.8,
        }}>
          Whether you reach out via email, WhatsApp, or our booking form, we'll respond within 24 hours.
          We'll listen to your needs, understand your goals, and discuss how we can help grow your digital presence.
        </p>
      </motion.div>
    </div>
  );
}
