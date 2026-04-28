import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { sendEmails } from '../services/emailService';

export default function AuditForm() {
  const ref = useRef(null);
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
      setError('Please fill in all fields');
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

    // Try Firebase & Email in background (don't wait)
    try {
      addDoc(collection(db, 'bookings'), bookingData).catch(() => {});
      sendEmails(bookingData).catch(() => {});
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
        background: '#0a0a0a',
        padding: '8rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Background Grid */}
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
              color: '#FFFFFF',
              fontFamily: 'Playfair Display, serif',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Claim Your Growth Audit
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#D0D0D0',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.7,
              fontWeight: 400,
              letterSpacing: '-0.005em',
            }}
          >
            Spend 15 minutes with us. Leave with a digital roadmap. No fluff, just results.
          </p>
        </motion.div>

        {/* Form Container - Compact & Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{
            background: 'rgba(255, 255, 255, 0.07)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '20px',
            padding: '3.5rem',
            maxWidth: '500px',
            margin: '0 auto',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.08)',
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
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '0.5rem',
                  fontFamily: 'Playfair Display, serif',
                }}
              >
                Thank you!
              </h3>
              <p
                style={{
                  color: '#CCCCCC',
                  fontSize: '1rem',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                We'll be in touch shortly via WhatsApp.
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
                    color: '#E8E8E8',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  placeholder="Your full name"
                  style={{
                    width: '100%',
                    padding: '0.95rem 1.2rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: focused === 'name' ? '1.5px solid #D4AF37' : '1.5px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    fontSize: '1rem',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'all 0.3s ease',
                    boxShadow: focused === 'name' ? '0 0 15px rgba(212, 175, 55, 0.3)' : 'none',
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
                    color: '#E8E8E8',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  onFocus={() => setFocused('businessName')}
                  onBlur={() => setFocused(null)}
                  placeholder="Your business name"
                  style={{
                    width: '100%',
                    padding: '0.95rem 1.2rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: focused === 'businessName' ? '1.5px solid #D4AF37' : '1.5px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    fontSize: '1rem',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'all 0.3s ease',
                    boxShadow: focused === 'businessName' ? '0 0 15px rgba(212, 175, 55, 0.3)' : 'none',
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
                    color: '#E8E8E8',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  onFocus={() => setFocused('whatsapp')}
                  onBlur={() => setFocused(null)}
                  placeholder="+34 XXX XX XX XX"
                  style={{
                    width: '100%',
                    padding: '0.95rem 1.2rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: focused === 'whatsapp' ? '1.5px solid #D4AF37' : '1.5px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    fontSize: '1rem',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'all 0.3s ease',
                    boxShadow: focused === 'whatsapp' ? '0 0 15px rgba(212, 175, 55, 0.3)' : 'none',
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
                    background: 'rgba(255, 71, 87, 0.15)',
                    border: '1px solid rgba(255, 71, 87, 0.4)',
                    borderRadius: '6px',
                    color: '#FF6B87',
                    fontSize: '0.9rem',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {error}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: '#D4AF37',
                  color: '#1a1a1a',
                  padding: '1.15rem 2.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '-0.01em',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.7), 0 8px 25px rgba(212, 175, 55, 0.4)',
                  transition: 'all 0.3s ease',
                  marginTop: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.boxShadow = '0 0 50px rgba(212, 175, 55, 0.9), 0 12px 35px rgba(212, 175, 55, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.7), 0 8px 25px rgba(212, 175, 55, 0.4)';
                }}
              >
                {loading ? 'Booking...' : 'Book My Session →'}
              </motion.button>

              {/* Privacy Note */}
              <p
                style={{
                  fontSize: '0.8rem',
                  color: '#888888',
                  textAlign: 'center',
                  fontFamily: 'Inter, sans-serif',
                  marginTop: '0.5rem',
                }}
              >
                We respect your privacy. Your data is secure.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
