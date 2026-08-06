/** @jsx jsx */
import { jsx } from 'hono/jsx';

export const ModuleGrid = () => (
  <section id="modules" style={{ padding: '5rem 2rem 2rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <div style={{
        display: 'inline-block',
        padding: '0.35rem 0.85rem',
        borderRadius: '9999px',
        backgroundColor: 'rgba(245, 158, 11, 0.12)',
        color: '#f59e0b',
        fontSize: '0.8rem',
        fontWeight: '600',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        marginBottom: '1rem',
        border: '1px solid rgba(245, 158, 11, 0.25)'
      }}>
        Autonomous Security Engine
      </div>
      <h2 style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: '2.5rem',
        fontWeight: '800',
        color: '#f8fafc',
        letterSpacing: '-0.03em',
        marginBottom: '1rem'
      }}>
        Rot Prevention & Code Defense Modules
      </h2>
      <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto', lineHeight: '1.6' }}>
        Automated AST parsing, zero-day patch synthesis, and continuous legacy modernization.
      </p>
    </div>

    {/* Grid Cards */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
      gap: '1.75rem'
    }}>
      {/* Card 1 */}
      <div class="module-card">
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          backgroundColor: 'rgba(245, 158, 11, 0.15)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          color: '#f59e0b'
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <h3 style={{ color: '#f8fafc', fontFamily: "'Outfit', sans-serif", fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '700' }}>
          Rot-Scan-x64
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
          Real-time AST static code analysis that identifies deprecated APIs, hidden dependency decay, and unpatched security vulnerabilities.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span class="module-tag">AST Parsing</span>
          <span class="module-tag">Dependency Check</span>
        </div>
      </div>

      {/* Card 2 */}
      <div class="module-card">
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          backgroundColor: 'rgba(239, 68, 68, 0.15)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          color: '#f87171'
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </div>
        <h3 style={{ color: '#f8fafc', fontFamily: "'Outfit', sans-serif", fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '700' }}>
          Auto-Patch-AI
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
          Autonomous security remediation bot that crafts and validates non-breaking micro-patches for zero-day vulnerabilities.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span class="module-tag">Auto Patching</span>
          <span class="module-tag">CVE Guard</span>
        </div>
      </div>

      {/* Card 3 */}
      <div class="module-card">
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          backgroundColor: 'rgba(16, 185, 129, 0.15)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          color: '#34d399'
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
          </svg>
        </div>
        <h3 style={{ color: '#f8fafc', fontFamily: "'Outfit', sans-serif", fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '700' }}>
          Legacy-Shift
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
          Automated code migration engine that rewrites outdated patterns into modern ESM, Async/Await, and Cloudflare Worker native standards.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span class="module-tag">Modernizer</span>
          <span class="module-tag">ESM Refactor</span>
        </div>
      </div>

      {/* Card 4 */}
      <div class="module-card">
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          backgroundColor: 'rgba(168, 85, 247, 0.15)',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          color: '#c084fc'
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </div>
        <h3 style={{ color: '#f8fafc', fontFamily: "'Outfit', sans-serif", fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '700' }}>
          Dead-Code-Pruner
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
          Deep tree-shaking and dead code detection engine that strips unreferenced exports, unused packages, and dead assets.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span class="module-tag">Tree Shaking</span>
          <span class="module-tag">Zero Bloat</span>
        </div>
      </div>
    </div>
  </section>
);
