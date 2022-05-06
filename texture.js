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

const metalness = textureLoader.load(
  'https://raw.githubusercontent.com/huymach91/3D-Practice/master/images/door/metalness.jpg'
);

const roughness = textureLoader.load(
  'https://raw.githubusercontent.com/huymach91/3D-Practice/master/images/door/roughness.jpg'
);

const doorHeight = textureLoader.load(
  'https://raw.githubusercontent.com/huymach91/3D-Practice/master/images/door/height.jpg'
);

const wallColor = textureLoader.load(
  'https://raw.githubusercontent.com/huymach91/3D-Practice/master/images/bricks/color.jpg'
);

export const doorTexture = door;
export const doorAmbientOcclusionTexture = doorAmbientOcclusion;
export const doorAlphaTexture = doorAlpha;
export const doorNormalTexture = doorNormal;
export const metalnessTexture = metalness;
export const roughnessTexture = roughness;
export const doorHeightTexture = doorHeight;
export const wallColorTexture = wallColor;
