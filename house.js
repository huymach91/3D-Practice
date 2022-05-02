import * as THREE from 'three';

// material
const material = new THREE.MeshBasicMaterial({
  color: 0xffffff,
});

const boxGeometry = new THREE.BoxGeometry();

export const wall = new THREE.Mesh(boxGeometry, material);
