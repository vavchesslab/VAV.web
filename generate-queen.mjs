import fs from 'node:fs';
import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

globalThis.FileReader = class {
  constructor() {
    this.result = null;
    this.onload = null;
    this.onerror = null;
  }

  readAsArrayBuffer(blob) {
    blob.arrayBuffer()
      .then((arrayBuffer) => {
        this.result = arrayBuffer;
        this.onload?.({ target: this });
      })
      .catch((error) => this.onerror?.(error));
  }
};

const queen = new THREE.Group();
const material = new THREE.MeshStandardMaterial({
  color: 0xefece7,
  metalness: 0.18,
  roughness: 0.72,
});

const base = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.0, 0.35, 32), material);
base.position.y = 0.18;
queen.add(base);

const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.34, 0.85, 20), material);
stem.position.y = 0.75;
queen.add(stem);

const body = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.82, 1.28, 24), material);
body.position.y = 1.6;
queen.add(body);

const chest = new THREE.Mesh(
  new THREE.SphereGeometry(0.62, 28, 18, 0, Math.PI * 2, 0, Math.PI * 0.8),
  material,
);
chest.scale.set(1.1, 1.2, 1.1);
chest.position.y = 2.05;
queen.add(chest);

const collar = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.07, 12, 32), material);
collar.rotation.x = Math.PI / 2;
collar.position.y = 1.49;
queen.add(collar);

const crown = new THREE.Group();
for (let i = 0; i < 8; i += 1) {
  const spike = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.58, 16), material);
  const angle = (i / 8) * Math.PI * 2;
  spike.position.set(Math.cos(angle) * 0.42, 0.18, Math.sin(angle) * 0.42);
  spike.rotation.z = Math.PI;
  crown.add(spike);
}

const crownBase = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.72, 0.42, 24), material);
crownBase.position.y = 0.18;
const crownTop = new THREE.Mesh(new THREE.SphereGeometry(0.18, 20, 20), material);
crownTop.position.y = 0.54;
crown.add(crownBase, crownTop);
crown.position.y = 2.9;
queen.add(crown);

const orb = new THREE.Mesh(new THREE.SphereGeometry(0.17, 20, 20), material);
orb.position.y = 3.48;
queen.add(orb);

const exporter = new GLTFExporter();
exporter.parse(
  queen,
  (result) => {
    const buffer = result instanceof ArrayBuffer
      ? Buffer.from(result)
      : result instanceof Uint8Array
        ? Buffer.from(result)
        : Buffer.from(JSON.stringify(result));

    fs.writeFileSync('public/reina.glb', buffer);
    const stats = fs.statSync('public/reina.glb');
    console.log(`saved public/reina.glb (${stats.size} bytes)`);
  },
  (error) => {
    console.error('export error', error);
    process.exit(1);
  },
  { binary: true },
);
