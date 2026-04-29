import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Vision() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const visionPoints = [
    {
      label: 'THE GAP',
      title: 'Most local sites are digital ghosts.',
      description: 'If your site is slow or hard to find, you\'re losing clients to the competition every single day.',
    },
    {
      label: 'THE SOLUTION',
      title: 'Automate your daily chaos.',
      description: 'From bookings to customer questions—we build systems that handle the work so you don\'t have to.',
    },
    {
      label: 'THE GROWTH',
      title: 'Convert visitors into loyal members.',
      description: 'Turn local traffic into long-term revenue with a seamless, 24/7 digital experience.',
    },
  ];

  return (
    <section className="vision-section" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        Your website is your silent partner. Make it work.
      </motion.h2>

      <div className="vision-grid">
        {visionPoints.map((point, index) => (
          <motion.div
            key={index}
            className="vision-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#0077BE', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
              {point.label}
            </span>
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
