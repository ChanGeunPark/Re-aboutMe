import { Box, Cloud, OrbitControls, useHelper } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { Mesh } from "three";
import { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three";
import { PointLightHelper } from "three";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { CubeTextureLoader } from "three";

export default function AboutMe() {
  return (
    <>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <div className="flex justify-center">{/* 내 얼굴 */}</div>

        <div className="pt-12 text-zinc-300 relative z-10">
          <h1
            className="text-[#FFEEEE] font-extrabold text-5xl md:text-6xl"
            // ref={aboutMe}
          >
            <span className="text-[#28292D] about">ABOUT</span>
            <span className="ml-3">ME.</span>
          </h1>
          <h2 className="aboutSubTitle mt-9">
            배우고 경험하고 도전하고 싶은게 너무 많은 웹 개발자 박찬근입니다
          </h2>
          <p className="aboutIntro mt-9 leading-relaxed">
            Design을 전공했습니다. 그러나 Front-end Developer로 일하고 있습니다{" "}
            <br className="hidden md:block" />
            저는 기존에 없었던 새로운 목표에 대한 도전을 즐기며{" "}
            <br className="hidden md:block" />
            이전엔 없었던 창조적인 웹을 만드는데 관심이 많습니다
          </p>

          <div className="aboutKeyword flex space-x-3 mt-9">
            <span className="inline-block px-6 py-2 border border-zinc-300 rounded-full">
              배움
            </span>
            <span className="inline-block px-6 py-2 border border-zinc-300 rounded-full">
              경험
            </span>
            <span className="inline-block px-6 py-2 border border-zinc-300 rounded-full">
              도전
            </span>
          </div>
          <div className="mt-9">
            <h3 className="text-orange-400 skillsTitle">EXPERIENCED SKILLS+</h3>
            <div className="skills mt-3 flex flex-wrap max-w-[500px]">
              <span className="mr-2 h-[40px] overflow-hidden rounded-md mb-2">
                <img
                  src={`https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/6f11ac01-c930-4ab0-a172-6b92514fc000/avatar`}
                  layout="fixed"
                  alt="react"
                  height={40}
                  width={40}
                />
              </span>
              <span className="mr-2 h-[40px] overflow-hidden rounded-md mb-2">
                <img
                  src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/5ceef42d-4f59-4e5f-7af9-16d65a22da00/avatar"
                  layout="fixed"
                  alt="nextjs"
                  height={40}
                  width={85}
                />
              </span>
              <span className="mr-2 h-[40px] overflow-hidden rounded-md mb-2">
                <img
                  src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/c8547cf7-cd89-4574-9dac-d608ff96f500/avatar"
                  layout="fixed"
                  alt="html"
                  height={40}
                  width={40}
                />
              </span>
              <span className="mr-2 h-[40px] overflow-hidden rounded-md mb-2">
                <img
                  src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/72c59945-9fe2-4f6e-1f3e-00b0af410b00/avatar"
                  layout="fixed"
                  alt="css"
                  height={40}
                  width={40}
                />
              </span>
              <span className="mr-2 h-[40px] overflow-hidden rounded-md mb-2">
                <img
                  src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/8f1fbfd1-2a05-48e9-4dd4-769f5a92ed00/avatar"
                  layout="fixed"
                  alt="js"
                  height={40}
                  width={40}
                />
              </span>
              <span className="mr-2 h-[40px] overflow-hidden rounded-md mb-2">
                <img
                  src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/5453bc06-ad48-406e-fecb-da733cb94d00/avatar"
                  layout="fixed"
                  alt="typescript"
                  height={40}
                  width={40}
                />
              </span>
              <span className="mr-2 h-[40px] overflow-hidden rounded-md mb-2">
                <img
                  src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/0b6506ed-5ae0-4452-8c85-9a9dfa39ea00/avatar"
                  layout="fixed"
                  alt="php"
                  height={40}
                  width={59}
                />
              </span>
              <span className="mr-2 h-[40px] overflow-hidden rounded-md mb-2">
                <img
                  src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/ecfac755-b728-4816-c328-626ddfad8800/avatar"
                  layout="fixed"
                  alt="nodejs"
                  height={40}
                  width={85}
                />
              </span>
              <br className="hidden lg:block" />
              <span className="mr-2 h-[40px] overflow-hidden rounded-md mb-2">
                <img
                  src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/bb76075f-76aa-41a4-40fb-db8e6ba56400/avatar"
                  layout="fixed"
                  alt="planetscale"
                  height={40}
                  width={157}
                />
              </span>
              <span className="mr-2 h-[40px] overflow-hidden rounded-md mb-2">
                <img
                  src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/ac67a633-0e33-49bb-1aaf-a808a9154700/avatar"
                  layout="fixed"
                  alt="presma"
                  height={40}
                  width={34}
                />
              </span>
              <span className="mr-2 h-[40px] overflow-hidden rounded-md mb-2">
                <img
                  src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/7c6e844b-24ea-4e9e-959a-8f96ff2d0000/avatar"
                  layout="fixed"
                  alt="cloudeflare"
                  height={40}
                  width={100}
                />
              </span>
              <span className="mr-2 h-[40px] overflow-hidden rounded-md mb-2">
                <img
                  src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/97275b14-e5cd-4bbc-706b-37b12e630000/avatar"
                  layout="fixed"
                  alt="spline"
                  height={40}
                  width={40}
                />
              </span>
              <br className="hidden lg:block" />
              <span className="mr-2 h-[40px] overflow-hidden rounded-md mb-2">
                <img
                  src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/045fb8c5-eb7a-465e-cea1-ac31899c4f00/avatar"
                  layout="fixed"
                  alt="photoshap"
                  height={40}
                  width={40}
                />
              </span>
              <span className="mr-2 h-[40px] overflow-hidden rounded-md mb-2">
                <img
                  src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/3f5df5cb-98db-4a68-f92e-ebef779b0600/avatar"
                  layout="fixed"
                  alt="illustrator"
                  height={40}
                  width={40}
                />
              </span>
              <span className="mr-2 h-[40px] overflow-hidden rounded-md mb-2">
                <img
                  src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/277caaae-6852-4b81-8cc5-2fcc750d9000/avatar"
                  layout="fixed"
                  alt="adobeXD"
                  height={40}
                  width={40}
                />
              </span>
              <span className="mr-2 h-[40px] overflow-hidden rounded-md mb-2">
                <img
                  src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/e8b3e80c-af62-4071-dd68-948d4c392000/avatar"
                  layout="fixed"
                  alt="figma"
                  height={40}
                  width={40}
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      <Canvas
        shadows
        dpr={[1, 2]} //Canvas 크기와 화면에 표시(디스플레이) 되는 크기는 다르며, 디스플레이 크기는 DPR의 영향을 받는다
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
        {/* <EffectComposer>
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
        </EffectComposer> */}

        <perspectiveCamera position={(0, 0, 4)} />
        {/* <OrbitControls /> */}
        <Rig>
          <Light />
          <FaceLine />
        </Rig>
      </Canvas>
      <style>{`
      .about {
        -webkit-text-stroke: 2px #ffeeee;
      }
      .story{
        -webkit-text-stroke: 2px #28292D;
      }
      
      .face{
        stroke-dasharray:2100;
        stroke-dashoffset:2100;
      }
      
      `}</style>
    </>
  );
}

function Light() {
  const ref = useRef(null);
  useHelper(ref, PointLightHelper, 1);
  return (
    <>
      {/* <OrbitControls /> */}
      <pointLight
        intensity={1}
        position={[1.8, 2.45, 0]}
        scale={0.3}
        power={20}
        color={"#f5b97a"}
        distance={5}
      />
      <pointLight
        intensity={1}
        position={[-1, -0.5, 1]}
        scale={0.3}
        power={20}
        color={"#eaf0ee"}
        distance={5}
      />
      <pointLight
        intensity={1}
        position={[0.9, 0.8, 0]}
        power={10}
        color={"#fff"}
        distance={5}
      />
    </>
  );
}
function FaceLine() {
  const gltf = useLoader(GLTFLoader, "/models/hands/hand279.glb");
  const cubeTextureLoader = new THREE.CubeTextureLoader();
  const environmentMapTexture = cubeTextureLoader.load([
    "/models/hands/rainforest_trail_2k.exr",
  ]);

  const ring = gltf.scene.children.find((object) => object.name === "Circle"); // 뒤에 링
  const hands = gltf.scene.children.find(
    (object) => object.name === "Armature"
  );
  const leafs1 = gltf.scene.children.find(
    (object) => object.name === "Sphere004"
  );

  const handObject = hands.children.find((object) => object.name === "Sphere");
  const leafs2 = gltf.scene.children.find(
    (object) => object.name === "Sphere005"
  );
  const leafs3 = gltf.scene.children.find(
    (object) => object.name === "Sphere006"
  );
  const leafs4 = gltf.scene.children.find(
    (object) => object.name === "Sphere007"
  );
  const leafs5 = gltf.scene.children.find(
    (object) => object.name === "Sphere008"
  );
  const leafs6 = gltf.scene.children.find(
    (object) => object.name === "Sphere009"
  );
  const leafs7 = gltf.scene.children.find(
    (object) => object.name === "Sphere010"
  );
  const leafs8 = gltf.scene.children.find(
    (object) => object.name === "Sphere011"
  );
  const leafs9 = gltf.scene.children.find(
    (object) => object.name === "Sphere012"
  );
  const boll1 = gltf.scene.children.find(
    (object) => object.name === "Sphere001"
  );
  const boll2 = gltf.scene.children.find(
    (object) => object.name === "Sphere002"
  );

  const boll3 = gltf.scene.children.find(
    (object) => object.name === "Sphere003"
  );
  const plane = gltf.scene.children.find((object) => object.name === "Plane"); // 삼각형

  hands.rotation.y = -Math.PI * 0.2;

  ring.material = new THREE.MeshBasicMaterial({ color: "#f19e1f" }); // 링

  handObject.material = new THREE.MeshPhongMaterial({ color: "#e99887" });

  leafs1.material = new THREE.MeshPhongMaterial({ color: "#4d7d13" });
  leafs2.material = new THREE.MeshStandardMaterial({ color: "#5c8a23" });
  leafs3.material = new THREE.MeshStandardMaterial({ color: "#4b6729" });
  leafs4.material = new THREE.MeshStandardMaterial({ color: "#31401e" });
  leafs5.material = new THREE.MeshStandardMaterial({ color: "#587d2b" });
  leafs6.material = new THREE.MeshStandardMaterial({ color: "#4d7d13" });
  leafs7.material = new THREE.MeshStandardMaterial({ color: "#75964c" });
  leafs8.material = new THREE.MeshStandardMaterial({ color: "#65a516" });
  leafs9.material = new THREE.MeshStandardMaterial({ color: "#556c3a" });
  plane.material = new THREE.MeshStandardMaterial({
    color: "#654fbe",
    envMap: environmentMapTexture,
    metalness: 0.8,
    transparent: true,
    roughness: 0.1,
  });

  // const [color, roughness, normal] = useLoader(TextureLoader, [
  //   "/models/grass_bermuda/textures/grass_bermuda_01_diff_2k.jpg",
  //   "/models/grass_bermuda/textures/grass_bermuda_01_arm_2k.jpg",
  //   "/models/grass_bermuda/textures/grass_bermuda_01_nor_gl_2k.jpg",
  // ]);
  useEffect(() => {
    gltf.scene.scale.set(0.4, 0.4, 0.4);
    gltf.scene.rotation.y = Math.PI * 0.6;
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        // 타입이 mesh인것
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
        // object.material.map = color;
        // object.material.roughnessMap = roughness;
        // object.material.normalMap = normal;
      }
    });
  }, []);

  useFrame((state) => {
    let t = state.clock.elapsedTime;
    boll1.position.y = 7.5 + Math.sin(t * 0.8 + 0.002) * 0.5;
    boll2.position.y = 6 + Math.sin(t * 0.6 + 0.003) * 0.4;

    boll3.position.y = 6 + Math.sin(t * 0.9 + 0.004) * 0.3;

    // hands.rotation.y = Math.sin(t * 0.7) * 0.3;

    // leafs1.position.y = Math.cos(leafs1.position.y - t * 0.5) * 0.3;
    // leafs2.position.y = Math.cos(leafs2.position.y + t * 0.3) * 0.3;
    // leafs3.position.y = Math.cos(t * 0.6) * 0.3;
    // leafs4.position.y = -Math.cos(t * 0.7) * 0.3;
    // leafs5.position.y = Math.cos(t * 0.4) * 0.3;
  });

  return <primitive object={gltf.scene} />;
}

function Rig({ children }) {
  const ref = useRef();
  const vec = new THREE.Vector3();
  const { camera, mouse } = useThree();
  const windowWidth = window.innerWidth;
  console.log(windowWidth);
  let widthDepth = 0;
  if (windowWidth > 770) widthDepth = 2.6;
  if (windowWidth > 1200) widthDepth = 3;
  if (windowWidth > 1540) widthDepth = 4.2;

  useFrame(() => {
    //console.log();
    camera.position.lerp(vec.set(widthDepth + mouse.x * -0.5, 1, 4), 0.1);
    ref.current.position.lerp(vec.set(mouse.x * -1, mouse.y * 0.1, -1), 0.1);
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (-mouse.x * Math.PI) / 10,
      0.05
    );
  });
  return <group ref={ref}>{children}</group>;
}
//1
