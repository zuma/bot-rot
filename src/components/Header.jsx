/** @jsx jsx */
import { jsx } from 'hono/jsx';

export const Header = () => (
  <header style={{
    position: 'sticky',
    top: 0,
    zIndex: 50,
    backdropFilter: 'blur(16px)',
    backgroundColor: 'rgba(10, 14, 23, 0.85)',
    borderBottom: '1px solid rgba(245, 158, 11, 0.2)',
    padding: '1.1rem 2rem'
  }}>
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem'
    }}>
      {/* Brand Logo */}
      <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #ef4444 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '1.5rem',
            fontWeight: '800',
            letterSpacing: '-0.03em',
            color: '#f8fafc',
            lineHeight: 1
          }}>
            ROT<span style={{ color: '#f59e0b' }}>.BOT</span>
          </span>
          <span style={{
            fontSize: '0.65rem',
            color: '#94a3b8',
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '0.1em',
            marginTop: '2px'
          }}>
            CODE ROT DEFENSE v3.9
          </span>
        </div>
      </a>

      {/* Nav Links */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} class="desktop-nav">
        <a href="#modules" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Defense Modules</a>
        <a href="#scanner" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Live Scanner</a>
        <a href="#benchmarks" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Metrics</a>
        <a href="#api" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>API Docs</a>
      </nav>

      {/* Action CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.35rem 0.75rem',
          borderRadius: '9999px',
          backgroundColor: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          color: '#fbbf24',
          fontSize: '0.75rem',
          fontFamily: "'JetBrains Mono', monospace"
        }}>
          <span style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: '#f59e0b',
            boxShadow: '0 0 8px #f59e0b'
          }}></span>
          DEFENSE ACTIVE
        </div>

        <a href="mailto:mailto@rot.bot" style={{
          padding: '0.55rem 1.25rem',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          color: '#ffffff',
          textDecoration: 'none',
          fontSize: '0.85rem',
          fontWeight: '600',
          boxShadow: '0 0 16px rgba(245, 158, 11, 0.35)',
          transition: 'all 0.2s ease'
        }}>
          Deploy Bot
        </a>
      </div>
    </div>
  </header>
);
