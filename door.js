import * as THREE from 'three';
import { doorTexture } from './texture';
import { doorAmbientOcclusionTexture } from './texture';
import { doorAlphaTexture } from './texture';
import { doorNormalTexture } from './texture';

const planeGeometry = new THREE.PlaneGeometry(1.5, 2.3, 1.5);
const material = new THREE.MeshStandardMaterial({
  map: doorTexture,
  color: 'aa7b7b',
  aoMap: doorAmbientOcclusionTexture,
  alphaMap: doorAlphaTexture,
  transparent: true,
  normalMap: doorNormalTexture,
});
const mesh = new THREE.Mesh(planeGeometry, material);
mesh.position.y = 0.54;
mesh.position.z = 2 + 0.01;

mesh.scale.x = 1.5;
mesh.scale.y = 1.2;

mesh.geometry.setAttribute(
  'uv2',
  new THREE.Float32BufferAttribute(mesh.geometry.attributes.uv.array, 2)
);

export const door = mesh;
