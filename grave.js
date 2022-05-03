import * as THREE from 'three';

const boxGeometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshStandardMaterial();

const graves = [];

for (var i = 1; i < 30; i++) {
  const angle = Math.random() * Math.PI * 2;
  const radius = 1.2 * Math.random() * 6;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;

  const graveMesh = new THREE.Mesh(boxGeometry, material);
  graveMesh.position.set(x, -0.2, z);
  graveMesh.scale.set(0.6, 0.8, 0.2);

  graves.push(graveMesh);
}

export const graveList = graves;
