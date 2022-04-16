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
const textureMatcap = textureLoader.load(
  'https://raw.githubusercontent.com/huymach91/3D-Practice/master/images/matcaps/1.png'
);
const gradientTexture = textureLoader.load(
  'https://raw.githubusercontent.com/huymach91/3D-Practice/master/images/gradients/5.jpg'
);

// objects
const geometry = new THREE.BoxGeometry(1, 1, 1);
const sphereGeometry = new THREE.SphereBufferGeometry(0.5, 10, 10);
const torusGeometry = new THREE.TorusBufferGeometry(0.3, 0.2, 16, 32);
// const material = new THREE.MeshBasicMaterial({
//   color: 0x00ff00,
//   map: textureDoor,
// });
gradientTexture.minFilter = THREE.NearestFilter;
gradientTexture.magFilter = THREE.NearestFilter;
gradientTexture.generateMipmaps = false;

const material = new THREE.MeshToonMaterial();
material.gradientMap = gradientTexture;

const basicMaterial = new THREE.MeshBasicMaterial();
// material.matcap = textureMatcap;
// material.shininess = 100;
// material.specular = new THREE.Color(0x1188ff);
material.color = new THREE.Color(0xffffff);

// const material = new THREE.MeshLambertMaterial({
//   // color: 0x00ff00,
//   // map: textureDoor,
//   // flatShading: true,
// });

const cube = new THREE.Mesh(geometry, material);
cube.scale.x = 0.5;
const sphere = new THREE.Mesh(sphereGeometry, material);
sphere.position.x = 2.5;
const torus = new THREE.Mesh(torusGeometry, basicMaterial);
torus.position.x = 1.2;

scene.add(torus);
scene.add(cube, sphere);

// lights
const pointLight = new THREE.PointLight(0xffffff, 2);
pointLight.position.x = 1;
pointLight.position.z = 1.5;

const ambientLight = new THREE.AmbientLight(0xffffff, 2);
ambientLight.position.x = 1;

scene.add(ambientLight);
// scene.add(pointLight);

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
renderer.setClearColor(0x000000, 1);
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
  torus.rotation.y = 0.5 * elapsedTime;

  // sphere.position.x = Math.sin(elapsedTime / 2) * 2;
  // sphere.position.y = Math.cos(elapsedTime / 2) * 2;

  renderer.render(scene, camera);
  window.requestAnimationFrame(stick);
};

stick();
