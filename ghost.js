import * as THREE from 'three';

const ghost = new THREE.PointLight(0xffffff, 0.85, 50);
ghost.position.set(0, 0, 0);

export default ghost;
