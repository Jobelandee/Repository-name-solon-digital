import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function SuccessStoriesPage() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  // Empty stories array - user will add stories with Loom video IDs
  const stories = [];

  return (
    <section
      ref={ref}
      style={{
        background: '#FFFFFF',
        minHeight: '100vh',
        paddingTop: '6rem',
      }}
    >
      {/* Hero Section */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '4rem 2rem',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: 'clamp(280px, 90vw, 900px)',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 700,
            color: '#333333',
            fontFamily: 'Outfit, sans-serif',
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}>
            {t('successStories.title')}
          </h1>
          <p style={{
            fontSize: 'clamp(0.95rem, 3.5vw, 1.2rem)',
            color: '#555555',
            fontFamily: 'Outfit, sans-serif',
            lineHeight: 1.7,
            maxWidth: '700px',
            margin: '0 auto 4rem',
          }}>
            {t('successStories.subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Success Stories Grid */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem 8rem',
      }}>
        {stories.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            color: '#999999',
          }}>
            <p style={{
              fontSize: '1.1rem',
              fontFamily: 'Outfit, sans-serif',
            }}>
              {t('successStories.empty')}
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}>
            {stories.map((story, index) => (
              <SuccessStoryCard key={index} story={story} index={index} inView={inView} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function SuccessStoryCard({ story, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{
        background: '#FFFFFF',
        border: '1px solid #E0E0E0',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Loom Video Embed */}
      <div style={{
        width: '100%',
        aspectRatio: '16 / 9',
        background: '#F5F5F5',
      }}>
        <iframe
          src={`https://www.loom.com/embed/${story.loomId}`}
          title={`Success story video: ${story.title}`}
          frameBorder="0"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '12px 12px 0 0',
          }}
        />
      </div>

      {/* Story Info */}
      <div style={{
        padding: '2rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Company Name */}
        <p style={{
          fontSize: '0.85rem',
          fontWeight: 700,
          color: '#FF9500',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          margin: '0 0 0.8rem 0',
          fontFamily: 'Outfit, sans-serif',
        }}>
          {story.company}
        </p>

        {/* Title */}
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: 700,
          color: '#0077BE',
          margin: '0 0 0.8rem 0',
          fontFamily: 'Outfit, sans-serif',
          letterSpacing: '-0.01em',
        }}>
          {story.title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: '0.95rem',
          color: '#555555',
          lineHeight: 1.6,
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 400,
          margin: '0 0 1rem 0',
          flex: 1,
        }}>
          {story.description}
        </p>

        {/* Success Metric (if provided) */}
        {story.metric && (
          <div style={{
            paddingTop: '1rem',
            borderTop: '1px solid #E0E0E0',
            marginTop: 'auto',
          }}>
            <p style={{
              fontSize: '0.9rem',
              color: '#0077BE',
              fontWeight: 700,
              margin: 0,
              fontFamily: 'Outfit, sans-serif',
            }}>
              {story.metric}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
