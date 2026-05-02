import { useTranslation } from 'react-i18next';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HiddenCost() {
  const { t } = useTranslation();

  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const pillars = [
    {
      number: '01',
      title: t('hidden_cost.pillar1_title'),
      description: 'While your site struggles to load, your potential clients are already booking with the competitor next door. You aren\'t just losing a click; you\'re losing a lifetime customer.',
      icon: '💸',
    },
    {
      number: '02',
      title: 'The Manual Grind',
      description: 'Still handling every booking and question manually? That\'s 10+ hours a week stolen from your business growth or your family time. Automation isn\'t a luxury; it\'s your freedom.',
      icon: '⛓️',
    },
    {
      number: '03',
      title: 'Digital Decay',
      description: 'The Google algorithm doesn\'t wait for anyone. The longer you stay on an old platform, the harder it becomes to ever catch up. Don\'t wake up a year from now wishing you started today.',
      icon: '📉',
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1410 50%, #0a0a0a 100%)',
        padding: '8rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Volcanic Background Effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)
          `,
          zIndex: 0,
        }}
      />

      {/* Subtle Grid Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(212, 175, 55, 0.03) 25%, rgba(212, 175, 55, 0.03) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.03) 75%, rgba(212, 175, 55, 0.03) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(212, 175, 55, 0.03) 25%, rgba(212, 175, 55, 0.03) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.03) 75%, rgba(212, 175, 55, 0.03) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '60px 60px',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Header Section */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
            maxWidth: '900px',
            margin: '0 auto 4rem',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.2rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              fontFamily: 'Playfair Display, serif',
              marginBottom: '1.2rem',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              textShadow: '0 8px 32px rgba(212, 175, 55, 0.25)',
            }}
          >
            Every day you wait is a day your competition wins.
          </h2>
          <p
            style={{
              fontSize: '1.3rem',
              color: '#0099FF',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.6,
              fontWeight: 500,
              letterSpacing: '-0.005em',
              textShadow: '0 2px 8px rgba(255, 215, 0, 0.3)',
            }}
          >
            A slow, outdated website isn't just an eyesore—it's a profit killer.
          </p>
        </div>

        {/* Time is Ticking - Progress Bar */}
        <div
          style={{
            height: '3px',
            background: 'linear-gradient(90deg, #0099FF 0%, #FF4444 50%, #0099FF 100%)',
            marginBottom: '5rem',
            borderRadius: '2px',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
          }}
        />

        {/* The 3 Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            maxWidth: '1200px',
            margin: '0 auto 5rem',
          }}
        >
          {pillars.map((pillar, index) => (
            <RegretPillar key={index} pillar={pillar} index={index} inView={inView} />
          ))}
        </div>

        {/* Warning Banner & CTA */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.05) 100%)',
            border: '2px solid rgba(212, 175, 55, 0.5)',
            borderRadius: '20px',
            padding: '4rem 3rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Corner accent */}
          <div
            style={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />

          <h3
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif',
              position: 'relative',
              zIndex: 2,
              textShadow: '0 4px 16px rgba(212, 175, 55, 0.3)',
              letterSpacing: '-0.02em',
            }}
          >
            Don't wake up a year from now wishing you started today.
          </h3>

          <p
            style={{
              fontSize: '1.1rem',
              color: '#E0E0E0',
              marginBottom: '2.5rem',
              fontFamily: 'Inter, sans-serif',
              maxWidth: '700px',
              margin: '0 auto 2.5rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
            Your competitors are moving fast. Every day you hesitate is a day they pull further ahead.
          </p>

          {/* CTA Button - High Impact */}
          <a
            href="#audit"
            style={{
              background: 'linear-gradient(135deg, #FF4444 0%, #FF6B6B 100%)',
              color: '#FFFFFF',
              padding: '1.3rem 3.5rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 800,
              fontSize: '1.05rem',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.01em',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-block',
              boxShadow: '0 0 50px rgba(255, 68, 68, 0.8), 0 15px 40px rgba(255, 68, 68, 0.5)',
              position: 'relative',
              zIndex: 10,
              textTransform: 'uppercase',
            }}
          >
            Stop the Bleeding. Book Your Audit →
          </a>
        </div>
      </div>
    </section>
  );
}

function RegretPillar({ pillar, index, inView }) {
  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(15px)',
        border: '2px solid rgba(212, 175, 55, 0.3)',
        borderRadius: '16px',
        padding: '3.5rem 2.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Number Badge - Large & Bold */}
      <div
        style={{
          fontSize: '5rem',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #0099FF 0%, #FF9500 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1.5rem',
          fontFamily: 'Playfair Display, serif',
          textShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
        }}
      >
        {pillar.number}
      </div>

      {/* Icon */}
      <div
        style={{
          fontSize: '3rem',
          marginBottom: '1.2rem',
        }}
      >
        {pillar.icon}
      </div>

      {/* Title */}
      <h4
        style={{
          fontSize: '1.6rem',
          fontWeight: 700,
          color: '#0099FF',
          marginBottom: '1.5rem',
          fontFamily: 'Playfair Display, serif',
          textShadow: '0 2px 12px rgba(212, 175, 55, 0.3)',
          letterSpacing: '-0.01em',
        }}
      >
        {pillar.title}
      </h4>

      {/* Description */}
      <p
        style={{
          fontSize: '1.05rem',
          lineHeight: 1.8,
          color: '#E8E8E8',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
        }}
      >
        {pillar.description}
      </p>
    </div>
  );
}
