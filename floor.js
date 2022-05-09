import * as THREE from 'three';
import { grassColorTexture, grassNormalTexture } from './texture';

const basicMaterial = new THREE.MeshStandardMaterial({
  map: grassColorTexture,
  normalMap: grassNormalTexture,
});

const planeGeometry = new THREE.PlaneGeometry(15, 15);
const plane = new THREE.Mesh(planeGeometry, basicMaterial);
plane.position.set(0, 0, 0);

plane.rotation.x = -Math.PI * 0.5;
plane.position.y = -0.5;

grassColorTexture.repeat.set(8, 8);
grassColorTexture.wrapS = THREE.RepeatWrapping;
grassColorTexture.wrapT = THREE.RepeatWrapping;

export const floor = plane;
