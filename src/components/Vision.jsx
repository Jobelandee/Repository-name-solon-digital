import { useTranslation } from 'react-i18next';
import React from 'react';

export default function Vision() {
  const { t } = useTranslation();

  const visionPoints = [
    {
      label: t('vision.gap_label'),
      title: t('vision.gap_title'),
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
    <section className="vision-section">
      <h2>
        Your website is your silent partner. Make it work.
      </h2>

      <div className="vision-grid">
        {visionPoints.map((point, index) => (
          <div
            key={index}
            className="vision-card"
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#0077BE', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
              {point.label}
            </span>
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
