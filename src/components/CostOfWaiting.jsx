import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CostOfWaiting() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const painPoints = [
    {
      title: 'The Lead Leak',
      color: '#FF4444',
      description: 'Every day your site is slow, 40% of your visitors bounce to a competitor. That\'s pure profit walking out the door.',
      icon: '📉',
    },
    {
      title: 'The Time Thief',
      color: '#0077BE',
      description: 'Managing bookings via WhatsApp and manual calls is a full-time job you shouldn\'t have. We automate the grind.',
      icon: '⏰',
    },
    {
      title: 'The Invisible Brand',
      color: '#FF4444',
      description: 'If you aren\'t on page 1 of Google, you don\'t exist for the 100,000+ tourists searching for your service right now.',
      icon: '👻',
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)',
        padding: '7rem 2rem',
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
            linear-gradient(0deg, transparent 24%, rgba(255, 68, 68, 0.02) 25%, rgba(255, 68, 68, 0.02) 26%, transparent 27%, transparent 74%, rgba(255, 68, 68, 0.02) 75%, rgba(255, 68, 68, 0.02) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 68, 68, 0.02) 25%, rgba(255, 68, 68, 0.02) 26%, transparent 27%, transparent 74%, rgba(255, 68, 68, 0.02) 75%, rgba(255, 68, 68, 0.02) 76%, transparent 77%, transparent)
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: '5rem',
            maxWidth: 'clamp(280px, 90vw, 800px)',
            margin: '0 auto 5rem',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 4rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              fontFamily: 'Playfair Display, serif',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              textShadow: '0 4px 20px rgba(255, 68, 68, 0.3)',
            }}
          >
            The Cost of Waiting
          </h2>
          <p
            style={{
              fontSize: 'clamp(0.95rem, 3.5vw, 1.15rem)',
              color: '#E0E0E0',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.7,
              fontWeight: 400,
              letterSpacing: '-0.005em',
            }}
          >
            Every day you delay is a day your competitors gain ground.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem',
            placeItems: 'center',
          }}
        >
          {painPoints.map((point, index) => (
            <PainPointCard key={index} point={point} index={index} inView={inView} />
          ))}
        </div>

        {/* Call to Action - Urgency */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            textAlign: 'center',
            marginTop: '5rem',
            padding: '3rem 2rem',
            background: 'rgba(0, 119, 190, 0.1)',
            borderRadius: '16px',
            border: '1px solid rgba(0, 119, 190, 0.3)',
          }}
        >
          <h3
            style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              color: '#0077BE',
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
            }}
          >
            Your Competitors Aren't Waiting
          </h3>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#E0E0E0',
              marginBottom: '2rem',
              fontFamily: 'Inter, sans-serif',
              maxWidth: '600px',
              margin: '0 auto 2rem',
            }}
          >
            Schedule your growth audit today. Let's show you exactly what you're losing.
          </p>
          <motion.a
            href="#audit"
            style={{
              background: '#FF4444',
              color: '#FFFFFF',
              padding: '1.2rem 3rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-block',
              boxShadow: '0 0 40px rgba(255, 68, 68, 0.7), 0 12px 35px rgba(255, 68, 68, 0.4)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 60px rgba(255, 68, 68, 0.9), 0 18px 50px rgba(255, 68, 68, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 68, 68, 0.7), 0 12px 35px rgba(255, 68, 68, 0.4)';
            }}
          >
            Claim Your Free Audit Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function PainPointCard({ point, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(15px)',
        border: `2px solid ${point.color}`,
        borderRadius: '16px',
        padding: '3rem 2.5rem',
        textAlign: 'center',
        boxShadow: `0 0 30px ${point.color}33, inset 0 1px 1px rgba(255, 255, 255, 0.05)`,
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 50px ${point.color}66, inset 0 1px 1px rgba(255, 255, 255, 0.08)`;
        e.currentTarget.style.borderColor = point.color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 30px ${point.color}33, inset 0 1px 1px rgba(255, 255, 255, 0.05)`;
      }}
    >
      {/* Glow Background */}
      <div
        style={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: '200px',
          height: '200px',
          background: `radial-gradient(circle, ${point.color}22 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -20 }}
        transition={{ delay: index * 0.15 + 0.1, type: 'spring', stiffness: 100 }}
        style={{
          fontSize: '4rem',
          marginBottom: '1.5rem',
          display: 'block',
        }}
      >
        {point.icon}
      </motion.div>

      {/* Title - Pain Point in Color */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.15 + 0.15 }}
        style={{
          fontSize: '1.8rem',
          fontWeight: 800,
          color: point.color,
          marginBottom: '1.2rem',
          fontFamily: 'Playfair Display, serif',
          textShadow: `0 0 20px ${point.color}66`,
          letterSpacing: '-0.01em',
        }}
      >
        {point.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.15 + 0.2 }}
        style={{
          fontSize: '1.05rem',
          lineHeight: 1.8,
          color: '#D0D0D0',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          position: 'relative',
          zIndex: 2,
        }}
      >
        {point.description}
      </motion.p>
    </motion.div>
  );
}
