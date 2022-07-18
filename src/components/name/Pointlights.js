import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { usePlane, Physics, useSphere } from "@react-three/cannon";

export function PointLights() {
  return (
    <>
      <directionalLight
        position={[-1, 4, 6]}
        color={"#ffffff"}
        intensity={0.5}
        shadows
      />

      <pointLight
        position={[3.2, 3.5, 0]}
        color={0xffffff}
        intensity={0.5}
        distance={4}
      />
      <mesh position={[3.2, 3.5, 0]}>
        <sphereGeometry args={[0.2, 32, 16]} />
        <meshBasicMaterial color={"#FFEFEF"} />
      </mesh>
    </>
  );
}
