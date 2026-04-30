import { useTranslation } from 'react-i18next';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ReviewsSection() {
  const { t } = useTranslation();

  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const reviews = [
    {
      name: t('reviews_section.review1_name'),
      company: t('reviews_section.review1_company'),
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
            padding: '0 2rem',
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
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{
        background: '#FFFFFF',
        border: '1px solid #E8E8E8',
        borderRadius: '12px',
        padding: '1.8rem',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 119, 190, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
      }}
    >
      {/* Stars */}
      <div style={{ marginBottom: '1rem' }}>
        {[...Array(review.rating)].map((_, i) => (
          <span key={i} style={{ color: '#FFC400', fontSize: '1.1rem' }}>
            ★
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p
        style={{
          fontSize: '0.95rem',
          lineHeight: 1.7,
          color: '#444444',
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 400,
          marginBottom: '1.5rem',
          flex: 1,
        }}
      >
        {review.text}
      </p>

      {/* Author with Avatar - Google Reviews Style */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid #F0F0F0', paddingTop: '1.2rem' }}>
        <img
          src={review.image}
          alt={review.name}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #0077BE',
          }}
        />
        <div>
          <p
            style={{
              fontSize: '0.9rem',
              fontWeight: 700,
              color: '#222222',
              margin: '0',
              fontFamily: 'Outfit, sans-serif',
            }}
          >
            {review.name}
          </p>
          <p
            style={{
              fontSize: '0.8rem',
              color: '#888888',
              margin: 0,
              fontFamily: 'Outfit, sans-serif',
            }}
          >
            {review.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
