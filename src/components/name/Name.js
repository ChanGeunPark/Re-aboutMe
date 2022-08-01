import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Name(props) {
  const { nodes } = useLoader(GLTFLoader, "../models/name/name.glb");

  const matcap = useTexture("../../textures/concrete.png");

  return (
    <>
      <mesh
        {...props}
        geometry={nodes.텍스트.geometry}
        rotation-x={Math.PI * 0.3}
        castShadow
        receiveShadow
        position={[-0.9, 1.4, 1.3]}
      >
        <meshStandardMaterial color={"#fff"} shininess={11} />
      </mesh>
      ;
    </>
  );
}
