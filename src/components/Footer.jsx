/** @jsx jsx */
import { jsx } from 'hono/jsx';

export const Footer = () => (
  <footer style={{
    backgroundColor: '#05070c',
    borderTop: '1px solid rgba(245, 158, 11, 0.15)',
    padding: '3.5rem 2rem 2rem 2rem',
    color: '#64748b',
    fontSize: '0.85rem'
  }}>
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '2.5rem',
      marginBottom: '3rem'
    }}>
      {/* Col 1 */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <span style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '1.25rem',
            fontWeight: '800',
            color: '#f8fafc'
          }}>
            ROT<span style={{ color: '#f59e0b' }}>.BOT</span>
          </span>
        </div>
        <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.875rem' }}>
          Autonomous Code Rot Protection & Dependency Decay Remediation Protocol. Engineered for zero-downtime automated maintenance.
        </p>
      </div>

      {/* Col 2 */}
      <div>
        <h4 style={{ color: '#f8fafc', fontFamily: "'Outfit', sans-serif", marginBottom: '1rem', fontSize: '0.95rem' }}>Defense Modules</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li><a href="#modules" style={{ color: '#94a3b8', textDecoration: 'none' }}>Rot-Scan-x64 Scanner</a></li>
          <li><a href="#modules" style={{ color: '#94a3b8', textDecoration: 'none' }}>Auto-Patch-AI Remediation</a></li>
          <li><a href="#modules" style={{ color: '#94a3b8', textDecoration: 'none' }}>Legacy-Shift Engine</a></li>
          <li><a href="/api/status" style={{ color: '#94a3b8', textDecoration: 'none' }}>System Status API</a></li>
        </ul>
      </div>

      {/* Col 3 */}
      <div>
        <h4 style={{ color: '#f8fafc', fontFamily: "'Outfit', sans-serif", marginBottom: '1rem', fontSize: '0.95rem' }}>Integrations</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li><span style={{ color: '#94a3b8' }}>Cloudflare Edge Workers</span></li>
          <li><span style={{ color: '#94a3b8' }}>Automated AST Tree-Shaking</span></li>
          <li><span style={{ color: '#94a3b8' }}>Zero-Day Security Patches</span></li>
        </ul>
      </div>

      {/* Col 4 */}
      <div>
        <h4 style={{ color: '#f8fafc', fontFamily: "'Outfit', sans-serif", marginBottom: '1rem', fontSize: '0.95rem' }}>Inquiry & Licensing</h4>
        <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.875rem', marginBottom: '1rem' }}>
          Interested in acquiring or deploying the <strong>rot.bot</strong> security engine?
        </p>
        <a href="mailto:mailto@rot.bot" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#f59e0b',
          textDecoration: 'none',
          fontWeight: '600',
          fontFamily: "'JetBrains Mono', monospace"
        }}>
          ✉ mailto@rot.bot &rarr;
        </a>
      </div>
    </div>

    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      paddingTop: '2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <div>
        &copy; {new Date().getFullYear()} <strong>rot.bot</strong> • All rights reserved.
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", color: '#475569', fontSize: '0.8rem' }}>
        DOMAIN: rot.bot | MANAGED: STANDALONE
      </div>
    </div>
  </footer>
);
