import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ReviewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const reviews = [
    {
      name: 'Maria Garcia',
      company: 'Gym Adeje',
      text: 'Solon Digital completely transformed our business. In 3 months, we tripled our bookings. Excellent customer service and the automation works perfectly.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=1&u=mariagarcia',
    },
    {
      name: 'Carlos Rodriguez',
      company: 'Real Estate Tenerife',
      text: 'The AI automation they implemented is incredible. Now I receive qualified leads automatically. In two months I closed 5 sales that I wouldn\'t have been able to make otherwise.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=2&u=carlosrodriguez',
    },
    {
      name: 'Isabel Martinez',
      company: 'Restaurant Las Americas',
      text: 'Professional, efficient and results-oriented. They truly understand the local Tenerife market. My website now appears on Google\'s first page. Highly recommended!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=3&u=isabelmartinez',
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
              color: '#0077BE',
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            What Our Clients Say
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#333333',
              fontFamily: 'Outfit, sans-serif',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Businesses worldwide have grown with our solutions
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
        background: '#F5F5F5',
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
        e.currentTarget.style.borderColor = '#0077BE';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 119, 190, 0.12)';
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
          color: '#555555',
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
            color: '#0077BE',
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
