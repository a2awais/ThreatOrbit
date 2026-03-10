// ─────────────────────────────────────────────────────────────────
// app.js — ThreatOrbit entry point
// ─────────────────────────────────────────────────────────────────

import { GROUPS }                                           from '../data/groups.js';
import { NATION_COLORS, MOTIVATION_COLORS, COUNTRY_COORDS } from './config.js';
import { initGlobe, updateGlobe }                           from './globe.js';
import { open as openDetail }                               from './detail.js';

let visible      = [...GROUPS];
let activeNation = null;
let activeMot    = null;
let searchQ      = '';

function boot() {
  buildStats();
  buildCountryList();
  buildLegend();
  bindFilters();
  bindSearch();
  document.getElementById('globe-loading').style.display = 'none';
  initGlobe(visible, COUNTRY_COORDS, NATION_COLORS, openDetail);
}

function buildStats() {
  const cves = new Set(GROUPS.flatMap(g => (g.cves||[]).map(c=>c[0])));
  document.getElementById('s-groups').textContent = GROUPS.length;
  document.getElementById('s-cves').textContent   = cves.size;
}

function buildCountryList() {
  const byCountry = {};
  for (const g of GROUPS) byCountry[g.country] = (byCountry[g.country]||0)+1;
  const ORDER = ['Russia','China','North Korea','Iran','Vietnam','India','Pakistan','Turkey','Belarus','Israel','Lebanon','Palestine'];
  const nations = [...ORDER.filter(n=>byCountry[n]), ...Object.keys(byCountry).filter(n=>!ORDER.includes(n))];
  const list = document.getElementById('c-list');
  for (const nation of nations) {
    const col = NATION_COLORS[nation] || '#4da6e8';
    const el  = document.createElement('div');
    el.className = 'c-row';
    el.innerHTML = `<span class="c-dot" style="background:${col}"></span><span class="c-name">${nation}</span><span class="c-cnt">${byCountry[nation]}</span>`;
    el.addEventListener('click', () => {
      if (activeNation===nation) { activeNation=null; el.classList.remove('on'); }
      else { document.querySelectorAll('.c-row').forEach(r=>r.classList.remove('on')); activeNation=nation; el.classList.add('on'); }
      applyFilters();
    });
    list.appendChild(el);
  }
}

function buildLegend() {
  document.getElementById('legend-content').innerHTML =
    Object.entries(NATION_COLORS).map(([n,c]) =>
      `<div class="ek-row"><span class="c-dot" style="background:${c}"></span>${n}</div>`
    ).join('') +
    `<div style="margin-top:12px;font-size:11px;color:var(--t3);line-height:1.8">
      Pulse size = group count<br>Click marker = open dossier<br>Drag to rotate · Scroll to zoom
    </div>`;
}

function bindFilters() {
  document.querySelectorAll('.chip[data-mot]').forEach(chip => {
    chip.addEventListener('click', () => {
      const m = chip.dataset.mot;
      if (activeMot===m) { activeMot=null; chip.className='chip'; }
      else {
        document.querySelectorAll('.chip[data-mot]').forEach(c=>c.className='chip');
        activeMot=m;
        chip.classList.add('on-'+{espionage:'esp',financial:'fin',destructive:'des',mixed:'mix'}[m]);
      }
      applyFilters();
    });
  });
}

function bindSearch() {
  document.getElementById('g-search').addEventListener('input', e => {
    searchQ = e.target.value.trim().toLowerCase();
    applyFilters();
  });
}

function applyFilters() {
  visible = GROUPS.filter(g => {
    if (activeNation && g.country!==activeNation) return false;
    if (activeMot    && g.motivation!==activeMot) return false;
    if (searchQ) {
      const hay = [g.name,g.apt,g.aka,g.country,g.agency,
        ...(g.sectors||[]),...(g.malware||[]).map(m=>m[0]),
        ...(g.cves||[]).map(c=>c[0])
      ].filter(Boolean).join(' ').toLowerCase();
      if (!hay.includes(searchQ)) return false;
    }
    return true;
  });
  updateGlobe(visible);
}

boot();
