/** @jsx jsx */
import { jsx } from 'hono/jsx';

export const ScannerDemo = () => (
  <div id="scanner" style={{
    maxWidth: '960px',
    margin: '0 auto',
    backgroundColor: 'rgba(9, 12, 20, 0.95)',
    borderRadius: '16px',
    border: '1px solid rgba(245, 158, 11, 0.35)',
    boxShadow: '0 25px 60px -15px rgba(245, 158, 11, 0.25), 0 0 1px rgba(255, 255, 255, 0.1)',
    overflow: 'hidden'
  }}>
    {/* Header */}
    <div style={{
      backgroundColor: '#0a0d16',
      padding: '0.85rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block' }}></span>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b', display: 'inline-block' }}></span>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
        <span style={{ marginLeft: '0.75rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: '#94a3b8' }}>
          rot-scan@rot.bot:~ (live AST scanner)
        </span>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button id="rot-btn-1" onclick="runScannerPreset('/scan-dependencies')" class="terminal-cmd-btn">
          /scan-dependencies
        </button>
        <button id="rot-btn-2" onclick="runScannerPreset('/remediate-bitrot')" class="terminal-cmd-btn">
          /remediate-bitrot
        </button>
        <button id="rot-btn-3" onclick="runScannerPreset('/prune-dead-code')" class="terminal-cmd-btn">
          /prune-dead-code
        </button>
      </div>
    </div>

    {/* Terminal Body */}
    <div id="scanner-body" style={{
      padding: '1.5rem',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '0.9rem',
      color: '#e2e8f0',
      minHeight: '280px',
      maxHeight: '380px',
      overflowY: 'auto',
      lineHeight: '1.7',
      backgroundColor: '#060810'
    }}>
      <div style={{ color: '#f59e0b' }}>[ROT.BOT AUTONOMOUS SECURITY ENGINE ACTIVE]</div>
      <div style={{ color: '#64748b' }}>Click a preset or enter command to scan codebase for bitrot and vulnerabilities.</div>
      <br />
      <div id="scanner-output">
        <span style={{ color: '#f59e0b' }}>rot-scan@rot.bot:~$</span> <span id="rot-typed-text">/scan-dependencies</span>
        <div style={{ marginTop: '0.5rem', color: '#cbd5e1' }}>
          &gt; Scanning AST syntax tree & node_modules dependency graph...<br />
          &gt; <span style={{ color: '#ef4444' }}>ALERT: Detected 2 deprecated sub-dependencies (CVE-2026-4821)</span><br />
          &gt; Applying automated non-breaking patch via Auto-Patch-AI...<br />
          &gt; Execution speed: <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>2.4ms</span> | Code bloat eliminated: -18.4%<br />
          <span style={{ color: '#10b981' }}>✔ ALL REPOSITORIES SECURED. ZERO CODE ROT DETECTED.</span>
        </div>
      </div>
    </div>
  </div>
);
