import { motion } from 'framer-motion';

export default function HeroConversion() {
  return (
    <section className="hero-conversion">
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          borderRadius: '16px',
          padding: '4rem 3rem',
          maxWidth: '900px',
          margin: '0 auto',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <h1>Is your website working for you, or against you?</h1>
        <p>Stop losing bookings to slow, outdated sites. We build smart websites for local legends.</p>
        <motion.button
          className="cta-gold"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a free demo →
        </motion.button>
      </motion.div>
    </section>
  );
}
