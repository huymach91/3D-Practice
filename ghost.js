import * as THREE from 'three';
import gsap from 'gsap';

const ghost = new THREE.PointLight(0xffffff, 0.85, 50);
ghost.position.set(1, 1, 6);

gsap.to(ghost.position, {
  duration: 1,
  delay: 1,
  y: 5,
  yoyo: true,
  repeat: -1,
});

export default ghost;
