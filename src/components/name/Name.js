import { useTexture } from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Name(props) {
  const { nodes } = useLoader(GLTFLoader, "../models/name/name.glb");
  const [nomal, roughness, ao, color] = useLoader(TextureLoader, [
    "/textures/name/coral_fort_wall_01_nor_gl_1k.jpeg",
    "/textures/name/coral_fort_wall_01_rough_1k.jpeg",
    "/textures/name/coral_fort_wall_01_ao_1k.jpeg",
    "/textures/name/coral_fort_wall_01_diff_1k.jpeg",
  ]);

  const matcap = useTexture("../../textures/concrete.png");
  return (
    <>
      <mesh
        {...props}
        geometry={nodes.텍스트.geometry}
        rotation-x={Math.PI * 0.5}
        castShadow
        receiveShadow
        position={[-2.5, -0.8, 0]}
      >
        <meshStandardMaterial color={"#fff"} shininess={11} />
      </mesh>
      ;
    </>
  );
}
