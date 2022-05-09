import * as THREE from 'three';

const basicMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
});

const planeGeometry = new THREE.PlaneGeometry(15, 15);
const plane = new THREE.Mesh(planeGeometry, basicMaterial);
plane.position.set(0, 0, 0);

plane.rotation.x = -Math.PI * 0.5;
plane.position.y = -0.5;

export const floor = plane;
