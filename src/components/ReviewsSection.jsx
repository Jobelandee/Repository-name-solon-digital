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
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F0F0F0', paddingTop: '1.2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/34621805864"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#25D366',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontSize: '1.2rem',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#1ead5a';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#25D366';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          title="Contact via WhatsApp"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-2.176 0-4.319.525-6.16 1.515l-.441-.227-4.572 1.197 1.217-4.45-.287-.457A9.865 9.865 0 011.5 3.5c0-5.338 4.226-9.675 9.426-9.675 2.305 0 4.474.795 6.162 2.372 1.688 1.577 2.618 3.637 2.618 5.825 0 5.34-4.226 9.677-9.426 9.677-.73 0-1.455-.088-2.154-.261" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
