import fs from 'node:fs';
import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

const tower = new THREE.Group();
const material = new THREE.MeshStandardMaterial({
  color: 0xefece7,
  metalness: 0.18,
  roughness: 0.72,
});

const base = new THREE.Mesh(new THREE.CylinderGeometry(0.92, 1.06, 0.32, 32), material);
base.position.y = 0.18;
tower.add(base);

const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.38, 0.9, 20), material);
stem.position.y = 0.75;
tower.add(stem);

const body = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.9, 1.2, 28), material);
body.position.y = 1.52;
tower.add(body);

const battlements = new THREE.Group();
for (let i = 0; i < 4; i += 1) {
  const block = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.22, 0.24), material);
  const angle = (i / 4) * Math.PI * 2;
  block.position.set(Math.cos(angle) * 0.46, 2.35, Math.sin(angle) * 0.46);
  battlements.add(block);
}
tower.add(battlements);

const top = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.62, 0.42, 24), material);
top.position.y = 2.18;
tower.add(top);

const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.48, 0.22, 18), material);
crown.position.y = 2.65;
tower.add(crown);

const exporter = new GLTFExporter();
const result = await exporter.parseAsync(tower, { binary: true });

const buffer = result instanceof ArrayBuffer ? Buffer.from(result) : Buffer.from(result);
fs.writeFileSync('public/torre.glb', buffer);
console.log(`saved public/torre.glb (${buffer.length} bytes)`);
