import { useTexture } from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Name(props) {
  const { nodes } = useLoader(GLTFLoader, "../models/name/name.glb");
  console.log(nodes.텍스트.geometry);
  const matcap = useTexture("../../textures/concrete.png");
  return (
    <>
      <mesh
        {...props}
        geometry={nodes.텍스트.geometry}
        rotation-x={Math.PI * 0.5}
        castShadow
        receiveShadow
        position={[-1, 0, 0]}
      >
        <meshPhongMaterial color={"#5b5454"} shininess={11} />
      </mesh>
      ;
    </>
  );
}
