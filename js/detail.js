// ─────────────────────────────────────────────────────────────────
// detail.js — Group intelligence dossier panel
// ─────────────────────────────────────────────────────────────────

import { NATION_COLORS, MOTIVATION_COLORS, TACTIC_COLORS } from './config.js';

// ── DOM refs resolved lazily (not at import time) ─────────────────
// Wrapping in getters avoids null-crash if module loads before DOM is ready
function panel()    { return document.getElementById('detail'); }
function nameEl()   { return document.getElementById('dp-name'); }
function subEl()    { return document.getElementById('dp-sub'); }
function bodyEl()   { return document.getElementById('dp-body'); }

// Wire close button once, safely
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('dp-close');
  if (btn) btn.addEventListener('click', close);
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

// ── Open dossier panel ────────────────────────────────────────────
export function open(g) {
  const col      = NATION_COLORS[g.country] || '#4da6e8';
  const mot      = MOTIVATION_COLORS[g.motivation] || MOTIVATION_COLORS.espionage;
  const isActive = g.last_seen >= 2024;

  nameEl().textContent = g.name;
  subEl().textContent  = [g.apt, g.country, g.agency].filter(Boolean).join(' · ');

  let h = '';

  // Badges + meta
  h += `<div class="ds">
    <div class="dp-badges">
      <span class="dpbadge" style="color:${col};border-color:${col}50;background:${col}18">
        <span style="width:5px;height:5px;border-radius:50%;background:${col};display:inline-block"></span>${g.country}
      </span>
      <span class="dpbadge" style="color:${mot.hex};border-color:${mot.hex}50;background:${mot.hex}18">${mot.label}</span>
      ${isActive ? `<span class="dpbadge" style="color:var(--green);border-color:rgba(76,199,138,.4);background:rgba(76,199,138,.1)">Active ${g.last_seen}</span>` : ''}
      <span class="dpbadge" style="color:var(--t2);border-color:var(--bdr)">${g.confidence} confidence</span>
    </div>
    ${g.aka ? `<div style="font-size:11px;color:var(--t3);font-family:var(--mono);line-height:1.7">${g.aka}</div>` : ''}
    <div class="meta-grid">
      <div class="meta-cell"><div class="meta-key">Agency</div><div class="meta-val" style="font-size:12px;color:var(--blue)">${g.agency}</div></div>
      <div class="meta-cell"><div class="meta-key">Active Since</div><div class="meta-val">${g.active_since}</div></div>
      <div class="meta-cell"><div class="meta-key">Last Observed</div><div class="meta-val" style="color:${isActive ? 'var(--green)' : 'var(--t2)'}">${g.last_seen}</div></div>
      <div class="meta-cell"><div class="meta-key">Targets</div><div class="meta-val" style="font-size:11px">${(g.targets || []).slice(0, 4).join(', ')}</div></div>
    </div>
    <div class="dp-desc">${g.description}</div>
  </div>`;

  // Sectors
  if ((g.sectors || []).length) {
    h += `<div class="ds"><div class="ds-title">Targeted Sectors</div>
    <div class="sectors-row">${g.sectors.map(s => `<span class="sec-badge">${s}</span>`).join('')}</div></div>`;
  }

  // TTPs
  if ((g.ttps || []).length) {
    h += `<div class="ds"><div class="ds-title">MITRE ATT&amp;CK TTPs — ${g.ttps.length}</div><div class="ttp-list">`;
    for (const [id, name, tactic] of g.ttps) {
      const t   = TACTIC_COLORS[tactic] || { label: tactic, col: '#888' };
      const url = `https://attack.mitre.org/techniques/${id.replace('.', '/')}/`;
      h += `<div class="ttp" style="border-color:${t.col}">
        <div class="ttp-id" style="color:${t.col}"><a href="${url}" target="_blank" rel="noopener">${id}</a></div>
        <div class="ttp-name">${name}</div>
        <div class="ttp-tac" style="background:${t.col}20;color:${t.col}">${t.label}</div>
      </div>`;
    }
    h += `</div></div>`;
  }

  // Malware
  if ((g.malware || []).length) {
    h += `<div class="ds"><div class="ds-title">Malware &amp; Tools — ${g.malware.length}</div><div class="mal-list">`;
    for (const [n, tp, pl] of g.malware)
      h += `<div class="mal"><span class="mal-name">${n}</span><span class="mal-type">${tp}</span><span class="mal-plat">${pl}</span></div>`;
    h += `</div></div>`;
  }

  // CVEs
  if ((g.cves || []).length) {
    h += `<div class="ds"><div class="ds-title">Exploited CVEs — ${g.cves.length}</div>
    <table class="cvt"><thead><tr><th>CVE</th><th>CVSS</th><th>Product</th><th>Year</th></tr></thead><tbody>`;
    for (const [id, cvss, prod, yr] of g.cves) {
      const cls = cvss >= 9 ? 'cpill-c' : cvss >= 7 ? 'cpill-h' : 'cpill-m';
      h += `<tr>
        <td><span class="cve-id"><a href="https://nvd.nist.gov/vuln/detail/${id}" target="_blank" rel="noopener">${id}</a></span></td>
        <td><span class="cpill ${cls}">${cvss}</span></td>
        <td>${prod}</td><td>${yr}</td></tr>`;
    }
    h += `</tbody></table></div>`;
  }

  // Detections
  if ((g.detections || []).length) {
    h += `<div class="ds"><div class="ds-title">Advisories &amp; Detection Resources</div><div class="det-list">`;
    for (const [src, title, url] of g.detections)
      h += `<div class="det"><span class="det-src">${src}</span><div class="det-link"><a href="${url}" target="_blank" rel="noopener">${title}</a></div></div>`;
    h += `</div></div>`;
  }

  // Members
  if ((g.members || []).length) {
    h += `<div class="ds"><div class="ds-title">Known Members — ${g.members.length}</div>
    <table class="mem-tbl"><thead><tr><th>Name</th><th>Role</th><th>Status</th></tr></thead><tbody>`;
    for (const [n, r, s] of g.members) {
      const cls = s.includes('indicted') ? 'mbadge-i' : s.includes('sanctioned') ? 'mbadge-s' : 'mbadge-d';
      h += `<tr><td>${n}</td><td>${r}</td><td><span class="mbadge ${cls}">${s}</span></td></tr>`;
    }
    h += `</tbody></table></div>`;
  }

  bodyEl().innerHTML = h;
  panel().classList.add('on');
}

// ── Close ─────────────────────────────────────────────────────────
export function close() {
  const p = panel();
  if (p) p.classList.remove('on');
}
