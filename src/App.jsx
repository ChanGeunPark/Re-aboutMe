import "./App.css";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Ground } from "./Ground";

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <color args={[0, 0, 0]} attach="background" />
      /**배경 */
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
      {/**
       * let spotlight = new SpotLight();
       * spotlight.intensity = 1.5;
       * spotlight.position.set(...)
       */}
      <spotLight
        color={[1, 0.24, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
    </>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      {/** 코드를 불로오는 동안 '기다릴 수 있고' 기다리는 동안 로딩 상태(스피너)를 선언적으로 지정할 수 있도록 suspense컴포넌트가 추가되었다.*/}
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
