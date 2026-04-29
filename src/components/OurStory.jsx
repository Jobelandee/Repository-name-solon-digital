
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { websiteContent } from '../data/websiteContent';

export default function OurStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      id="our-story"
      ref={ref}
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0a0a0a 100%)',
        paddingTop: 'clamp(4rem, 8vw, 8rem)',
        paddingBottom: 'clamp(6rem, 12vw, 12rem)',
        paddingLeft: 'clamp(1.5rem, 4vw, 2rem)',
        paddingRight: 'clamp(1.5rem, 4vw, 2rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Grid Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0, 119, 190, 0.015) 25%, rgba(0, 119, 190, 0.015) 26%, transparent 27%, transparent 74%, rgba(0, 119, 190, 0.015) 75%, rgba(0, 119, 190, 0.015) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 119, 190, 0.015) 25%, rgba(0, 119, 190, 0.015) 26%, transparent 27%, transparent 74%, rgba(0, 119, 190, 0.015) 75%, rgba(0, 119, 190, 0.015) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '60px 60px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Content Wrapper */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Mobile-First Responsive Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(2rem, 5vw, 5rem)',
            maxWidth: '1300px',
            margin: '0 auto',
            alignItems: 'start',
          }}
          className="ourstory-grid"
        >
          {/* PHOTO — Mobile First (Top), Desktop Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 0 60px rgba(0, 119, 190, 0.3), 0 20px 60px rgba(0, 0, 0, 0.5)',
              border: '2px solid rgba(0, 119, 190, 0.2)',
              width: '100%',
              order: 0,
            }}
          >
            <img
              src="/founders.jpg"
              alt="Job Eland and Rodney - Founders of Solon Digital"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '14px',
              }}
            />
          </motion.div>

          {/* STORY & FOUNDER CARDS — Mobile First (Bottom), Desktop Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(3rem, 6vw, 4.5rem)',
              width: '100%',
              order: 1,
            }}
          >
            {/* Headline */}
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 3.2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                fontFamily: 'Playfair Display, serif',
                marginBottom: 0,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                paddingTop: '0.5rem',
              }}
            >
              {websiteContent.story.headline.split('.')[0]}.{' '}
              <span style={{ color: '#0077BE', display: 'block' }}>
                {websiteContent.story.headline.split('.')[1]}.
              </span>
            </h2>

            {/* Narrative Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                color: '#E0E0E0',
                fontFamily: 'Inter, sans-serif',
                lineHeight: 1.85,
                fontWeight: 400,
                letterSpacing: '-0.005em',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              {websiteContent.story.narrative.map((paragraph, idx) => (
                <p key={idx} style={{ margin: 0 }}>
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Founder Cards — Stacked on Mobile, 2-Col on Desktop */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1.5rem',
                '@media (min-width: 1024px)': {
                  gridTemplateColumns: '1fr 1fr',
                },
              }}
              className="founder-cards-grid"
            >
              <FounderCard
                name="Job Eland"
                role="Marketing Specialist & AI Expert"
                bio="He turns complex data into high-performance digital machines that convert traffic into predictable profit."
                icon="🚀"
                index={0}
                inView={inView}
              />
              <FounderCard
                name="Rodney"
                role="Former Owner of 6 PT Studios"
                bio="He knows exactly what it takes to lead a business, optimize daily operations, and scale local brands."
                icon="💪"
                index={1}
                inView={inView}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        /* Desktop: 2-column layout for photo and story */
        @media (min-width: 1024px) {
          .ourstory-grid {
            grid-template-columns: 1fr 1.1fr !important;
            gap: 5rem !important;
            align-items: center !important;
          }
        }

        /* Founder cards: side-by-side on desktop */
        @media (min-width: 1024px) {
          .founder-cards-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        /* Mobile typography */
        @media (max-width: 640px) {
          h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}

function FounderCard({ name, role, bio, icon, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: index * 0.1 + 0.25 }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      style={{
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(0, 119, 190, 0.2)',
        borderRadius: '12px',
        padding: '1.8rem',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 0 20px rgba(0, 119, 190, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.04)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0, 119, 190, 0.4)';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 119, 190, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0, 119, 190, 0.2)';
        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 119, 190, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.04)';
      }}
    >
      {/* Icon */}
      <div
        style={{
          fontSize: '2rem',
          marginBottom: '0.8rem',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {icon}
      </div>

      {/* Name */}
      <h3
        style={{
          fontSize: '1.2rem',
          fontWeight: 700,
          color: '#FFFFFF',
          marginBottom: '0.3rem',
          fontFamily: 'Playfair Display, serif',
          letterSpacing: '-0.01em',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {name}
      </h3>

      {/* Role */}
      <p
        style={{
          fontSize: '0.85rem',
          fontWeight: 600,
          color: '#0077BE',
          marginBottom: '0.8rem',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '-0.005em',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {role}
      </p>

      {/* Bio */}
      <p
        style={{
          fontSize: '0.95rem',
          lineHeight: 1.6,
          color: '#D0D0D0',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          position: 'relative',
          zIndex: 2,
        }}
      >
        {bio}
      </p>
    </motion.div>
  );
}
