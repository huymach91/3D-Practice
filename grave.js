import * as THREE from 'three';

const boxGeometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshStandardMaterial();

const graves = [];

for (var i = 1; i < 30; i++) {
  const angle = Math.random() * Math.PI * 2;
  const x = Math.sin(angle);
  const y = Math.cos(angle);

  const graveMesh = new THREE.Mesh(boxGeometry, material);
  graveMesh.position.x = x;
  graveMesh.position.y = 2;
  graveMesh.scale.set(0.5, 0.5, 0.5);

  graves.push(graveMesh);
}

export const graveList = graves;
