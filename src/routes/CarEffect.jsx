import "../App.css";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Ring,
} from "@react-three/drei";
import { Car } from "../components/car/Car";
import { Rings } from "../components/car/Rings";
import { Ground } from "../components/car/Ground";
import { Boxes } from "../components/car/Boxes";
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing"; // 색수차와 효과 작성기
import { BlendFunction } from "postprocessing";
import { FloatingGrid } from "../components/car/FloatingGrid";

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <color args={[0, 0, 0]} attach="background" />
      {/**배경 */}

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
      <EffectComposer>
        <DepthOfField // 포커스를 맞춰서 줌 아웃할때 흐려지게 한다.
          focusDistance={0.0035} // 흐려지는 강도
          focalLength={0.01}
          bokehScale={3} // 얼마나 흐려지게 할건지
          height={480}
        />
        {/**후처리 효과를 래핑해야 한다 */}
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={0.5} // bloom intentity 얼마나 강렬하게 할건가
          width={300} // 렌더 width 얼마나 많이 렌더링을 할건가
          height={300} // 렌더 height
          kernelSize={5} // 흐림 커널 크기 빛이 얼마나 퍼질지
          luminanceThreshold={0.15} //휘도 임계값. 장면을 더 어두운 요소를 마스킹하려면 이 값을 올리면 된다.
          luminanceSmoothing={0.025} // 휘도 임계값의 부드러움. 범위는 0,1 이다
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} // blend mode
          offset={[0.0005, 0.0012]} // color offset 두개의 숫자를 사용하여 효과가 얼마나 강한지 결정한다.
        />
      </EffectComposer>
      <CubeCamera resolution={256} frames={Infinity}>
        {/** 차에 주변 오브젝트를 비추기 위함
         * frames를 무한대로 설정하면 이 큐브카메라가 모든 프레임에서 계속 업데이트됨을 의미한다
         */}
        {(
          texture // texture 는 기본적으로 해당 프레임에서 큐브 카메라가 렌더링한 텍스처를 반환한다.
        ) => (
          <>
            <Environment map={texture} />
            {/**이 환경 구성요소가 자동차를 포함하여 모든 재료에 대한 기본 환경 맵으로 사용된다 */}
            <Car />
            {/**이 오브젝트를 제외한다는 뜻 */}
          </>
        )}
      </CubeCamera>
      <Rings />
      <Boxes />
      <FloatingGrid />
    </>
  );
}

function CarEffect() {
  return (
    <Suspense fallback={null}>
      {/** 코드를 불로오는 동안 '기다릴 수 있고' 기다리는 동안 로딩 상태(스피너)를 선언적으로 지정할 수 있도록 suspense컴포넌트가 추가되었다.*/}
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default CarEffect;
