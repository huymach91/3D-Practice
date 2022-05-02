// Coordinate Systems: https://learnopengl.com/Getting-started/Coordinate-Systems
// Linear Algebra: https://www.khanacademy.org/math/linear-algebra

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'lil-gui';

const size = {
  width: 1200,
  height: 800,
};

// scene
const scene = new THREE.Scene();
const canvas = document.getElementById('canvas');

// material
const basicMaterial = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
});

// object
const planeGeometry = new THREE.PlaneGeometry(1, 1);
const plane = new THREE.Mesh(planeGeometry, basicMaterial);
plane.position.set(0, 0, 0);
plane.rotation.x = -Math.PI;
plane.rotation.y = Math.PI;

// ambient light
const ambientLight = new THREE.AmbientLight();

// camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 5;
camera.lookAt(plane.position);

// controls
const orbitControl = new OrbitControls(camera, canvas);

// camera helper
const axisHelper = new THREE.AxesHelper();

// add to scene
scene.add(plane, camera, ambientLight, axisHelper);

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);

// animate
const tick = () => {
  orbitControl.update();
  window.requestAnimationFrame(tick);
  renderer.render(scene, camera);
};

tick();
