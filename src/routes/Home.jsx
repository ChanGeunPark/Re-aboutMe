import { Canvas, useThree } from "@react-three/fiber";
import { usePlane, Physics, useCompoundBody } from "@react-three/cannon";
import { Suspense } from "react";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Block } from "../helpers/Block";
import { Table } from "../components/Object";

function Floor(props) {
  const [ref] = usePlane(() => ({ type: "Static", ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        //모든 메시에 반사 및/또는 흐림 효과를 쉽게 추가할 수 있습니다. 보다 사실적인 효과를 위해 표면 거칠기를 고려합니다.
        color="#878790"
        blur={[400, 400]}
        resolution={1024} //프레임
        mixBlur={1}
        mixStrength={3}
        depthScale={1}
        minDepthThreshold={0.85}
        metalness={0}
        roughness={1}
      />
    </mesh>
  );
}

// export function table(props) {
//   const [table] = useCompoundBody;

//   return <group></group>;
// }

export default function Home() {
  return (
    <Suspense fallback={null}>
      <div className="w-full h-screen bg-zinc-700">
        <Canvas
          dpr={[1, 2]}
          shadows
          camera={{ position: [0, 0, 20], fov: 75, near: 1, far: 1000 }}
        >
          <ambientLight intensity={0.2} />
          <pointLight position={[-20, -5, -20]} color={"blue"} />
          <Physics allowSleep={false} iterations={15} gravity={[0, -200, 0]}>
            <Table position={[0, 2, 0]} />
            {/* <Caption>{`박찬근`}</Caption> */}
            <Floor position={[0, -2.25, 0]} rotation={[-Math.PI * 0.5, 0, 0]} />
          </Physics>
        </Canvas>
      </div>
    </Suspense>
  );
}
