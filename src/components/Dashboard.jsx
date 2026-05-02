import { useTranslation } from 'react-i18next';
import React from 'react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const { t } = useTranslation();

  const stats = [
    {
      label: t('dashboard.stat1_label'),
      value: '12,847',
      change: '+312%',
      changeDesc: t('dashboard.stat1_change_desc'),
      icon: '📈'
    },
    {
      label: t('dashboard.stat2_label'),
      value: '€487k',
      change: '+156%',
      changeDesc: 'YoY',
      icon: '💰'
    },
    {
      label: 'Automations Active',
      value: '234',
      change: '24/7',
      changeDesc: 'Running',
      icon: '⚙️'
    },
    {
      label: 'Client Satisfaction',
      value: '98%',
      change: '+5%',
      changeDesc: 'This quarter',
      icon: '⭐'
    }
  ];

  return (
    <section style={{
      background: '#F5F5F5',
      padding: '8rem 2rem',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
          }}
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(0, 119, 190, 0.1)',
            border: '1px solid rgba(0, 119, 190, 0.2)',
            borderRadius: '20px',
            padding: '0.5rem 1.2rem',
            marginBottom: '1.5rem',
          }}>
            <span style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#0077BE',
              fontWeight: 700,
            }}>
              Results Dashboard
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {stats.map((stat, index) => (
            <DashboardCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardCard({ stat, index }) {
  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #E0E0E0',
        borderRadius: '16px',
        padding: '2.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(0, 119, 190, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      {/* Icon */}
      <div style={{
        fontSize: '2.5rem',
        marginBottom: '1rem',
        position: 'relative',
        zIndex: 2,
      }}>
        {stat.icon}
      </div>

      {/* Label */}
      <p style={{
        fontSize: '0.85rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#0077BE',
        fontWeight: 700,
        margin: '0 0 0.5rem 0',
        fontFamily: 'Outfit, sans-serif',
        position: 'relative',
        zIndex: 2,
      }}>
        {stat.label}
      </p>

      {/* Main Value */}
      <h3 style={{
        fontSize: '2.5rem',
        fontWeight: 800,
        color: '#333333',
        margin: '0.5rem 0 1.5rem 0',
        fontFamily: 'Outfit, sans-serif',
        letterSpacing: '-0.02em',
        position: 'relative',
        zIndex: 2,
      }}>
        {stat.value}
      </h3>

      {/* Change indicator */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        paddingTop: '1rem',
        borderTop: '1px solid #E0E0E0',
        position: 'relative',
        zIndex: 2,
      }}>
        <span style={{
          color: '#FF9500',
          fontWeight: 700,
          fontSize: '1.1rem',
        }}>
          {stat.change}
        </span>
        <span style={{
          color: '#888888',
          fontSize: '0.9rem',
          fontWeight: 500,
        }}>
          {stat.changeDesc}
        </span>
      </div>
    </div>
  );
}
