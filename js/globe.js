// ─────────────────────────────────────────────────────────────────
// globe.js — ThreatOrbit Three.js globe engine
// ─────────────────────────────────────────────────────────────────

import * as THREE        from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const R = 5;
let _groups, _coords, _colors, _onGroupClick;
let scene, camera, renderer, controls;
let markers   = [];
let arcs      = [];
let arcPhases = [];
let hovered   = null;
let ray, mouse;

// HTML label overlay — div elements projected onto 3D coords each frame
let labelWrap = null;
let labels    = [];   // [{el, lat, lng}]

// ── lat/lng → Vector3 ────────────────────────────────────────────
function ll(lat, lng, r) {
  const phi = (90 - lat) * Math.PI / 180;
  const th  = (lng + 180) * Math.PI / 180;
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(th),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(th)
  );
}

function coord(c) {
  if (!c) return null;
  return Array.isArray(c) ? { lat: c[0], lng: c[1] } : { lat: c.lat, lng: c.lng };
}

// ── PUBLIC: initGlobe ─────────────────────────────────────────────
export function initGlobe(groups, coords, colors, onGroupClick) {
  _groups       = groups;
  _coords       = coords;
  _colors       = colors;
  _onGroupClick = onGroupClick;

  ray   = new THREE.Raycaster();
  mouse = new THREE.Vector2(-9999, -9999);

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
  controls.enableDamping   = true;
  controls.dampingFactor   = 0.06;
  controls.minDistance     = 7;
  controls.maxDistance     = 22;
  controls.autoRotate      = true;
  controls.autoRotateSpeed = 0.4;

  // ── Label overlay div ─────────────────────────────────────────
  labelWrap = document.createElement('div');
  labelWrap.style.cssText =
    'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;';
  container.appendChild(labelWrap);

  buildStars();
  buildGlobe();
  buildMarkers();
  buildArcs();

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
    mouse.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
  });
  canvas.addEventListener('mouseleave', () => mouse.set(-9999, -9999));
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

// ── PUBLIC: updateGlobe ───────────────────────────────────────────
export function updateGlobe(filteredGroups) {
  _groups = filteredGroups;
  buildMarkers();
  buildArcs();
}

// ─────────────────────────────────────────────────────────────────
// Scene builders
// ─────────────────────────────────────────────────────────────────

function buildStars() {
  const pos = [];
  for (let i = 0; i < 4000; i++) {
    const r   = 80 + Math.random() * 120;
    const phi = Math.acos(2 * Math.random() - 1);
    const th  = Math.random() * Math.PI * 2;
    pos.push(r * Math.sin(phi) * Math.cos(th), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(th));
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  scene.add(new THREE.Points(geo,
    new THREE.PointsMaterial({ color: 0xc0d8f8, size: 0.18, transparent: true, opacity: 0.7 })
  ));
}

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

function buildMarkers() {
  // Remove old markers
  markers.forEach(m => scene.remove(m));
  markers = [];

  // Clear old labels
  labels.forEach(lb => lb.el.remove());
  labels = [];

  const byCountry = {};
  for (const g of _groups) {
    (byCountry[g.country] = byCountry[g.country] || []).push(g);
  }

  const ZERO = new THREE.Vector3(0, 0, 0);

  for (const [country, grps] of Object.entries(byCountry)) {
    const c = coord(_coords[country]);
    if (!c) continue;

    const col  = _colors[country] || '#4da6e8';
    const hex  = parseInt(col.replace('#', ''), 16);
    const size = 0.1 + grps.length * 0.04;

    // Glow ring
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(size + 0.05, size + 0.18, 32),
      new THREE.MeshBasicMaterial({ color: hex, transparent: true, opacity: 0.28, side: THREE.DoubleSide })
    );
    ring.position.copy(ll(c.lat, c.lng, R + 0.02));
    ring.lookAt(ZERO);
    scene.add(ring);

    // Dot
    const dot = new THREE.Mesh(
      new THREE.CircleGeometry(size, 32),
      new THREE.MeshBasicMaterial({ color: hex, side: THREE.DoubleSide })
    );
    dot.position.copy(ll(c.lat, c.lng, R + 0.03));
    dot.lookAt(ZERO);
    dot.userData = { country, groups: grps, group: grps[0] };
    scene.add(dot);
    markers.push(dot);

    // ── HTML label ──────────────────────────────────────────────
    const el = document.createElement('div');
    el.style.cssText = [
      'position:absolute',
      `font-family:'IBM Plex Mono',monospace`,
      'font-size:9px',
      'font-weight:700',
      `color:${col}`,
      `text-shadow:0 0 8px ${col}55,0 1px 3px rgba(0,0,0,.9)`,
      'white-space:nowrap',
      'pointer-events:none',
      'transform:translate(-50%,-200%)',
      'opacity:0',
      'transition:opacity .25s',
      'letter-spacing:.1em',
      'text-transform:uppercase',
    ].join(';');
    const shortName = country.split(' (')[0].split('/')[0].trim();
    el.textContent = `${shortName} [${grps.length}]`;
    labelWrap.appendChild(el);
    labels.push({ el, lat: c.lat, lng: c.lng });
  }
}

function buildArcs() {
  arcs.forEach(a => scene.remove(a));
  arcs = [];
  arcPhases = [];

  for (const g of _groups) {
    const oc = coord(_coords[g.country]);
    if (!oc) continue;
    const hex = parseInt((_colors[g.country] || '#4da6e8').replace('#', ''), 16);

    for (const target of (g.targets || []).slice(0, 3)) {
      const dc = coord(_coords[target]);
      if (!dc) continue;

      const from = ll(oc.lat, oc.lng, R + 0.05);
      const to   = ll(dc.lat, dc.lng, R + 0.05);
      const mid  = from.clone().add(to).multiplyScalar(0.5)
                       .normalize().multiplyScalar(R + 1.5 + Math.random() * 0.8);

      const geo = new THREE.BufferGeometry().setFromPoints(
        new THREE.QuadraticBezierCurve3(from, mid, to).getPoints(48)
      );
      const mat = new THREE.LineBasicMaterial({ color: hex, transparent: true, opacity: 0 });
      const arc = new THREE.Line(geo, mat);
      scene.add(arc);
      arcs.push(arc);
      arcPhases.push(Math.random() * Math.PI * 2);
    }
  }
}

// ─────────────────────────────────────────────────────────────────
// Render loop
// ─────────────────────────────────────────────────────────────────

function animate() {
  requestAnimationFrame(animate);
  const t = performance.now() * 0.001;

  // Pulse arcs
  arcs.forEach((arc, i) => {
    arc.material.opacity = 0.12 + 0.1 * Math.sin(t * 1.4 + arcPhases[i]);
  });

  // ── Project labels onto screen ───────────────────────────────
  if (labelWrap) {
    const W = renderer.domElement.clientWidth;
    const H = renderer.domElement.clientHeight;
    for (const lb of labels) {
      const pos3d = ll(lb.lat, lb.lng, R + 0.4);
      const proj  = pos3d.clone().project(camera);
      // z < 1 means facing camera (not on far side of globe)
      const visible = proj.z < 1;
      lb.el.style.opacity  = visible ? '0.85' : '0';
      lb.el.style.left     = ((proj.x *  0.5 + 0.5) * W) + 'px';
      lb.el.style.top      = ((proj.y * -0.5 + 0.5) * H) + 'px';
    }
  }

  // ── Hover raycasting ─────────────────────────────────────────
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
      const col = (_colors[country] || '#4da6e8').replace('#', '');
      const tip = document.getElementById('tooltip');
      tip.className = 'on';
      tip.innerHTML =
        `<div class="tt-name" style="color:#${col}">${country}</div>` +
        `<div class="tt-sub">${groups.length} group${groups.length > 1 ? 's' : ''} · ` +
        `${groups.map(g => g.name).join(', ')}</div>` +
        `<div class="tt-hint">Click to open dossier</div>`;
    }
    const rect = renderer.domElement.getBoundingClientRect();
    const tip  = document.getElementById('tooltip');
    tip.style.left = ((mouse.x + 1) / 2 * rect.width  + rect.left + 16) + 'px';
    tip.style.top  = ((1 - (mouse.y + 1) / 2) * rect.height + rect.top - 10) + 'px';
  }

  controls.update();
  renderer.render(scene, camera);
}

function onResize() {
  const c = renderer.domElement.parentElement;
  camera.aspect = c.clientWidth / c.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(c.clientWidth, c.clientHeight);
}
