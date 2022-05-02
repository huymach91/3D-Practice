import * as THREE from 'three';

const sphereGeometry = new THREE.SphereGeometry();
const material = new THREE.MeshStandardMaterial({
  color: '#89c854',
});
const bush1 = new THREE.Mesh(sphereGeometry, material);

bush1.scale.set(0.5, 0.5, 0.5);
bush1.position.set(1, -0.5, 2.2);

const bush2 = new THREE.Mesh(sphereGeometry, material);
bush2.scale.set(0.15, 0.15, 0.15);
bush2.position.set(1.5, -0.3, 2.2);

const bush3 = new THREE.Mesh(sphereGeometry, material);
bush3.scale.set(0.4, 0.4, 0.4);
bush3.position.set(-0.8, -0.3, 2.2);

const bush4 = new THREE.Mesh(sphereGeometry, material);
bush4.scale.set(0.15, 0.15, 0.15);
bush4.position.set(-1.2, -0.3, 2.4);

export const bush1 = bush1;
export const bush2 = bush2;
export const bush3 = bush3;
export const bush4 = bush4;
