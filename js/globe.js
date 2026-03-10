// ─────────────────────────────────────────────────────────────────
// globe.js — ThreatOrbit Three.js globe engine
// Wraps the globe renderer as two exported functions:
//   initGlobe(groups, coords, colors, onGroupClick)
//   updateGlobe(filteredGroups)
// ─────────────────────────────────────────────────────────────────

// importmap in index.html resolves 'three' and 'three/addons/'
import * as THREE        from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ── Module state ──────────────────────────────────────────────────
let _groups, _coords, _colors, _onGroupClick;
let scene, camera, renderer, controls;
let markers = [], arcs = [], arcPhases = [];
let autoRot = true, hovered = null;
const ray   = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const R     = 5;

// ── Utility: lat/lng → Vector3 ────────────────────────────────────
function ll(lat, lng, r) {
  const phi = (90 - lat) * Math.PI / 180;
  const th  = (lng + 180) * Math.PI / 180;
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(th),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(th)
  );
}

// ── Init ──────────────────────────────────────────────────────────
export function initGlobe(groups, coords, colors, onGroupClick) {
  _groups       = groups;
  _coords       = coords;
  _colors       = colors;
  _onGroupClick = onGroupClick;

  const canvas    = document.getElementById('globe-canvas');
  const container = canvas.parentElement;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x060d18);

  camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(-3, 4, 12);

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping    = true;
  controls.dampingFactor    = 0.06;
  controls.minDistance      = 7;
  controls.maxDistance      = 22;
  controls.autoRotate       = true;
  controls.autoRotateSpeed  = 0.4;

  buildStars();
  buildGlobe();
  buildMarkers();
  buildArcs();

  // Mouse interaction
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width)  * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  });

  canvas.addEventListener('click', () => {
    ray.setFromCamera(mouse, camera);
    const hits = ray.intersectObjects(markers, false);
    if (hits.length) {
      const g = hits[0].object.userData.group;
      if (g) _onGroupClick(g);
    }
  });

  window.addEventListener('resize', onResize);
  animate();
}

// ── Update visible groups (called on filter change) ───────────────
export function updateGlobe(filteredGroups) {
  _groups = filteredGroups;
  buildMarkers();
  buildArcs();
}

// ── Stars ─────────────────────────────────────────────────────────
function buildStars() {
  const geo = new THREE.BufferGeometry();
  const pos = [];
  for (let i = 0; i < 4000; i++) {
    const r   = 80 + Math.random() * 120;
    const phi = Math.acos(2 * Math.random() - 1);
    const th  = Math.random() * Math.PI * 2;
    pos.push(r * Math.sin(phi) * Math.cos(th), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(th));
  }
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  scene.add(new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xc0d8f8, size: 0.18, transparent: true, opacity: 0.7 })));
}

// ── Globe sphere ──────────────────────────────────────────────────
function buildGlobe() {
  // Core sphere
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(R, 64, 64),
    new THREE.MeshPhongMaterial({ color: 0x0d1525, specular: 0x1a3a5c, shininess: 12 })
  );
  scene.add(sphere);

  // Wireframe grid
  scene.add(new THREE.Mesh(
    new THREE.SphereGeometry(R + 0.01, 36, 18),
    new THREE.MeshBasicMaterial({ color: 0x1a3a5c, wireframe: true, transparent: true, opacity: 0.18 })
  ));

  // Atmosphere glow
  const atmo = new THREE.Mesh(
    new THREE.SphereGeometry(R + 0.35, 64, 64),
    new THREE.MeshPhongMaterial({ color: 0x0d2a4a, transparent: true, opacity: 0.18, side: THREE.BackSide })
  );
  scene.add(atmo);

  // Lighting
  scene.add(new THREE.AmbientLight(0x334466, 1.2));
  const sun = new THREE.DirectionalLight(0x6699cc, 1.8);
  sun.position.set(20, 10, 15);
  scene.add(sun);
}

// ── Nation markers ────────────────────────────────────────────────
function buildMarkers() {
  // Remove old
  for (const m of markers) scene.remove(m);
  markers = [];

  // Group by country
  const byCountry = {};
  for (const g of _groups) {
    if (!byCountry[g.country]) byCountry[g.country] = [];
    byCountry[g.country].push(g);
  }

  for (const [country, groups] of Object.entries(byCountry)) {
    const coord = _coords[country];
    if (!coord) continue;
    const [lat, lng] = Array.isArray(coord) ? coord : [coord.lat, coord.lng];
    const col   = parseInt((_colors[country] || '#4da6e8').replace('#', ''), 16);
    const count = groups.length;
    const size  = 0.1 + count * 0.04;

    // Glow ring
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(size + 0.05, size + 0.15, 32),
      new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.3, side: THREE.DoubleSide })
    );
    const pos = ll(lat, lng, R + 0.02);
    ring.position.copy(pos);
    ring.lookAt(scene.position);
    scene.add(ring);

    // Dot
    const dot = new THREE.Mesh(
      new THREE.CircleGeometry(size, 32),
      new THREE.MeshBasicMaterial({ color: col, side: THREE.DoubleSide })
    );
    dot.position.copy(ll(lat, lng, R + 0.03));
    dot.lookAt(scene.position);
    dot.userData = { country, groups, color: col };

    // Clicking a multi-group marker opens the first group
    // (country panel is handled by app.js — pass first group for now)
    dot.userData.group = groups[0];
    scene.add(dot);
    markers.push(dot);
  }
}

// ── Attack arcs ───────────────────────────────────────────────────
function buildArcs() {
  for (const a of arcs) scene.remove(a);
  arcs = []; arcPhases = [];

  for (const g of _groups) {
    const origin = _coords[g.country];
    if (!origin) continue;
    const [oLat, oLng] = Array.isArray(origin) ? origin : [origin.lat, origin.lng];
    const col = parseInt((_colors[g.country] || '#4da6e8').replace('#',''), 16);

    for (const target of (g.targets || []).slice(0, 3)) {
      const dest = _coords[target];
      if (!dest) continue;
      const [dLat, dLng] = Array.isArray(dest) ? dest : [dest.lat, dest.lng];

      const from  = ll(oLat, oLng, R + 0.05);
      const to    = ll(dLat, dLng, R + 0.05);
      const mid   = from.clone().add(to).multiplyScalar(0.5).normalize().multiplyScalar(R + 1.5 + Math.random());

      const curve  = new THREE.QuadraticBezierCurve3(from, mid, to);
      const points = curve.getPoints(48);
      const geo    = new THREE.BufferGeometry().setFromPoints(points);
      const mat    = new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.0 });
      const arc    = new THREE.Line(geo, mat);
      scene.add(arc);
      arcs.push(arc);
      arcPhases.push(Math.random() * Math.PI * 2);
    }
  }
}

// ── Animation loop ────────────────────────────────────────────────
function animate() {
  requestAnimationFrame(animate);
  const t = performance.now() * 0.001;

  arcs.forEach((arc, i) => {
    arc.material.opacity = 0.12 + 0.1 * Math.sin(t * 1.4 + arcPhases[i]);
  });

  // Hover highlight
  ray.setFromCamera(mouse, camera);
  const hits = ray.intersectObjects(markers, false);
  if (hovered && (!hits.length || hits[0].object !== hovered)) {
    hovered.material.opacity = 1;
    hovered.scale.set(1, 1, 1);
    hovered = null;
    document.getElementById('tooltip').className = '';
    renderer.domElement.style.cursor = 'default';
  }
  if (hits.length) {
    const m = hits[0].object;
    if (m !== hovered) {
      hovered = m;
      m.material.opacity = 1;
      m.scale.set(1.6, 1.6, 1.6);
      renderer.domElement.style.cursor = 'pointer';
      const { country, groups } = m.userData;
      const tip = document.getElementById('tooltip');
      tip.className = 'on';
      tip.innerHTML = `
        <div class="tt-name" style="color:#${(_colors[country]||'#4da6e8').replace('#','')}">${country}</div>
        <div class="tt-sub">${groups.length} group${groups.length > 1 ? 's' : ''} · ${groups.map(g=>g.name).join(', ')}</div>
        <div class="tt-hint">Click to open dossier</div>`;
    }
    // Move tooltip
    const rect = renderer.domElement.getBoundingClientRect();
    const sx = (mouse.x + 1) / 2 * rect.width  + rect.left;
    const sy = (1 - (mouse.y + 1) / 2) * rect.height + rect.top;
    const tip = document.getElementById('tooltip');
    tip.style.left = (sx + 16) + 'px';
    tip.style.top  = (sy - 10) + 'px';
  }

  controls.update();
  renderer.render(scene, camera);
}

// ── Resize ────────────────────────────────────────────────────────
function onResize() {
  const container = renderer.domElement.parentElement;
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}
