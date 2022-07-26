import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { usePlane, Physics, useSphere, useBox } from "@react-three/cannon";
import { Suspense, useEffect, useRef, useState } from "react";
import {
  Box,
  Effects,
  Html,
  Plane,
  RoundedBox,
  Sky,
  Sparkles,
  Text,
  useTexture,
} from "@react-three/drei";
import { useControls } from "leva";
import { Name } from "../components/name/Name";
import { Ground } from "../components/car/Ground";
import { TextureLoader } from "three";
import { Vector3 } from "three";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import MyStory from "../components/Mystory";
import ContectMe from "../components/ContactMe";
import Challenge from "../components/Challenge";
import lottie from "lottie-web";
import Lottie from "lottie-react";
import loadingAnimation from "../lottie/loading.json";

const rfs = THREE.MathUtils.randFloatSpread; //여러 수학 유틸리티 기능이 있는 개체입니다. [- 범위 /2, 범위 /2] random

const oneBaubleMaterial = new THREE.MeshStandardMaterial({
  color: "white",
  roughness: 1,
  envMapIntensity: 1,
}); // 포인트 마테리얼
const oneSphereGeometry = new THREE.SphereGeometry(0.6, 32, 32);

export default function Home() {
  const [boxTexture, setBoxTexture] = useState(1);
  function changBox() {
    setBoxTexture(boxTexture + 1);
    if (boxTexture > 2) {
      setBoxTexture(1);
    }
  }

  return (
    <>
      <Suspense
        fallback={
          <div className="w-full h-screen flex items-center flex-col justify-center bg-[#28292E]">
            <Lottie animationData={loadingAnimation} loop={true} />
            <h2 className="text-white text-xl -mt-5">Loading...</h2>
          </div>
        }
      >
        <main className="w-full min-h-screen bg-[#28292E] relative z-10">
          <section className="w-full h-screen relative">
            <Canvas
              shadows
              dpr={[1, 2]} //Canvas 크기와 화면에 표시(디스플레이) 되는 크기는 다르며, 디스플레이 크기는 DPR의 영향을 받는다
              camera={{ position: [0, 1, 20], fov: 35, near: 10, far: 40 }}
            >
              <fog attach="fog" args={["#28292E", 12, 11]}></fog>
              <ambientLight intensity={0.24} />
              <spotLight
                intensity={1}
                angle={0.2}
                penumbra={1} // 스포트라이트의 원뿔의 백분율 0과 1사이값
                position={[30, 30, 30]}
                castShadow
                shadow-mapSize={[512, 512]} // 얼마나 그림자를 줄건지 작성해줘야한다.
              />
              <PointerLight />
              <directionalLight
                intensity={0.2}
                position={[-10, -10, -10]}
                color="white"
              />
              <Physics>
                <Name scale={[2.5, 2.5, 2.5]} />
                <Clump boxtexture={boxTexture} />
                <Pointer />
                <CenterSphere />
                <PointCircle />
              </Physics>
              <Html
                as="div"
                center
                className="w-screen h-screen relative"
                position-z={0}
              >
                <span className="w-full block absolute top-0 left-0 bg-gradient-to-t to-zinc-900 from-transparent h-[200px] pointer-events-none z-10"></span>
                <h2 className="absolute left-1/2 bottom-1/3 -translate-x-1/2 text-zinc-200 pointer-events-none">
                  배우고 경험하고 도전하고 싶은게 너무 많은 개발자 박찬근입니다
                </h2>

                <button
                  type="button"
                  className="absolute right-1/4 top-1/4 text-zinc-500"
                  onClick={changBox}
                >
                  <div className="flex flex-col justify-center items-center space-y-3">
                    <span className="flex h-5 w-5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-zinc-800 border border-zinc-700 "></span>
                    </span>
                    <span>CLICK</span>
                  </div>
                </button>

                <article className="container absolute bottom-20 left-1/2 -translate-x-1/2">
                  <div className="flex items-center absolute right-0 translate-x-[40%] rotate-90 z-20 bottom-20">
                    <span className="text-zinc-400 mr-2">Park Chan Geun</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36.214"
                      className="stroke-zinc-300"
                      height="6.927"
                      viewBox="0 0 36.214 6.927"
                    >
                      <path
                        id="arrow1"
                        data-name="arrow1"
                        d="M1717.5,832.471v34.458l-5.72-6.047"
                        transform="translate(-831.971 1718) rotate(-90)"
                        fill="none"
                        strokeLinecap="round"
                        strokeWidth="1"
                        opacity="0.485"
                      />
                    </svg>
                  </div>
                  <div className=" absolute left-0 z-20 bottom-1/4 flex flex-col space-y-2 pointer-events-auto">
                    <span className="border w-12 h-12 text-white rounded-lg border-zinc-500 flex justify-center items-center">
                      {/* github */}
                      <a
                        target="_blank"
                        href="https://github.com/ChanGeunPark"
                        className=" text-zinc-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-zinc-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </article>
                <span className="block w-full h-[100px] bg-gradient-to-t to-transparent from-[#28292E] absolute left-0 bottom-0 pointer-events-none z-20"></span>
              </Html>
            </Canvas>
          </section>
          <section className="bg-[#28292D] relative min-h-screen flex items-center aboutMeMain">
            <AboutMe />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 z-0">
              <img
                src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/2df8ffb4-eb06-4938-b481-5d40a7db5600/public"
                alt="background"
              />
              {/* background object */}
            </span>
            <span className="absolute left-0 top-0 -translate-x-[20px] px-3">
              <img
                src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/4a10e52f-302c-4f7b-6ac2-b4ecd8a1e400/public"
                alt="background"
              />
              {/* background object dotted*/}
            </span>
          </section>
          <Experience />
          <MyStory />
          <Challenge />
          <ContectMe />
        </main>
      </Suspense>
    </>
  );
}

function CenterSphere() {
  const [, centerSphere] = useSphere(() => ({
    type: "Kinematic",
    args: [3],
    color: ["#fff"],
    position: [0, 0, 0],
  }));
  return useFrame((state) => centerSphere.position.set(0, 0, 0));
}

function PointerLight() {
  const ref = useRef(null);
  const viewport = useThree((state) => state.viewport);

  // useEffect(() => {
  //   console.log(ref.current.position.set(1, 2, 3));
  //   // ref.current.matrix.position;
  // }, []);
  useFrame((state) => {
    // console.log(state.mouse);
    ref.current.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      4
    );
  });

  ///console.log(ref.current);
  // useFrame(() => (ref.current.matrix.setPosition = [0, 8, 5]), [ref]);
  // return <pointLight intensity={2} color={"blue"} />;
  return (
    <pointLight
      ref={ref}
      position={[33, 13, 3]}
      intensity={5}
      distance={5}
      color={"#fcd34d"}
      castShadow
      receiveShadow
    />
  );
}

function Pointer() {
  const viewport = useThree((state) => state.viewport);

  const [, api] = useSphere(() => ({
    type: "Kinematic",
    args: [4],
    color: ["#fff"],
    position: [0, 0, 0],
  }));

  return useFrame((state) => {
    //console.log(state.mouse);
    api.position.set(
      (state.mouse.x * viewport.width) / 2, // 마우스 whith 위치
      (state.mouse.y * viewport.height) / 2, // 마우스 height 위치
      0
    );
  });
}

function PointCircle({
  mat = new THREE.Matrix4(),
  vec = new THREE.Vector3(),
  ...props
}) {
  const [color, roughness, normal, ao] = useLoader(TextureLoader, [
    "/textures/pointCircle/coral_fort_wall_01_diff_1k.jpeg",
    "/textures/pointCircle/coral_fort_wall_01_rough_1k.jpeg",
    "/textures/pointCircle/coral_fort_wall_01_nor_gl_1k.jpeg",
    "/textures/pointCircle/coral_fort_wall_01_ao_1k.jpeg",
  ]);

  oneBaubleMaterial.map = color;
  oneBaubleMaterial.roughnessMap = roughness;
  oneBaubleMaterial.normalMap = normal;
  oneBaubleMaterial.aoMap = ao;

  const [ref, api] = useSphere(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)],
  }));

  useFrame((state) => {
    //lightRef.current.matrix.positionX = 1;

    ref.current.getMatrixAt(0, mat);
    api
      .at(0)
      .applyForce(
        vec
          .setFromMatrixPosition(mat)
          .normalize()
          .multiplyScalar(-50)
          .toArray(),
        [0, 0, 0]
      ); // 중력을 중앙
  });

  return (
    <>
      {/* <pointLight ref={lightRef} color={"blue"} /> */}
      <instancedMesh //threejs의 메쉬랑 마테리얼을 가져올 수 있다.
        ref={ref}
        castShadow
        receiveShadow
        args={[null, null, 1]}
        geometry={oneSphereGeometry}
        material={oneBaubleMaterial}
      />
      {/* <Sparkles
          count={29}
          size={20}
          position={[0, 0.9, 0]}
          scale={[4, 1.5, 4]}
          speed={0.3}
        /> */}
    </>
  );
} // 포인트 구슬

function Clump({
  mat = new THREE.Matrix4(),
  vec = new THREE.Vector3(),
  ...props
}) {
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32);
  const baubleMaterial = new THREE.MeshStandardMaterial({
    roughness: 1,
    envMapIntensity: 1,
    // emissive: "#370037",
  });

  const [
    normal,
    roughness,
    color,
    normal2,
    roughness2,
    color2,
    normal3,
    roughness3,
    color3,
  ] = useLoader(TextureLoader, [
    "/textures/mainBoxs/brown_mud_leaves_01_nor_gl_2k.jpeg",
    "/textures/mainBoxs/brown_mud_leaves_01_rough_2k.jpeg",
    "/textures/mainBoxs/brown_mud_leaves_01_diff_2k.jpeg",
    "/textures/mainBoxs/floor_tiles_06_nor_gl_1k.jpeg",
    "/textures/mainBoxs/floor_tiles_06_rough_1k.jpeg",
    "/textures/mainBoxs/floor_tiles_06_diff_1k.jpeg",
    "/textures/mainBoxs/brick_4_nor_gl_1k.jpeg",
    "/textures/mainBoxs/brick_4_rough_1k.jpeg",
    "/textures/mainBoxs/brick_4_diff_1k.jpeg",
  ]);

  const [ref, api] = useBox(() => ({
    //args: [1], // 중력을 적용할 오브젝트의 크기
    mass: 1, // 중력을 얼마나 적용할건지
    angularDamping: 0.1,
    linearDamping: 0.65, //슬로우
    position: [rfs(20), rfs(20), rfs(20)], //20 / 2 의 랜덤의 숫자
  }));

  useFrame((state) => {
    for (let i = 0; i < 30; i++) {
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

  if (props.boxtexture === 1) baubleMaterial.color.set("#81cb23");
  if (props.boxtexture === 2) baubleMaterial.color.set("#a359f7");
  if (props.boxtexture === 3) baubleMaterial.color.set("#ee4445");

  baubleMaterial.normalMap =
    props.boxtexture === 1
      ? normal
      : props.boxTexture === 2
      ? normal2
      : props.boxTexture === 3
      ? normal3
      : null;
  baubleMaterial.roughnessMap =
    props.boxtexture === 1
      ? roughness
      : props.boxtexture === 2
      ? roughness2
      : props.boxtexture === 3
      ? roughness3
      : null;
  baubleMaterial.map =
    props.boxtexture === 1
      ? color
      : props.boxtexture === 2
      ? color2
      : props.boxtexture === 3
      ? color3
      : null;

  return (
    <>
      <instancedMesh //threejs의 메쉬랑 마테리얼을 가져올 수 있다.
        ref={ref}
        castShadow
        receiveShadow
        args={[null, null, 30]}
        geometry={
          props.boxtexture === 1 || props.boxtexture === 3
            ? boxGeometry
            : sphereGeometry
        }
        material={baubleMaterial}
      />
    </>
  );
}
