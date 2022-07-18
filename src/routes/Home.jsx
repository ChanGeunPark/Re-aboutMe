import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { usePlane, Physics, useSphere, useBox } from "@react-three/cannon";
import { Suspense, useEffect } from "react";
import { Sky, useTexture } from "@react-three/drei";
import { useControls } from "leva";
import { Name } from "../components/name/Name";
import { Ground } from "../components/car/Ground";

const rfs = THREE.MathUtils.randFloatSpread; //여러 수학 유틸리티 기능이 있는 개체입니다. [- 범위 /2, 범위 /2] random
const sphereGeometry = new THREE.BoxGeometry(1, 1, 1);
const baubleMaterial = new THREE.MeshStandardMaterial({
  color: "purple",
  roughness: 0.5,
  envMapIntensity: 0.2,
  emissive: "#370037",
});

export default function Home() {
  return (
    <Suspense fallback={null}>
      <div className="w-full h-screen bg-zinc-800">
        <Canvas
          shadows
          dpr={[1, 2]} //Canvas 크기와 화면에 표시(디스플레이) 되는 크기는 다르며, 디스플레이 크기는 DPR의 영향을 받는다
          camera={{ position: [0, 0, 20], fov: 35, near: 10, far: 40 }}
        >
          <ambientLight intensity={0.24} />
          <spotLight
            intensity={1}
            angle={0.2}
            penumbra={1} // 스포트라이트의 원뿔의 백분율 0과 1사이값
            position={[30, 30, 30]}
            castShadow
            shadow-mapSize={[512, 512]} // 얼마나 그림자를 줄건지 작성해줘야한다.
          />
          <directionalLight
            intensity={0.2}
            position={[-10, -10, -10]}
            color="white"
          />
          <Physics>
            <Clump />
            <Pointer />
          </Physics>
        </Canvas>
      </div>
    </Suspense>
  );
}

function Pointer() {
  const viewport = useThree((state) => state.viewport);

  const [, api] = useSphere(() => ({
    type: "Kinematic",
    args: [3],
    color: ["#fff"],
    position: [0, 0, 0],
  }));

  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2, // 마우스 whith 위치
      (state.mouse.y * viewport.height) / 2, // 마우스 height 위치
      0
    )
  );
}

function Clump({
  mat = new THREE.Matrix4(),
  vec = new THREE.Vector3(),
  ...props
}) {
  const texture = useTexture("/textures/cross.jpg");
  const [ref, api] = useBox(() => ({
    //args: [1], // 중력을 적용할 오브젝트의 크기
    mass: 1, // 중력을 얼마나 적용할건지
    angularDamping: 0.1,
    linearDamping: 0.65, //슬로우
    position: [rfs(20), rfs(20), rfs(20)], //20 / 2 의 랜덤의 숫자
  }));
  useFrame((state) => {
    for (let i = 0; i < 40; i++) {
      // Get current whereabouts of the instanced sphere
      ref.current.getMatrixAt(i, mat);
      // Normalize the position and multiply by a negative force.
      // This is enough to drive it towards the center-point.
      api
        .at(i)
        .applyForce(
          vec
            .setFromMatrixPosition(mat)
            .normalize()
            .multiplyScalar(-50)
            .toArray(),
          [0, 0, 0]
        );
    }
  });
  return (
    <instancedMesh //threejs의 메쉬랑 마테리얼을 가져올 수 있다.
      ref={ref}
      castShadow
      receiveShadow
      args={[null, null, 40]}
      geometry={sphereGeometry}
      material={baubleMaterial}
      material-map={texture}
    />
  );
}
