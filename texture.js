import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();

const door = textureLoader.load(
  'https://raw.githubusercontent.com/huymach91/3D-Practice/master/images/door/color.jpg'
);


export const doorTexture = door;
