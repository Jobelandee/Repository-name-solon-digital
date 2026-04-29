import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Most custom websites take 4-6 weeks from discovery to launch. Simple projects start at 2-3 weeks, while complex e-commerce sites may take 8-12 weeks.'
    },
    {
      question: 'What is the cost of your services?',
      answer: 'Website projects start at €2,500. AI automation setups range from €5,000-15,000 depending on complexity. SEO packages start at €500/month. We provide custom quotes after understanding your goals.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes! We offer 3-month included support with all projects, then monthly maintenance packages starting at €200/month including updates, security patches, and performance optimization.'
    },
    {
      question: 'Can I expand my website later?',
      answer: 'Absolutely. We build scalable solutions from day one. Adding new features, integrations, or pages is straightforward and cost-effective with our modular approach.'
    },
    {
      question: 'Do you guarantee Google first page ranking?',
      answer: 'We don\'t guarantee rankings (no honest SEO agency does), but we implement proven strategies. Our clients typically see top 5 positions within 3-6 months for targeted keywords.'
    },
    {
      question: 'How does AI automation help my business?',
      answer: 'AI automation handles repetitive tasks: customer support, lead qualification, booking scheduling, form responses. This saves 10+ hours/week while improving customer experience and conversion rates.'
    }
  ];

  return (
    <section style={{
      background: '#FFFFFF',
      padding: '8rem 2rem',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
          }}
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(0, 119, 190, 0.1)',
            border: '1px solid rgba(0, 119, 190, 0.2)',
            borderRadius: '20px',
            padding: '0.5rem 1.2rem',
            marginBottom: '1.5rem',
          }}>
            <span style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#0077BE',
              fontWeight: 700,
            }}>
              FAQ
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 700,
            color: '#333333',
            fontFamily: 'Outfit, sans-serif',
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: '#555555',
            fontFamily: 'Outfit, sans-serif',
            lineHeight: 1.6,
          }}>
            Everything you need to know about our services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isActive={activeIndex === index}
              onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, index, isActive, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: false, amount: 0.2 }}
      style={{
        border: '1px solid #E0E0E0',
        borderRadius: '12px',
        background: '#FFFFFF',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        borderColor: isActive ? '#0077BE' : '#E0E0E0',
        boxShadow: isActive ? '0 4px 16px rgba(0, 119, 190, 0.1)' : 'none',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          padding: '1.5rem',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'left',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#F5F5F5';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
        }}
      >
        <h3 style={{
          fontSize: '1.05rem',
          fontWeight: 700,
          color: '#333333',
          fontFamily: 'Outfit, sans-serif',
          margin: 0,
          flex: 1,
          letterSpacing: '-0.005em',
        }}>
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isActive ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            fontSize: '1.5rem',
            color: '#0077BE',
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          +
        </motion.div>
      </button>

      {/* Answer */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          overflow: 'hidden',
        }}
      >
        <div style={{
          padding: '0 1.5rem 1.5rem',
          borderTop: '1px solid #E0E0E0',
          paddingTop: '1rem',
        }}>
          <p style={{
            fontSize: '0.95rem',
            color: '#555555',
            lineHeight: 1.7,
            fontFamily: 'Outfit, sans-serif',
            margin: 0,
            fontWeight: 400,
          }}>
            {answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
