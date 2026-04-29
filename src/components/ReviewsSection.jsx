import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ReviewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const reviews = [
    {
      name: 'María García',
      company: 'Gym Tenerife',
      text: 'Solon Digital transformó completamente mi negocio. En 3 meses, triplicamos nuestras reservas. El servicio al cliente es excelente.',
      rating: 5,
    },
    {
      name: 'Juan López',
      company: 'Real Estate - Canarias',
      text: 'La automatización IA que implementaron es increíble. Ahora recibo leads calificados automáticamente. Muy recomendable.',
      rating: 5,
    },
    {
      name: 'Sarah Mitchell',
      company: 'Restaurant Barcelona',
      text: 'Professional, efficient, and results-driven. They understood our business from day one. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Peter Müller',
      company: 'Sports Club - Vienna',
      text: 'Ausgezeichneter Service und erstaunliche Ergebnisse. Unsere Online-Präsenz hat sich komplett verbessert.',
      rating: 5,
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        background: '#FFFFFF',
        padding: '8rem 2rem',
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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: '5rem',
            maxWidth: '700px',
            margin: '0 auto 5rem',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#1a1a4d',
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#444444',
              fontFamily: 'Outfit, sans-serif',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Empresas de todo el mundo han crecido con nuestras soluciones
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      style={{
        background: '#F8F5FF',
        border: '1px solid #E0E0E0',
        borderRadius: '16px',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#C73584';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(199, 53, 132, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#E0E0E0';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
      }}
    >
      {/* Stars */}
      <div style={{ marginBottom: '1rem' }}>
        {[...Array(review.rating)].map((_, i) => (
          <span key={i} style={{ color: '#FF9500', fontSize: '1.2rem' }}>
            ★
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p
        style={{
          fontSize: '1rem',
          lineHeight: 1.8,
          color: '#444444',
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 400,
          marginBottom: '1.5rem',
          flex: 1,
        }}
      >
        "{review.text}"
      </p>

      {/* Author */}
      <div style={{ borderTop: '1px solid #E0E0E0', paddingTop: '1rem' }}>
        <p
          style={{
            fontSize: '0.95rem',
            fontWeight: 700,
            color: '#1a1a4d',
            margin: '0 0 0.25rem 0',
            fontFamily: 'Outfit, sans-serif',
          }}
        >
          {review.name}
        </p>
        <p
          style={{
            fontSize: '0.85rem',
            color: '#666666',
            margin: 0,
            fontFamily: 'Outfit, sans-serif',
          }}
        >
          {review.company}
        </p>
      </div>
    </motion.div>
  );
}
