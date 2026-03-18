// ─────────────────────────────────────────────────────────────────
// app.js — ThreatOrbit entry point
// ─────────────────────────────────────────────────────────────────

import { GROUPS }                                            from '../data/groups.js';
import { NATION_COLORS, MOTIVATION_COLORS, COUNTRY_COORDS }  from './config.js';
import { initGlobe, updateGlobe }                            from './globe.js';
import { open as openDetail }                                from './detail.js';

// ── Catch uncaught async errors (e.g. inside requestAnimationFrame) ──
window.addEventListener('error', ev => {
  showError(ev.message || String(ev));
});
window.addEventListener('unhandledrejection', ev => {
  showError(ev.reason?.message || String(ev.reason));
});

function showError(msg) {
  const el = document.getElementById('globe-loading');
  if (!el) return;
  el.style.display = 'flex';
  el.innerHTML = `
    <div style="text-align:center;padding:32px;max-width:420px">
      <div style="font-family:var(--mono);font-size:13px;color:var(--red);margin-bottom:10px">
        Initialisation error
      </div>
      <div style="font-family:var(--mono);font-size:11px;color:var(--t3);line-height:1.8;word-break:break-all">
        ${msg}
      </div>
      <div style="font-size:11px;color:var(--t3);margin-top:14px">
        Open DevTools → Console (F12) for the full stack trace.
      </div>
    </div>`;
}

// ── State ──────────────────────────────────────────────────────────
let visible      = [...GROUPS];
let activeNation = null;
let activeMot    = null;
let searchQ      = '';

// ── Boot ───────────────────────────────────────────────────────────
function boot() {
  const loadingEl = document.getElementById('globe-loading');
  const msgEl     = document.getElementById('loading-msg');

  try {
    if (msgEl) msgEl.textContent = 'Building interface…';
    buildStats();
    buildCountryList();
    buildLegend();
    bindFilters();
    bindSearch();

    if (msgEl) msgEl.textContent = 'Launching globe…';

    // initGlobe() is synchronous setup — if it returns without throwing, we're good.
    // The canvas starts rendering via requestAnimationFrame immediately after.
    initGlobe(visible, COUNTRY_COORDS, NATION_COLORS, openDetail);

    // Hide loading screen — globe renderer is initialised and first RAF is queued
    loadingEl.style.display = 'none';

  } catch (err) {
    console.error('ThreatOrbit boot error:', err);
    showError(err.message || String(err));
  }
}

// ── Stats ──────────────────────────────────────────────────────────
function buildStats() {
  const cves = new Set(GROUPS.flatMap(g => (g.cves || []).map(c => c[0])));
  document.getElementById('s-groups').textContent = GROUPS.length;
  document.getElementById('s-cves').textContent   = cves.size;
}

// ── Country sidebar ────────────────────────────────────────────────
function buildCountryList() {
  const byCountry = {};
  for (const g of GROUPS) byCountry[g.country] = (byCountry[g.country] || 0) + 1;

  const ORDER   = ['Russia','China','North Korea','Iran','Vietnam','India',
                   'Pakistan','Turkey','Belarus','Israel','Lebanon','Palestine'];
  const nations = [
    ...ORDER.filter(n => byCountry[n]),
    ...Object.keys(byCountry).filter(n => !ORDER.includes(n))
  ];

  const list = document.getElementById('c-list');
  for (const nation of nations) {
    const col = NATION_COLORS[nation] || '#4da6e8';
    const el  = document.createElement('div');
    el.className = 'c-row';
    el.innerHTML =
      `<span class="c-dot" style="background:${col}"></span>` +
      `<span class="c-name">${nation}</span>` +
      `<span class="c-cnt">${byCountry[nation]}</span>`;
    el.addEventListener('click', () => {
      if (activeNation === nation) {
        activeNation = null;
        el.classList.remove('on');
      } else {
        document.querySelectorAll('.c-row').forEach(r => r.classList.remove('on'));
        activeNation = nation;
        el.classList.add('on');
      }
      applyFilters();
    });
    list.appendChild(el);
  }
}

// ── Legend ─────────────────────────────────────────────────────────
function buildLegend() {
  const rows = Object.entries(NATION_COLORS)
    .map(([n, c]) => `<div class="ek-row"><span class="c-dot" style="background:${c}"></span>${n}</div>`)
    .join('');
  document.getElementById('legend-content').innerHTML = rows +
    `<div style="margin-top:12px;font-size:11px;color:var(--t3);line-height:1.9">
      Pulse size = group count<br>
      Click marker = open dossier<br>
      Drag to rotate · Scroll to zoom
    </div>`;
}

// ── Motivation chips ───────────────────────────────────────────────
function bindFilters() {
  document.querySelectorAll('.chip[data-mot]').forEach(chip => {
    chip.addEventListener('click', () => {
      const m = chip.dataset.mot;
      if (activeMot === m) {
        activeMot = null;
        chip.className = 'chip';
      } else {
        document.querySelectorAll('.chip[data-mot]').forEach(c => c.className = 'chip');
        activeMot = m;
        chip.classList.add('on-' + { espionage:'esp', financial:'fin', destructive:'des', mixed:'mix' }[m]);
      }
      applyFilters();
    });
  });
}

// ── Search ─────────────────────────────────────────────────────────
function bindSearch() {
  document.getElementById('g-search').addEventListener('input', e => {
    searchQ = e.target.value.trim().toLowerCase();
    applyFilters();
  });
}

// ── Filter logic ───────────────────────────────────────────────────
function applyFilters() {
  visible = GROUPS.filter(g => {
    if (activeNation && g.country    !== activeNation) return false;
    if (activeMot    && g.motivation !== activeMot)    return false;
    if (searchQ) {
      const hay = [
        g.name, g.apt, g.aka, g.country, g.agency,
        ...(g.sectors || []),
        ...(g.malware || []).map(m => m[0]),
        ...(g.cves    || []).map(c => c[0]),
      ].filter(Boolean).join(' ').toLowerCase();
      if (!hay.includes(searchQ)) return false;
    }
    return true;
  });
  updateGlobe(visible);
}


// ── Brand click → reset to home ────────────────────────────────────
function bindHomeNav() {
  const brand = document.querySelector('.tb-brand');
  if (!brand) return;
  brand.style.cursor = 'pointer';
  brand.title = 'Return to globe view';
  brand.addEventListener('click', () => {
    // Close detail panel
    document.getElementById('detail').classList.remove('on');
    // Clear all filters
    activeNation = null;
    activeMot    = null;
    searchQ      = '';
    document.querySelectorAll('.c-row').forEach(r => r.classList.remove('on'));
    document.querySelectorAll('.chip[data-mot]').forEach(c => c.className = 'chip');
    document.getElementById('g-search').value = '';
    // Reset globe to full group list
    visible = [...GROUPS];
    updateGlobe(visible);
  });
}

// ── Go ──────────────────────────────────────────────────────────────
boot();
