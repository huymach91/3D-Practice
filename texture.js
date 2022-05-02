import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();

const door = textureLoader.load(
  'https://raw.githubusercontent.com/huymach91/3D-Practice/master/images/door/color.jpg'
);
const doorAmbientOcclusion = textureLoader.load(
  'https://raw.githubusercontent.com/huymach91/3D-Practice/master/images/door/ambientOcclusion.jpg'
);

const doorAlpha = textureLoader.load(
  'https://raw.githubusercontent.com/huymach91/3D-Practice/master/images/door/alpha.jpg'
);

const doorNormal = textureLoader.load(
  'https://raw.githubusercontent.com/huymach91/3D-Practice/master/images/door/normal.jpg'
);

export const doorTexture = door;
export const doorAmbientOcclusionTexture = doorAmbientOcclusion;
export const doorAlphaTexture = doorAlpha;
export const doorNormalTexture = doorNormal;
