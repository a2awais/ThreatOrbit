// ─────────────────────────────────────────────────────────────────
// config.js — All constants, colours, and static mappings
// ─────────────────────────────────────────────────────────────────

export const NATION_COLORS = {
  Russia:        '#e05555',
  China:         '#e07840',
  'North Korea': '#d44444',
  Iran:          '#d4a040',
  Vietnam:       '#44cc88',
  India:         '#e08040',
  Pakistan:      '#44b0e0',
  Turkey:        '#e060a0',
  Belarus:       '#b080e8',
  Israel:        '#8080e8',
  Lebanon:       '#70cc88',
  Palestine:     '#d8cc40',
};

export const MOTIVATION = {
  espionage:   { hex: '#4da6e8', label: 'Espionage' },
  financial:   { hex: '#e8924a', label: 'Financial' },
  destructive: { hex: '#e06060', label: 'Destructive' },
  mixed:       { hex: '#9d7ee8', label: 'Mixed' },
};

export const TACTIC = {
  'initial-access':       { label: 'Initial Access',    col: '#3b82f6' },
  'execution':            { label: 'Execution',         col: '#f97316' },
  'persistence':          { label: 'Persistence',       col: '#eab308' },
  'privilege-escalation': { label: 'Priv. Escalation',  col: '#ef4444' },
  'defense-evasion':      { label: 'Defense Evasion',   col: '#a855f7' },
  'credential-access':    { label: 'Credential Access', col: '#ec4899' },
  'discovery':            { label: 'Discovery',         col: '#06b6d4' },
  'lateral-movement':     { label: 'Lateral Movement',  col: '#10b981' },
  'collection':           { label: 'Collection',        col: '#14b8a6' },
  'exfiltration':         { label: 'Exfiltration',      col: '#f43f5e' },
  'command-and-control':  { label: 'C2',                col: '#6366f1' },
  'impact':               { label: 'Impact',            col: '#dc2626' },
};

// Pre-compute relationship edges from shared malware + CVEs
// Called once after data loads — no need to edit manually
export function computeEdges(groups) {
  const edges = [];
  for (let i = 0; i < groups.length; i++) {
    for (let j = i + 1; j < groups.length; j++) {
      const a = groups[i], b = groups[j];
      const malA = new Set((a.malware || []).map(m => m[0]));
      const malB = new Set((b.malware || []).map(m => m[0]));
      const cveA = new Set((a.cves   || []).map(c => c[0]));
      const cveB = new Set((b.cves   || []).map(c => c[0]));
      const ttpA = new Set((a.ttps   || []).map(t => t[0]));
      const ttpB = new Set((b.ttps   || []).map(t => t[0]));

      const sharedMal = [...malA].filter(x => malB.has(x));
      const sharedCve = [...cveA].filter(x => cveB.has(x));
      const sharedTtp = [...ttpA].filter(x => ttpB.has(x));
      const weight = sharedMal.length * 3 + sharedCve.length * 2 + sharedTtp.length;

      if (weight >= 3) {
        edges.push({ source: i, target: j, weight, sharedMal, sharedCve });
      }
    }
  }
  return edges;
}
