import { useTexture } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useRef } from "react";

export function Caractor(props) {
  const gltf = useLoader(GLTFLoader, "../models/cosmonaut_morse/scene.gltf");
  gltf.scene.scale.set(3, 3, 3);

  gltf.scene.castShadow = true;
  gltf.scene.receiveShadow = true;
  const ref = useRef(null);
  const vec = new THREE.Vector3();

  return (
    <>
      <primitive object={gltf.scene} ref={ref} />
    </>
  );
}
