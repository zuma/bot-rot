/** @jsx jsx */
import { Hono } from 'hono';
import { jsx } from 'hono/jsx';
import { html } from 'hono/html';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { ScannerDemo } from './components/ScannerDemo.jsx';
import { ModuleGrid } from './components/ModuleGrid.jsx';

const app = new Hono();

// Main App Route (Light Mode Theme)
app.get('/', (c) => {
  return c.html(
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>rot.bot — Autonomous Code Rot & Security Protection Engine</title>
        <meta name="description" content="Autonomous Code Rot Defense Engine. Continuous AST analysis, zero-day vulnerability auto-patching, and legacy code modernization." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@600;700;800;900&display=swap" rel="stylesheet" />
        {html`
          <style>
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
              background-color: #fffbeb;
              color: #1e293b;
              min-height: 100vh;
              overflow-x: hidden;
              line-height: 1.5;
            }
            
            /* Light Amber Background Grid */
            .cyber-amber-bg {
              position: relative;
              background: radial-gradient(circle at 50% 0%, #fef3c7 0%, #fffbeb 50%, #fef3c7 100%);
            }
            .grid-overlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 100%;
              background-size: 40px 40px;
              background-image: 
                linear-gradient(to right, rgba(217, 119, 6, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(217, 119, 6, 0.05) 1px, transparent 1px);
              pointer-events: none;
            }

            /* Responsive Hero */
            .hero-title {
              font-family: 'Outfit', sans-serif;
              font-size: clamp(2.75rem, 6vw, 4.5rem);
              font-weight: 900;
              letter-spacing: -0.04em;
              line-height: 1.1;
              margin-bottom: 1.5rem;
              color: #1e293b;
            }
            .hero-gradient {
              background: linear-gradient(135deg, #d97706 0%, #b45309 50%, #dc2626 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            /* Cards & Light Glassmorphism */
            .module-card {
              background: #ffffff;
              border: 1px solid rgba(217, 119, 6, 0.2);
              border-radius: 16px;
              padding: 2rem;
              box-shadow: 0 10px 30px -10px rgba(217, 119, 6, 0.08);
              transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .module-card:hover {
              transform: translateY(-4px);
              border-color: rgba(217, 119, 6, 0.4);
              box-shadow: 0 20px 40px -12px rgba(217, 119, 6, 0.18);
            }
            .module-tag {
              display: inline-block;
              padding: 0.25rem 0.65rem;
              border-radius: 6px;
              backgroundColor: #fef3c7;
              border: 1px solid #fde68a;
              color: #92400e;
              font-size: 0.75rem;
              font-family: 'JetBrains Mono', monospace;
              font-weight: 600;
            }

            /* Terminal Buttons */
            .terminal-cmd-btn {
              background: #fef3c7;
              border: 1px solid #fde68a;
              color: #d97706;
              font-family: 'JetBrains Mono', monospace;
              font-size: 0.75rem;
              padding: 0.35rem 0.75rem;
              border-radius: 6px;
              cursor: pointer;
              font-weight: 600;
              transition: all 0.2s ease;
            }
            .terminal-cmd-btn:hover {
              background: #d97706;
              border-color: #d97706;
              color: #ffffff;
            }

            /* Metric Stat Cards */
            .stat-box {
              background: #ffffff;
              border: 1px solid rgba(217, 119, 6, 0.2);
              border-radius: 12px;
              padding: 1.25rem 1.5rem;
              text-align: center;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
            }
            .stat-num {
              font-family: 'Outfit', sans-serif;
              font-size: 2rem;
              font-weight: 800;
              color: #d97706;
              line-height: 1.2;
            }
            .stat-label {
              font-size: 0.8rem;
              color: #64748b;
              font-family: 'JetBrains Mono', monospace;
              text-transform: uppercase;
              margin-top: 0.25rem;
              font-weight: 600;
            }
          </style>
        `}
      </head>
      <body>
        <div class="cyber-amber-bg">
          <div class="grid-overlay"></div>
          
          <Header />

          {/* Hero Section */}
          <main style={{ position: 'relative', zIndex: 10, padding: '4rem 1.5rem 3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 4rem auto' }}>
              
              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(217, 119, 6, 0.1)',
                border: '1px solid rgba(217, 119, 6, 0.25)',
                color: '#d97706',
                fontSize: '0.85rem',
                fontWeight: '600',
                marginBottom: '2rem'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#d97706', boxShadow: '0 0 10px #d97706' }}></span>
                Autonomous Code Defense Protocol • Version 3.9
              </div>

              <h1 class="hero-title">
                Zero-Downtime Code <br />
                <span class="hero-gradient">Rot Defense Engine</span>
              </h1>

              <p style={{ color: '#475569', fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '2.5rem', fontWeight: 400 }}>
                Continuous AST static analysis, automated zero-day dependency vulnerability patching, and legacy refactoring bot engine.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
                <a href="#scanner" style={{
                  padding: '0.9rem 2rem',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1rem',
                  boxShadow: '0 4px 20px rgba(217, 119, 6, 0.3)',
                  transition: 'all 0.2s ease'
                }}>
                  Launch AST Scanner &rarr;
                </a>
                <a href="mailto:mailto@rot.bot" style={{
                  padding: '0.9rem 2rem',
                  borderRadius: '10px',
                  backgroundColor: '#ffffff',
                  color: '#1e293b',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  border: '1px solid #cbd5e1',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.2s ease'
                }}>
                  Contact Owner
                </a>
              </div>

              {/* Stats Bar */}
              <div id="benchmarks" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1.25rem'
              }}>
                <div class="stat-box">
                  <div class="stat-num">284,000+</div>
                  <div class="stat-label">Repos Monitored</div>
                </div>
                <div class="stat-box">
                  <div class="stat-num">1.2M+</div>
                  <div class="stat-label">Auto-Patches Applied</div>
                </div>
                <div class="stat-box">
                  <div class="stat-num">99.97%</div>
                  <div class="stat-label">Code Rot Prevented</div>
                </div>
                <div class="stat-box">
                  <div class="stat-num">2.4ms</div>
                  <div class="stat-label">AST Execution Speed</div>
                </div>
              </div>
            </div>

            {/* Interactive Scanner Section */}
            <ScannerDemo />

            {/* Module Grid */}
            <ModuleGrid />

            {/* Code / API Section */}
            <section id="api" style={{ padding: '5rem 0 3rem 0', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2rem', fontWeight: '800', color: '#1e293b' }}>
                  Developer Integration & API
                </h2>
                <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
                  Trigger automated code rot scans and patch validation via REST API
                </p>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid rgba(217, 119, 6, 0.2)',
                padding: '1.75rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.875rem',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                color: '#1e293b'
              }}>
                <div style={{ color: '#64748b', marginBottom: '1rem' }}>
                  // Trigger rot.bot AST Scan & Auto-Remediation
                </div>
                <div>
                  <span style={{ color: '#b45309', fontWeight: 'bold' }}>import</span> <span style={{ color: '#d97706' }}>{'{ RotDefenseEngine }'}</span> <span style={{ color: '#b45309', fontWeight: 'bold' }}>from</span> <span style={{ color: '#16a34a' }}>'@rot.bot/security'</span>;
                </div>
                <br />
                <div>
                  <span style={{ color: '#b45309', fontWeight: 'bold' }}>const</span> guard = <span style={{ color: '#b45309', fontWeight: 'bold' }}>new</span> RotDefenseEngine({'{'} domain: <span style={{ color: '#16a34a' }}>'rot.bot'</span> {'}'});
                </div>
                <div>
                  <span style={{ color: '#b45309', fontWeight: 'bold' }}>const</span> report = <span style={{ color: '#b45309', fontWeight: 'bold' }}>await</span> guard.scanAndRemediate({'{'}
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  module: <span style={{ color: '#16a34a' }}>'Rot-Scan-x64'</span>,
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  autoPatch: <span style={{ color: '#d97706' }}>true</span>
                </div>
                <div>{'}'});</div>
                <br />
                <div style={{ color: '#16a34a', fontWeight: '600' }}>
                  console.log(report.status); // "0_VULNERABILITIES_FOUND - AST_SECURED"
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </div>

        {/* Client-side Script for Terminal Preset Swapping */}
        {html`
          <script>
            const scannerPresets = {
              '/scan-dependencies': [
                "> Scanning AST syntax tree & node_modules dependency graph...",
                "> ALERT: Detected 2 deprecated sub-dependencies (CVE-2026-4821)",
                "> Applying automated non-breaking patch via Auto-Patch-AI...",
                "> Execution speed: 2.4ms | Code bloat eliminated: -18.4%",
                "✔ ALL REPOSITORIES SECURED. ZERO CODE ROT DETECTED."
              ],
              '/remediate-bitrot': [
                "> Analyzing codebase for stale API usage & deprecated callback patterns...",
                "> Refactoring 14 Promise chains into ES2026 Async/Await syntax...",
                "> Validating unit test suite after automated refactor... [100% PASS]",
                "✔ BITROT REMEDIATED. CODEBASE IS FULLY MODERNIZED."
              ],
              '/prune-dead-code': [
                "> Running static tree-shaking pass across application entrypoints...",
                "> Identified 4 unused exports & 12 unreferenced asset bundles.",
                "> Stripping dead code paths...",
                "✔ 142KB BLOAT PRUNED. DEPLOYMENT BUNDLE MINIFIED."
              ]
            };

            function runScannerPreset(cmd) {
              const output = document.getElementById('scanner-output');
              const typedText = document.getElementById('rot-typed-text');
              if (!output || !typedText) return;
              
              typedText.innerText = cmd;
              const lines = scannerPresets[cmd] || ["Executing " + cmd + "..."];
              
              let html = '<span style="color: #d97706;">rot-scan@rot.bot:~$</span> <span style="color: #ffffff;">' + cmd + '</span><div style="margin-top: 0.5rem; color: #cbd5e1;">';
              lines.forEach(line => {
                html += line + '<br />';
              });
              html += '</div>';
              output.innerHTML = html;
            }
          </script>
        `}
      </body>
    </html>
  );
});

// API Endpoints
app.get('/api/status', (c) => {
  return c.json({
    status: 'active',
    domain: 'rot.bot',
    managedBy: 'standalone',
    version: '3.9.0',
    reposMonitored: 284000,
    astLatencyMs: 2.4,
    timestamp: new Date().toISOString()
  });
});

app.get('/api/scan', (c) => {
  return c.json({
    scanStatus: 'clean',
    vulnerabilities: 0,
    deprecatedPackages: 0,
    codebaseHealth: '100%'
  });
});

export default app;
