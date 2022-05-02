import * as THREE from 'three';

const boxGeometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshStandardMaterial();
const graveMesh = new THREE.Mesh(boxGeometry, material);
graveMesh.scale.set(0.5, 0.5, 0.1);
graveMesh.position.z = 4;

export const grave = graveMesh;
