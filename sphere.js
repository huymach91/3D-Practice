import * as THREE from 'three';

const geometry = new THREE.SphereGeometry(0.2, 4, 4);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const sphere = new THREE.Mesh(geometry, material);
sphere.position.set(1, 1, 4);

export default sphere;
