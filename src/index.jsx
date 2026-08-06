/** @jsx jsx */
import { Hono } from 'hono';
import { jsx } from 'hono/jsx';
import { html } from 'hono/html';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { ScannerDemo } from './components/ScannerDemo.jsx';
import { ModuleGrid } from './components/ModuleGrid.jsx';

const app = new Hono();

// Main App Route
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
              background-color: #050810;
              color: #f8fafc;
              min-height: 100vh;
              overflow-x: hidden;
              line-height: 1.5;
            }
            
            /* Cyber Background Mesh */
            .cyber-amber-bg {
              position: relative;
              background-image: 
                radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.16) 0%, transparent 60%),
                radial-gradient(circle at 85% 30%, rgba(239, 68, 68, 0.12) 0%, transparent 50%),
                radial-gradient(circle at 15% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
            }
            .grid-overlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 100%;
              background-size: 40px 40px;
              background-image: 
                linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
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
            }
            .hero-gradient {
              background: linear-gradient(135deg, #ffffff 0%, #fef3c7 40%, #f59e0b 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            /* Cards & Glassmorphism */
            .module-card {
              background: rgba(15, 23, 42, 0.65);
              backdrop-filter: blur(12px);
              border: 1px solid rgba(255, 255, 255, 0.08);
              border-radius: 16px;
              padding: 2rem;
              transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .module-card:hover {
              transform: translateY(-4px);
              border-color: rgba(245, 158, 11, 0.4);
              box-shadow: 0 20px 40px -15px rgba(245, 158, 11, 0.2);
            }
            .module-tag {
              display: inline-block;
              padding: 0.25rem 0.65rem;
              border-radius: 6px;
              backgroundColor: rgba(255, 255, 255, 0.05);
              border: 1px solid rgba(255, 255, 255, 0.1);
              color: #94a3b8;
              font-size: 0.75rem;
              font-family: 'JetBrains Mono', monospace;
            }

            /* Terminal Buttons */
            .terminal-cmd-btn {
              background: rgba(255, 255, 255, 0.06);
              border: 1px solid rgba(255, 255, 255, 0.12);
              color: #f59e0b;
              font-family: 'JetBrains Mono', monospace;
              font-size: 0.75rem;
              padding: 0.35rem 0.75rem;
              border-radius: 6px;
              cursor: pointer;
              transition: all 0.2s ease;
            }
            .terminal-cmd-btn:hover {
              background: rgba(245, 158, 11, 0.2);
              border-color: #f59e0b;
              color: #ffffff;
            }

            /* Metric Stat Cards */
            .stat-box {
              background: rgba(11, 15, 26, 0.85);
              border: 1px solid rgba(245, 158, 11, 0.2);
              border-radius: 12px;
              padding: 1.25rem 1.5rem;
              text-align: center;
            }
            .stat-num {
              font-family: 'Outfit', sans-serif;
              font-size: 2rem;
              font-weight: 800;
              color: #f59e0b;
              line-height: 1.2;
            }
            .stat-label {
              font-size: 0.8rem;
              color: #94a3b8;
              font-family: 'JetBrains Mono', monospace;
              text-transform: uppercase;
              margin-top: 0.25rem;
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
                backgroundColor: 'rgba(245, 158, 11, 0.12)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                color: '#f59e0b',
                fontSize: '0.85rem',
                fontWeight: '600',
                marginBottom: '2rem',
                boxShadow: '0 0 20px rgba(245, 158, 11, 0.15)'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b', boxShadow: '0 0 10px #f59e0b' }}></span>
                Autonomous Code Defense Protocol • Version 3.9
              </div>

              <h1 class="hero-title">
                Zero-Downtime Code <br />
                <span class="hero-gradient">Rot Defense Engine</span>
              </h1>

              <p style={{ color: '#94a3b8', fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '2.5rem', fontWeight: 400 }}>
                Continuous AST static analysis, automated zero-day dependency vulnerability patching, and legacy refactoring bot engine.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
                <a href="#scanner" style={{
                  padding: '0.9rem 2rem',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1rem',
                  boxShadow: '0 0 24px rgba(245, 158, 11, 0.4)',
                  transition: 'all 0.2s ease'
                }}>
                  Launch AST Scanner &rarr;
                </a>
                <a href="mailto:mailto@rot.bot" style={{
                  padding: '0.9rem 2rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: '#f8fafc',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
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
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2rem', fontWeight: '800', color: '#f8fafc' }}>
                  Developer Integration & API
                </h2>
                <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '0.5rem' }}>
                  Trigger automated code rot scans and patch validation via REST API
                </p>
              </div>

              <div style={{
                backgroundColor: '#090d18',
                borderRadius: '16px',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                padding: '1.75rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.875rem'
              }}>
                <div style={{ color: '#64748b', marginBottom: '1rem' }}>
                  // Trigger rot.bot AST Scan & Auto-Remediation
                </div>
                <div style={{ color: '#a78bfa' }}>
                  import <span style={{ color: '#f59e0b' }}>{'{ RotDefenseEngine }'}</span> from <span style={{ color: '#34d399' }}>'@rot.bot/security'</span>;
                </div>
                <br />
                <div>
                  <span style={{ color: '#f472b6' }}>const</span> guard = <span style={{ color: '#f472b6' }}>new</span> RotDefenseEngine({'{'} domain: <span style={{ color: '#34d399' }}>'rot.bot'</span> {'}'});
                </div>
                <div>
                  <span style={{ color: '#f472b6' }}>const</span> report = <span style={{ color: '#f472b6' }}>await</span> guard.scanAndRemediate({'{'}
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  module: <span style={{ color: '#34d399' }}>'Rot-Scan-x64'</span>,
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  autoPatch: <span style={{ color: '#f59e0b' }}>true</span>
                </div>
                <div>{'}'});</div>
                <br />
                <div style={{ color: '#10b981' }}>
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
              
              let html = '<span style="color: #f59e0b;">rot-scan@rot.bot:~$</span> <span style="color: #ffffff;">' + cmd + '</span><div style="margin-top: 0.5rem; color: #cbd5e1;">';
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
