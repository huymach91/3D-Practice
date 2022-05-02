import * as THREE from 'three';

const sphereGeometry = new THREE.SphereGeometry();
const material = new THREE.MeshBasicMaterial({
  color: '#89c854',
});
const mesh = new THREE.Mesh(sphereGeometry, material);

mesh.scale.set(0.5, 0.5, 0.5);
mesh.position.set(1.3, -0.5, 2.2);

export const bush = mesh;
