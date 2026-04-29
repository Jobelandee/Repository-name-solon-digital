
import React from 'react';
import { motion } from 'framer-motion';

export default function InsightsPage() {
  const blogPosts = [
    {
      id: 1,
      category: 'Digital Strategy',
      title: 'Is Your Website a Digital Ghost? The Hidden Cost of Outdated Web Design in Tenerife',
      excerpt: 'Tenerife is a land of opportunity, but many businesses are still living in the digital stone age. Discover why outdated websites are your biggest hidden expense.',
      description: 'An outdated, slow, or "manual" website might be your biggest hidden expense. Learn how to plug the leak.',
      date: '2025-05-06',
      readTime: '8 min read',
      content: `Tenerife is a land of opportunity. From the bustling streets of Adeje and Los Cristianos to the luxury villas in Costa Adeje, the business spirit here is unmatched. But while the island's physical infrastructure thrives, many businesses are still living in the digital stone age.

If you are a business owner in the Canary Islands, you might think that having a website is enough. It isn't. In fact, an outdated, slow, or "manual" website might be your biggest hidden expense.

## The "Mañana" Trap: Why Speed is Your Greatest Competitor

In the Tenerife web design market, we often hear "mañana." But online, there is no tomorrow.

Statistics show that 40% of visitors will leave a site if it takes more than 3 seconds to load. If your potential client is searching for a Padel Club or a Real Estate agent while sitting on a terrace in Las Américas with a 4G connection, and your site is slow—they are already booking with your competitor.

At Solon Digital, we build "Lava-Fast" systems. We don't just build pages; we build high-performance machines optimized for the local Canary Island SEO landscape.

## Stop the WhatsApp Chaos: Automate or Die

Are you still handling every single booking, inquiry, and "Is there space?" question manually through WhatsApp?

You aren't being "personal"—you are being inefficient. For Gyms and Padel Clubs in Tenerife, manual management is a profit-killer.

Smart Websites now act as your 24/7 Digital Employee. By integrating AI Business Automation, you can handle bookings, answer FAQs, and qualify leads while you are actually running your business (or enjoying the sun).

## Dutch Innovation, Tenerife Roots

We didn't move from the Netherlands to Tenerife just for the weather. We moved here because we saw local legends—business owners with incredible services—losing money to bad tech.

With a background in high-level AI integration and experience running 6 successful PT Studios, the founders of Solon Digital, Job Eland and Rodney, understand the unique pressure of the local market. We combine Northern European efficiency with a deep understanding of the Tenerife South business culture.

## The Blunt Truth: Is Your Site Bleeding Money?

A website should be an investment that pays for itself within months, not a digital brochure that sits in a corner of the internet. If you aren't on Page 1 of Google Tenerife, you don't exist for the 100,000+ tourists and residents searching for your service right now.

Don't wake up a year from now wishing you started today. The digital gap in the Canary Islands is closing fast. Those who automate now will dominate the next decade.

## Ready to Plug the Leak?

Stop guessing and start scaling. We are offering a Free Digital Growth Audit for businesses in Tenerife and Mallorca this month. We will identify exactly where your current site is losing you money and provide a roadmap to fix it.`,
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
          color: '#1a1a4d',
          fontFamily: 'Outfit, sans-serif',
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
                border: '1px solid #E0E0E0',
                borderRadius: '12px',
                padding: '2rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C73584';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(199, 53, 132, 0.15)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E0E0E0';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#C73584',
                fontWeight: 700,
                marginBottom: '1rem',
              }}>
                {post.category}
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                fontFamily: 'Outfit, sans-serif',
                color: '#1a1a4d',
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
                  color: '#C73584',
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
