import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function ServicesPage() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites that convert visitors into customers',
      features: ['Responsive Design', 'Fast Performance', 'SEO-Optimized', 'Secure & Scalable']
    },
    {
      icon: '📊',
      title: 'SEO Optimization',
      description: 'Rank first on Google and dominate your market',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Monthly Reports']
    },
    {
      icon: '⚡',
      title: 'AI Automation',
      description: 'Smart automation to save time and increase efficiency',
      features: ['Lead Qualification', '24/7 Support', 'Workflow Automation', 'Cost Reduction']
    },
    {
      icon: '💬',
      title: 'AI Chatbots',
      description: '24/7 intelligent customer support and lead generation',
      features: ['Instant Responses', 'Lead Capture', 'FAQ Automation', 'Multi-language']
    }
  ];

  return (
    <section
      ref={ref}
      style={{
        background: '#FFFFFF',
        minHeight: '100vh',
        paddingTop: '6rem',
      }}
    >
      {/* Hero Section */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '4rem 2rem',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: 'clamp(280px, 90vw, 900px)',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 700,
            color: '#333333',
            fontFamily: 'Outfit, sans-serif',
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}>
            {t('servicesPage.title') || 'Our Services'}
          </h1>
          <p style={{
            fontSize: 'clamp(0.95rem, 3.5vw, 1.2rem)',
            color: '#555555',
            fontFamily: 'Outfit, sans-serif',
            lineHeight: 1.7,
            maxWidth: '700px',
            margin: '0 auto 4rem',
          }}>
            {t('servicesPage.subtitle') || 'Everything you need to grow your business online'}
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem 8rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
        }}>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{
        background: '#F5F5F5',
        border: '1px solid #E0E0E0',
        borderRadius: '16px',
        padding: '2.5rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#0077BE';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 119, 190, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#E0E0E0';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Icon */}
      <div style={{
        fontSize: '3rem',
        marginBottom: '1.5rem',
        lineHeight: 1,
      }}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#0077BE',
        marginBottom: '1rem',
        fontFamily: 'Outfit, sans-serif',
        letterSpacing: '-0.01em',
      }}>
        {service.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: '0.95rem',
        lineHeight: 1.6,
        color: '#555555',
        fontFamily: 'Outfit, sans-serif',
        fontWeight: 400,
        marginBottom: '1.5rem',
      }}>
        {service.description}
      </p>

      {/* Features */}
      <div style={{
        paddingTop: '1.5rem',
        borderTop: '1px solid #E0E0E0',
      }}>
        <p style={{
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#FF9500',
          fontWeight: 700,
          marginBottom: '1rem',
          margin: '0 0 1rem 0',
        }}>
          Features
        </p>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}>
          {service.features.map((feature, idx) => (
            <li key={idx} style={{
              fontSize: '0.85rem',
              color: '#333333',
              fontFamily: 'Outfit, sans-serif',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <span style={{ color: '#FF9500', fontWeight: 700 }}>✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
