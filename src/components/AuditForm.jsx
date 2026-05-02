import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { sendEmails } from '../services/emailService';
import { saveBookingToSheet } from '../services/googleSheetsService';

export default function AuditForm() {
  const { t } = useTranslation();
  const ref = useRef(null);
  // Force rebuild
  const inView = useInView(ref, { once: false, amount: 0.3 });
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    whatsapp: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formData.name || !formData.businessName || !formData.whatsapp) {
      setError(t('auditForm.error'));
      setLoading(false);
      return;
    }

    const bookingData = {
      name: formData.name,
      businessName: formData.businessName,
      whatsapp: formData.whatsapp,
      email: formData.email || `${formData.name}@booking.local`,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    // Save to localStorage immediately
    localStorage.setItem('bookingData', JSON.stringify(bookingData));

    // Try Firebase, Email & Google Sheets in background (don't wait)
    try {
      addDoc(collection(db, 'bookings'), bookingData).catch(() => {});
      sendEmails(bookingData).catch(() => {});
      saveBookingToSheet(bookingData).catch(() => {});
    } catch (err) {
      // Silently fail - don't block user experience
    }

    // Mark as submitted and redirect
    setSubmitted(true);
    setLoading(false);

    // Redirect to confirmation
    setTimeout(() => {
      navigate('/confirmation');
    }, 4000);
  };

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
        {/* Section Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
            maxWidth: '700px',
            margin: '0 auto 4rem',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 700,
              color: '#1a1a4d',
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            {t('auditForm.title')}
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#444444',
              fontFamily: 'Outfit, sans-serif',
              lineHeight: 1.7,
              fontWeight: 400,
              letterSpacing: '-0.005em',
            }}
          >
            {t('auditForm.subtitle')}
          </p>
        </motion.div>

        {/* Form Container - Compact & Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{
            background: '#FFFFFF',
            border: '1px solid #E0E0E0',
            borderRadius: '12px',
            padding: '2.5rem',
            maxWidth: '500px',
            margin: '0 auto',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                textAlign: 'center',
                padding: '2rem 0',
              }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  color: '#FF9500',
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '0.5rem',
                  fontFamily: 'Outfit, sans-serif',
                }}
              >
                {t('auditForm.success_title')}
              </h3>
              <p
                style={{
                  color: '#666666',
                  fontSize: '1rem',
                  fontFamily: 'Outfit, sans-serif',
                  lineHeight: 1.6,
                }}
              >
                {t('auditForm.success_message')}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.8rem' }}>
              {/* Full Name Field */}
              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '0.6rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    fontFamily: 'Outfit, sans-serif',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  {t('auditForm.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  placeholder={t('auditForm.namePlaceholder')}
                  style={{
                    width: '100%',
                    padding: '0.95rem 1.2rem',
                    background: '#F8F8F8',
                    border: focused === 'name' ? '1.5px solid #FF9500' : '1.5px solid #D0D0D0',
                    borderRadius: '8px',
                    color: '#1a1a1a',
                    fontSize: '1rem',
                    fontFamily: 'Outfit, sans-serif',
                    transition: 'all 0.3s ease',
                    boxShadow: focused === 'name' ? '0 0 12px rgba(199, 53, 132, 0.15)' : 'none',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Business Name Field */}
              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '0.6rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    fontFamily: 'Outfit, sans-serif',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  {t('auditForm.business')}
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  onFocus={() => setFocused('businessName')}
                  onBlur={() => setFocused(null)}
                  placeholder={t('auditForm.businessPlaceholder')}
                  style={{
                    width: '100%',
                    padding: '0.95rem 1.2rem',
                    background: '#F8F8F8',
                    border: focused === 'businessName' ? '1.5px solid #FF9500' : '1.5px solid #D0D0D0',
                    borderRadius: '8px',
                    color: '#1a1a1a',
                    fontSize: '1rem',
                    fontFamily: 'Outfit, sans-serif',
                    transition: 'all 0.3s ease',
                    boxShadow: focused === 'businessName' ? '0 0 12px rgba(199, 53, 132, 0.15)' : 'none',
                    outline: 'none',
                  }}
                />
              </div>

              {/* WhatsApp Field */}
              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '0.6rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    fontFamily: 'Outfit, sans-serif',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  {t('auditForm.whatsapp')}
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  onFocus={() => setFocused('whatsapp')}
                  onBlur={() => setFocused(null)}
                  placeholder={t('auditForm.whatsappPlaceholder')}
                  style={{
                    width: '100%',
                    padding: '0.95rem 1.2rem',
                    background: '#F8F8F8',
                    border: focused === 'whatsapp' ? '1.5px solid #FF9500' : '1.5px solid #D0D0D0',
                    borderRadius: '8px',
                    color: '#1a1a1a',
                    fontSize: '1rem',
                    fontFamily: 'Outfit, sans-serif',
                    transition: 'all 0.3s ease',
                    boxShadow: focused === 'whatsapp' ? '0 0 12px rgba(199, 53, 132, 0.15)' : 'none',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '0.6rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    fontFamily: 'Outfit, sans-serif',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  placeholder={t('auditForm.emailPlaceholder')}
                  style={{
                    width: '100%',
                    padding: '0.95rem 1.2rem',
                    background: '#F8F8F8',
                    border: focused === 'email' ? '1.5px solid #FF9500' : '1.5px solid #D0D0D0',
                    borderRadius: '8px',
                    color: '#1a1a1a',
                    fontSize: '1rem',
                    fontFamily: 'Outfit, sans-serif',
                    transition: 'all 0.3s ease',
                    boxShadow: focused === 'email' ? '0 0 12px rgba(199, 53, 132, 0.15)' : 'none',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: '0.8rem 1rem',
                    background: '#FEE8E8',
                    border: '1px solid #FF6B87',
                    borderRadius: '6px',
                    color: '#D32F2F',
                    fontSize: '0.9rem',
                    fontFamily: 'Outfit, sans-serif',
                  }}
                >
                  {error}
                </motion.div>
              )}

              {/* Submit Button - Purple */}
              <motion.button
                type="submit"
                disabled={loading}
                style={{
                  background: '#FF9500',
                  color: '#FFFFFF',
                  padding: '1.15rem 2.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  fontFamily: 'Outfit, sans-serif',
                  letterSpacing: '-0.01em',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                  boxShadow: '0 4px 12px rgba(199, 53, 132, 0.3)',
                  transition: 'all 0.3s ease',
                  marginTop: '0.5rem',
                  width: '100%',
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = '#A82A6F';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(199, 53, 132, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FF9500';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(199, 53, 132, 0.3)';
                }}
              >
                {loading ? t('auditForm.loading') : t('auditForm.button')}
              </motion.button>

              {/* Privacy & Trust Note */}
              <div
                style={{
                  fontSize: '0.85rem',
                  color: '#666666',
                  textAlign: 'center',
                  fontFamily: 'Outfit, sans-serif',
                  marginTop: '1.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid #E0E0E0',
                  lineHeight: 1.6,
                }}
              >
                <p style={{ margin: '0 0 0.5rem 0' }}>✓ No credit card required</p>
                <p style={{ margin: '0' }}>{t('auditForm.privacy')}</p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
/* Cache bust */
