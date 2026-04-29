import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ConfirmationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const routeBookingData = location.state?.bookingData;
  const storedBookingData = localStorage.getItem('bookingData') ? JSON.parse(localStorage.getItem('bookingData')) : null;
  const bookingData = routeBookingData || storedBookingData;

  useEffect(() => {
    if (!bookingData) {
      navigate('/');
    }
  }, [bookingData, navigate]);

  if (!bookingData) return null;

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* 3D Background Grid */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(0, 119, 190, 0.05) 25%, rgba(0, 119, 190, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 119, 190, 0.05) 75%, rgba(0, 119, 190, 0.05) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(0, 119, 190, 0.05) 25%, rgba(0, 119, 190, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 119, 190, 0.05) 75%, rgba(0, 119, 190, 0.05) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '60px 60px',
        opacity: 0.3,
        zIndex: 0,
      }} />

      {/* Spotlight effect */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1000px',
        height: '1000px',
        background: 'radial-gradient(circle, rgba(0, 119, 190, 0.15) 0%, transparent 70%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <motion.div
        style={{
          maxWidth: '800px',
          width: '100%',
          position: 'relative',
          zIndex: 10,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Success Icon */}
        <motion.div
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0077BE, #E5C158)',
            marginBottom: '2rem',
            boxShadow: '0 8px 32px rgba(0, 119, 190, 0.4)',
          }}>
            <svg style={{ width: '48px', height: '48px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 4px 20px rgba(0, 119, 190, 0.3)',
            letterSpacing: '-0.02em',
          }}>
            We've Got Your Back!
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: '#E0E0E0',
            marginBottom: '2rem',
            lineHeight: 1.6,
          }}>
            Your demo request has been received. We'll review your information and reach out shortly.
          </p>
        </motion.div>

        {/* Glass Card - Booking Details */}
        <motion.div
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 119, 190, 0.2)',
            borderRadius: '16px',
            padding: '3rem',
            marginBottom: '2rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '2rem',
            fontFamily: 'Playfair Display, serif',
          }}>
            Your Information
          </h2>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              style={{ display: 'flex', gap: '1rem' }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'rgba(0, 119, 190, 0.15)',
                flexShrink: 0,
              }}>
                <svg style={{ width: '20px', height: '20px', color: '#0077BE' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0077BE', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Name</p>
                <p style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 500 }}>{bookingData.name}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              style={{ display: 'flex', gap: '1rem' }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'rgba(0, 119, 190, 0.15)',
                flexShrink: 0,
              }}>
                <svg style={{ width: '20px', height: '20px', color: '#0077BE' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0077BE', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Email</p>
                <p style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 500 }}>{bookingData.email}</p>
              </div>
            </motion.div>

            {bookingData.brandUrl && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 }}
                style={{ display: 'flex', gap: '1rem' }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'rgba(0, 119, 190, 0.15)',
                  flexShrink: 0,
                }}>
                  <svg style={{ width: '20px', height: '20px', color: '#0077BE' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0077BE', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Website</p>
                  <p style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 500, wordBreak: 'break-all' }}>{bookingData.brandUrl}</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* What Happens Next */}
        <motion.div
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 119, 190, 0.2)',
            borderRadius: '16px',
            padding: '3rem',
            marginBottom: '2rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '2rem',
            fontFamily: 'Playfair Display, serif',
          }}>
            What's Next?
          </h3>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {[
              { num: '1', title: 'We Review Your Data', desc: 'Our team will analyze your website and business goals' },
              { num: '2', title: 'Schedule Your Demo', desc: 'We\'ll reach out to set up a time that works for you' },
              { num: '3', title: 'Get Your Strategy', desc: 'Discover exactly how we can help your business grow' },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                style={{ display: 'flex', gap: '1rem' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 + idx * 0.1 }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0077BE, #E5C158)',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  fontSize: '1rem',
                  flexShrink: 0,
                }}>
                  {step.num}
                </div>
                <div>
                  <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.25rem' }}>{step.title}</p>
                  <p style={{ fontSize: '0.95rem', color: '#CCCCCC' }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            onClick={() => navigate('/')}
            style={{
              background: '#0077BE',
              color: '#1a1a1a',
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(0, 119, 190, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: '0 0 30px rgba(0, 119, 190, 0.8), 0 8px 24px rgba(0, 119, 190, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Home
          </motion.button>

          <motion.a
            href="mailto:job@gymtogether.nl"
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '4px',
              border: '1px solid rgba(0, 119, 190, 0.6)',
              color: '#E0E0E0',
              textDecoration: 'none',
              cursor: 'pointer',
              display: 'inline-block',
            }}
            whileHover={{
              scale: 1.08,
              backgroundColor: 'rgba(0, 119, 190, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </motion.div>

        {/* Footer Message */}
        <motion.p
          style={{
            textAlign: 'center',
            color: '#999999',
            fontSize: '0.95rem',
            marginTop: '3rem',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Your information is secure and handled with complete confidentiality.
        </motion.p>
      </motion.div>
    </div>
  );
}
