import * as THREE from 'three';

// material
const material = new THREE.MeshBasicMaterial({
  color: '#ac8e82',
});

const boxGeometry = new THREE.BoxGeometry(4, 2.5, 4);

const mesh = new THREE.Mesh(boxGeometry, material);
mesh.position.y = 0.5;


export const wall = mesh;
