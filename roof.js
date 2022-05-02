import * as THREE from 'three';

// material
const material = new THREE.MeshStandardMaterial({
  color: '#b35f45',
});

const coneGeometry = new THREE.ConeGeometry(4, 2.5, 4);

const mesh = new THREE.Mesh(coneGeometry, material);
mesh.position.y = 3;
mesh.rotation.y = Math.PI * 0.25;

export const roof = mesh;
