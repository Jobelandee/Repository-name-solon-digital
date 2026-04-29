import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ReviewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const reviews = [
    {
      name: 'María García López',
      company: 'Gym Adeje',
      text: 'Solon Digital transformó completamente mi negocio. En 3 meses, triplicamos nuestras reservas. El servicio al cliente es excelente y la automatización funciona perfectamente.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=1&u=mariagarcialopez',
    },
    {
      name: 'Carlos Rodríguez',
      company: 'Real Estate Tenerife',
      text: 'La automatización IA que implementaron es increíble. Ahora recibo leads calificados automáticamente. En dos meses conseguí 5 ventas que de otra forma no hubiera podido hacer.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=2&u=carlosrodriguez',
    },
    {
      name: 'Isabel Martínez',
      company: 'Restaurante Las Américas',
      text: 'Profesionales, eficientes y orientados a resultados. Entienden perfectamente el mercado local de Tenerife. Mi web ahora aparece en primera página de Google. Muy recomendable!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=3&u=isabelmartinez',
    },
  ];

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
              color: '#ffffff',
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
              color: '#b0b0b0',
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
        background: '#1a1a1a',
        border: '1px solid #333333',
        borderRadius: '16px',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#0077BE';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 119, 190, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#333333';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
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
          color: '#d0d0d0',
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 400,
          marginBottom: '1.5rem',
          flex: 1,
        }}
      >
        "{review.text}"
      </p>

      {/* Author */}
      <div style={{ borderTop: '1px solid #333333', paddingTop: '1rem' }}>
        <p
          style={{
            fontSize: '0.95rem',
            fontWeight: 700,
            color: '#ffffff',
            margin: '0 0 0.25rem 0',
            fontFamily: 'Outfit, sans-serif',
          }}
        >
          {review.name}
        </p>
        <p
          style={{
            fontSize: '0.85rem',
            color: '#888888',
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
