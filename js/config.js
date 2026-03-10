// ─────────────────────────────────────────────────────────────────
// config.js — All constants, colours, and mappings
// Edit this file to change accent colours, add new nations, etc.
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

export const MOTIVATION_COLORS = {
  espionage:   { hex: '#4da6e8', label: 'Espionage' },
  financial:   { hex: '#e8924a', label: 'Financial' },
  destructive: { hex: '#e06060', label: 'Destructive' },
  mixed:       { hex: '#9d7ee8', label: 'Mixed' },
};

export const TACTIC_COLORS = {
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

// Country lat/lng centres for globe arc drawing
export const COUNTRY_COORDS = {
  Russia:         { lat: 61.5,  lng:  105.3 },
  China:          { lat: 35.8,  lng:  104.2 },
  'North Korea':  { lat: 40.3,  lng:  127.5 },
  Iran:           { lat: 32.4,  lng:   53.7 },
  Vietnam:        { lat: 14.1,  lng:  108.3 },
  India:          { lat: 20.6,  lng:   78.9 },
  Pakistan:       { lat: 30.4,  lng:   69.3 },
  Turkey:         { lat: 38.9,  lng:   35.2 },
  Belarus:        { lat: 53.7,  lng:   27.9 },
  Israel:         { lat: 31.0,  lng:   34.8 },
  Lebanon:        { lat: 33.9,  lng:   35.5 },
  Palestine:      { lat: 31.9,  lng:   35.2 },
  USA:            { lat: 37.1,  lng:  -95.7 },
  UK:             { lat: 55.4,  lng:   -3.4 },
  Ukraine:        { lat: 48.4,  lng:   31.2 },
  Germany:        { lat: 51.2,  lng:   10.4 },
  France:         { lat: 46.2,  lng:    2.2 },
  NATO:           { lat: 50.8,  lng:    4.4 },
  EU:             { lat: 50.1,  lng:    9.0 },
  Japan:          { lat: 36.2,  lng:  138.3 },
  'South Korea':  { lat: 35.9,  lng:  127.8 },
  Australia:      { lat: -25.3, lng:  133.8 },
  Taiwan:         { lat: 23.7,  lng:  120.9 },
  'Saudi Arabia': { lat: 23.9,  lng:   45.1 },
  UAE:            { lat: 24.0,  lng:   54.0 },
  'Middle East':  { lat: 29.0,  lng:   42.0 },
  'Southeast Asia':{ lat: 12.5, lng:  105.0 },
  Global:         { lat:  0.0,  lng:    0.0 },
};

export const GLOBE = {
  RADIUS: 5,
  BG_COLOR: 0x060d18,
  SURFACE_COLOR: 0x0d1525,
  WIRE_COLOR: 0x1a3a5c,
  ATMOS_COLOR: 0x0d2a4a,
  STAR_COLOR: 0xc0d8f8,
};
