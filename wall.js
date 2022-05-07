import * as THREE from 'three';
import {
  wallColorTexture,
  wallAmbientOcclusion,
  wallNormalMapTexture,
  wallRoughnessTexture,
} from './texture';

// material
const material = new THREE.MeshStandardMaterial({
  color: '#ac8e82',
  map: wallColorTexture,
  aoMap: wallAmbientOcclusion,
  normalMap: wallNormalMapTexture,
  roughnessMap: wallRoughnessTexture,
});

const boxGeometry = new THREE.BoxGeometry(4, 2.5, 4);

const mesh = new THREE.Mesh(boxGeometry, material);
mesh.geometry.setAttribute(
  'uv2',
  new THREE.Float32BufferAttribute(mesh.geometry.attributes.uv.array, 2)
);
mesh.position.y = 0.5;

export const wall = mesh;
