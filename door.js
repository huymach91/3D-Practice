import * as THREE from 'three';
import { doorTexture } from './texture';

const planeGeometry = new THREE.PlaneGeometry(1.5, 2.3, 1.5);
const material = new THREE.MeshBasicMaterial({
  map: doorTexture,
  color: 'aa7b7b',
});
const mesh = new THREE.Mesh(planeGeometry, material);
mesh.position.y = 0.6;
mesh.position.z = 2 + 0.01;

export const door = mesh;
