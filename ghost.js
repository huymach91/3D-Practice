import * as THREE from 'three';

const ghost = new THREE.PointLight('#ff00ff', 2, 3);
ghost.position.set(0, 1, 0);

export default ghost;
