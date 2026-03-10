// ─────────────────────────────────────────────────────────────────
// globe.js — ThreatOrbit Three.js globe engine
// ─────────────────────────────────────────────────────────────────

import * as THREE        from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ── Module state (no THREE calls at top level — moved inside initGlobe) ──
let _groups, _coords, _colors, _onGroupClick, _onReady;
let scene, camera, renderer, controls;
let markers = [], arcs = [], arcPhases = [];
let hovered = null;
let ray, mouse;       // ← initialised inside initGlobe, not at import time
const R = 5;

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

// ── Public: initialise everything ────────────────────────────────
export function initGlobe(groups, coords, colors, onGroupClick, onReady) {
  _groups       = groups;
  _coords       = coords;
  _colors       = colors;
  _onGroupClick = onGroupClick;
  _onReady      = onReady || (() => {});

  // Safe to call THREE here — imports are resolved before this function runs
  ray   = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  const canvas    = document.getElementById('globe-canvas');
  const container = canvas.parentElement;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x060d18);

  camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1, 1000
  );
  camera.position.set(-3, 4, 12);

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping   = true;
  controls.dampingFactor   = 0.06;
  controls.minDistance     = 7;
  controls.maxDistance     = 22;
  controls.autoRotate      = true;
  controls.autoRotateSpeed = 0.4;

  buildStars();
  buildGlobe();
  buildMarkers();
  buildArcs();

  // Mouse
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
    mouse.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
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
  animate(true); // pass firstFrame flag
}

// ── Public: filter update ────────────────────────────────────────
export function updateGlobe(filteredGroups) {
  _groups = filteredGroups;
  buildMarkers();
  buildArcs();
}

// ── Stars ────────────────────────────────────────────────────────
function buildStars() {
  const geo = new THREE.BufferGeometry();
  const pos = [];
  for (let i = 0; i < 4000; i++) {
    const r   = 80 + Math.random() * 120;
    const phi = Math.acos(2 * Math.random() - 1);
    const th  = Math.random() * Math.PI * 2;
    pos.push(
      r * Math.sin(phi) * Math.cos(th),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(th)
    );
  }
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  scene.add(new THREE.Points(geo, new THREE.PointsMaterial({
    color: 0xc0d8f8, size: 0.18, transparent: true, opacity: 0.7
  })));
}

// ── Globe sphere + grid + atmosphere ────────────────────────────
function buildGlobe() {
  scene.add(new THREE.Mesh(
    new THREE.SphereGeometry(R, 64, 64),
    new THREE.MeshPhongMaterial({ color: 0x0d1525, specular: 0x1a3a5c, shininess: 12 })
  ));

  scene.add(new THREE.Mesh(
    new THREE.SphereGeometry(R + 0.01, 36, 18),
    new THREE.MeshBasicMaterial({ color: 0x1a3a5c, wireframe: true, transparent: true, opacity: 0.18 })
  ));

  scene.add(new THREE.Mesh(
    new THREE.SphereGeometry(R + 0.35, 64, 64),
    new THREE.MeshPhongMaterial({ color: 0x0d2a4a, transparent: true, opacity: 0.18, side: THREE.BackSide })
  ));

  scene.add(new THREE.AmbientLight(0x334466, 1.2));
  const sun = new THREE.DirectionalLight(0x6699cc, 1.8);
  sun.position.set(20, 10, 15);
  scene.add(sun);
}

// ── Nation markers ───────────────────────────────────────────────
function buildMarkers() {
  for (const m of markers) scene.remove(m);
  markers = [];

  const byCountry = {};
  for (const g of _groups) {
    if (!byCountry[g.country]) byCountry[g.country] = [];
    byCountry[g.country].push(g);
  }

  for (const [country, groups] of Object.entries(byCountry)) {
    const coord = _coords[country];
    if (!coord) continue;
    const lat  = Array.isArray(coord) ? coord[0] : coord.lat;
    const lng  = Array.isArray(coord) ? coord[1] : coord.lng;
    const hex  = parseInt((_colors[country] || '#4da6e8').replace('#', ''), 16);
    const size = 0.1 + groups.length * 0.04;

    // Glow ring
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(size + 0.05, size + 0.18, 32),
      new THREE.MeshBasicMaterial({ color: hex, transparent: true, opacity: 0.3, side: THREE.DoubleSide })
    );
    ring.position.copy(ll(lat, lng, R + 0.02));
    ring.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(ring);

    // Dot (clickable)
    const dot = new THREE.Mesh(
      new THREE.CircleGeometry(size, 32),
      new THREE.MeshBasicMaterial({ color: hex, side: THREE.DoubleSide })
    );
    dot.position.copy(ll(lat, lng, R + 0.03));
    dot.lookAt(new THREE.Vector3(0, 0, 0));
    dot.userData = { country, groups, group: groups[0], color: hex };
    scene.add(dot);
    markers.push(dot);
  }
}

// ── Attack arcs ──────────────────────────────────────────────────
function buildArcs() {
  for (const a of arcs) scene.remove(a);
  arcs = []; arcPhases = [];

  for (const g of _groups) {
    const origin = _coords[g.country];
    if (!origin) continue;
    const oLat = Array.isArray(origin) ? origin[0] : origin.lat;
    const oLng = Array.isArray(origin) ? origin[1] : origin.lng;
    const hex  = parseInt((_colors[g.country] || '#4da6e8').replace('#', ''), 16);

    for (const target of (g.targets || []).slice(0, 3)) {
      const dest = _coords[target];
      if (!dest) continue;
      const dLat = Array.isArray(dest) ? dest[0] : dest.lat;
      const dLng = Array.isArray(dest) ? dest[1] : dest.lng;

      const from = ll(oLat, oLng, R + 0.05);
      const to   = ll(dLat, dLng, R + 0.05);
      const mid  = from.clone().add(to).multiplyScalar(0.5)
                       .normalize().multiplyScalar(R + 1.5 + Math.random());

      const curve  = new THREE.QuadraticBezierCurve3(from, mid, to);
      const geo    = new THREE.BufferGeometry().setFromPoints(curve.getPoints(48));
      const mat    = new THREE.LineBasicMaterial({ color: hex, transparent: true, opacity: 0 });
      const arc    = new THREE.Line(geo, mat);
      scene.add(arc);
      arcs.push(arc);
      arcPhases.push(Math.random() * Math.PI * 2);
    }
  }
}

// ── Animation loop ───────────────────────────────────────────────
function animate(firstFrame) {
  requestAnimationFrame(() => animate(false));
  const t = performance.now() * 0.001;

  // Notify app.js that globe is ready (hides loading screen)
  if (firstFrame) _onReady();

  // Pulse arcs
  arcs.forEach((arc, i) => {
    arc.material.opacity = 0.12 + 0.1 * Math.sin(t * 1.4 + arcPhases[i]);
  });

  // Hover detection
  if (ray && mouse) {
    ray.setFromCamera(mouse, camera);
    const hits = ray.intersectObjects(markers, false);

    if (hovered && (!hits.length || hits[0].object !== hovered)) {
      hovered.scale.set(1, 1, 1);
      hovered = null;
      document.getElementById('tooltip').className = '';
      renderer.domElement.style.cursor = 'default';
    }

    if (hits.length) {
      const m = hits[0].object;
      if (m !== hovered) {
        hovered = m;
        m.scale.set(1.6, 1.6, 1.6);
        renderer.domElement.style.cursor = 'pointer';
        const { country, groups } = m.userData;
        const colHex = (_colors[country] || '#4da6e8').replace('#', '');
        const tip = document.getElementById('tooltip');
        tip.className = 'on';
        tip.innerHTML = `
          <div class="tt-name" style="color:#${colHex}">${country}</div>
          <div class="tt-sub">${groups.length} group${groups.length > 1 ? 's' : ''} · ${groups.map(g => g.name).join(', ')}</div>
          <div class="tt-hint">Click to open dossier</div>`;
      }
      // Track tooltip to cursor
      const rect = renderer.domElement.getBoundingClientRect();
      const sx   = (mouse.x + 1) / 2 * rect.width  + rect.left;
      const sy   = (1 - (mouse.y + 1) / 2) * rect.height + rect.top;
      const tip  = document.getElementById('tooltip');
      tip.style.left = (sx + 16) + 'px';
      tip.style.top  = (sy - 10) + 'px';
    }
  }

  controls.update();
  renderer.render(scene, camera);
}

// ── Resize ───────────────────────────────────────────────────────
function onResize() {
  const container = renderer.domElement.parentElement;
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}
