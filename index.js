// Coordinate Systems: https://learnopengl.com/Getting-started/Coordinate-Systems
// Linear Algebra: https://www.khanacademy.org/math/linear-algebra

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

const sizes = {
  width: 800,
  height: 600,
};

// scene
const scene = new THREE.Scene();
// axis helper
const axisHelper = new THREE.AxesHelper();
scene.add(axisHelper);
// texture
const textureLoader = new THREE.TextureLoader();
const textureDoor = textureLoader.load(
  'https://raw.githubusercontent.com/huymach91/3D-Practice/master/images/color.jpg'
);

// objects
const geometry = new THREE.BoxGeometry(1, 1, 1);
const sphereGeometry = new THREE.SphereBufferGeometry(0.5, 10, 10);
// const material = new THREE.MeshBasicMaterial({
//   color: 0x00ff00,
//   map: textureDoor,
// });
const material = new THREE.MeshNormalMaterial({
  color: 0x00ff00,
  map: textureDoor,
  flatShading: true,
});
const cube = new THREE.Mesh(geometry, material);
cube.scale.x = 0.5;
const sphere = new THREE.Mesh(sphereGeometry, material);
sphere.position.x = 1.5;

scene.add(cube, sphere);

// tween

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 100);
camera.position.y = 0;
camera.position.x = 1;
camera.position.z = 3;

scene.add(camera);

// canvas
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, canvas);

window.addEventListener('dblclick', () => {
  if (!document.fullscreenElement) {
    canvas.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

const clock = new THREE.Clock();

const stick = () => {
  // camera.lookAt(cube.position);
  const elapsedTime = clock.getElapsedTime();
  sphere.rotation.y = 0.5 * elapsedTime;
  cube.rotation.y = 0.5 * elapsedTime;

  renderer.render(scene, camera);
  window.requestAnimationFrame(stick);
};

stick();
