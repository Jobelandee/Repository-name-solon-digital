import { useTranslation } from 'react-i18next';
import React from 'react';
import { motion } from 'framer-motion';

export default function InsightsPage() {
  const blogPosts = [
    {
      id: 1,
      category: 'Digital Strategy',
      title: 'Coming Soon',
      description: 'Blog posts will be added here soon. Check back for insights on digital growth and web strategy.',
      date: '2025-04-22',
      readTime: '5 min read',
    },
  ];

  return (
    <div style={{
      background: '#FFFFFF',
      minHeight: '100vh',
      paddingTop: '2rem',
    }}>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          paddingBottom: '4rem',
          paddingTop: '2rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
        }}
      >
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700,
          color: '#1a1a1a',
          fontFamily: 'Playfair Display, serif',
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
        }}>
          Insights & Strategy
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          Discover the latest trends, tips, and strategies for growing your digital presence.
        </p>
      </motion.div>

      {/* Blog Grid */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem 6rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
        }}>
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #e8e8e8',
                borderRadius: '12px',
                padding: '2rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0077BE';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 119, 190, 0.15)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e8e8e8';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#0077BE',
                fontWeight: 700,
                marginBottom: '1rem',
              }}>
                {post.category}
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                fontFamily: 'Playfair Display, serif',
                color: '#1a1a1a',
                fontWeight: 700,
                marginBottom: '1rem',
                lineHeight: 1.3,
              }}>
                {post.title}
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                marginBottom: '1.5rem',
                lineHeight: 1.6,
              }}>
                {post.description}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '1rem',
                borderTop: '1px solid #f0f0f0',
              }}>
                <span style={{
                  fontSize: '0.85rem',
                  color: '#999',
                }}>
                  {post.date} • {post.readTime}
                </span>
                <a href="#read-more" style={{
                  textDecoration: 'none',
                  color: '#0077BE',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                }}>
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
