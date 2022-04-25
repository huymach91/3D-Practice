// Coordinate Systems: https://learnopengl.com/Getting-started/Coordinate-Systems
// Linear Algebra: https://www.khanacademy.org/math/linear-algebra

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'lil-gui';

const gui = new dat.GUI();

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// scene
const scene = new THREE.Scene();
// axis helper
const axisHelper = new THREE.AxesHelper();
// texture
const textureLoader = new THREE.TextureLoader();
const simpleShadow = textureLoader.load(
  'https://raw.githubusercontent.com/huymach91/3D-Practice/master/images/simpleShadow.jpg'
);

// objects
const material = new THREE.MeshStandardMaterial();
// material.roughness = 0.7;

const sphere = new THREE.Mesh(new THREE.SphereGeometry(1), material);
sphere.position.y = 0.5;
sphere.castShadow = true;

const torus = new THREE.Mesh(new THREE.TorusGeometry(1), material);
torus.position.y = 0.5;
torus.position.x = 4;
torus.castShadow = true;

const plane = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), material);
plane.rotation.x = -Math.PI * 0.5;
plane.position.y = -0.5;
plane.receiveShadow = true;

scene.add(sphere, plane, torus);

// lights

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
ambientLight.position.x = 1;

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.y = 4;
directionalLight.position.x = 10;
directionalLight.position.z = 5;

directionalLight.castShadow = true;

directionalLight.shadow.camera.near = 5;
directionalLight.shadow.camera.far = 20;
directionalLight.shadow.mapSize.width = 500;
directionalLight.shadow.mapSize.height = 500;

gui.add(directionalLight.shadow.camera, 'near').min(0).max(10).step(1);

// scene.add(spotLight);
scene.add(ambientLight);
scene.add(directionalLight);

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.y = 5;
camera.position.x = 1;
camera.position.z = 20;

scene.add(camera);
scene.add(new THREE.CameraHelper(directionalLight.shadow.camera));

// canvas
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setClearColor(0x000000, 1);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

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
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(stick);
};

stick();

gui.add(material, 'metalness').min(0).max(1).step(0.0001);
gui.add(material, 'roughness').min(0).max(1).step(0.0001);
gui.add(material, 'aoMapIntensity').min(0).max(1).step(0.1);
