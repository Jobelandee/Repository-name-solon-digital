import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function InsightsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const insights = [
    {
      category: 'Hospitality',
      title: 'Direct Bookings: The Ocean of Difference',
      link: '/insights',
    },
    {
      category: 'Tech',
      title: 'Lava-Fast Loading Speeds for Gyms',
      link: '/insights',
    },
    {
      category: 'Real Estate',
      title: 'Modern Architecture in Digital Sales',
      link: '/insights',
    },
  ];

  return (
    <section className="insights-grid" ref={ref} id="insights">
      {insights.map((item, index) => (
        <motion.div
          key={index}
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          <span className="category">{item.category}</span>
          <h3>{item.title}</h3>
          <motion.a
            href={item.link}
            className="read-more"
          >
            Read more
          </motion.a>
        </motion.div>
      ))}
    </section>
  );
}
