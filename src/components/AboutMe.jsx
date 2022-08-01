import { Box, Cloud, OrbitControls, useHelper } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { Mesh } from "three";
import { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three";
import { PointLightHelper } from "three";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/all";

import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { CubeTextureLoader } from "three";

export default function AboutMe() {
  const myFace = useRef(null);
  const aboutMe = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(myFace.current, {
      scrollTrigger: {
        trigger: aboutMe.current,
        toggleActions: "restart none none none",
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
      },
      strokeDashoffset: 0,
    }); //얼굴 라인

    gsap.fromTo(
      aboutMe.current,
      {
        translateX: 50,
        opacity: 0,
        lazy: false,
      },
      {
        opacity: 1,
        translateX: 0,
        scrollTrigger: {
          trigger: aboutMe.current,
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); // about me

    gsap.fromTo(
      ".aboutSubTitle",
      {
        translateX: 50,
        opacity: 0,
        lazy: false,
      },
      {
        delay: 0.1,
        opacity: 1,
        translateX: 0,
        scrollTrigger: {
          trigger: aboutMe.current,
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //aboutSubTitle

    gsap.fromTo(
      ".aboutIntro",
      {
        translateX: 50,
        opacity: 0,
        lazy: false,
      },
      {
        delay: 0.2,
        opacity: 1,
        translateX: 0,
        scrollTrigger: {
          trigger: aboutMe.current,
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //about Intro

    gsap.fromTo(
      ".aboutKeyword span",
      {
        opacity: 0,
        lazy: false,
      },
      {
        stagger: 0.1,
        delay: 0.3,
        opacity: 1,
        scrollTrigger: {
          trigger: aboutMe.current,
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //aboutKeyword

    gsap.fromTo(
      ".skillsTitle",
      {
        translateY: -50,
        opacity: 0,
        lazy: false,
      },
      {
        stagger: 0.03,
        delay: 0.4,
        opacity: 1,
        translateY: 0,
        scrollTrigger: {
          trigger: aboutMe.current,
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //skills

    gsap.fromTo(
      ".skills span",
      {
        translateY: -50,
        opacity: 0,
        lazy: false,
      },
      {
        stagger: 0.03,
        delay: 0.4,
        opacity: 1,
        translateY: 0,
        scrollTrigger: {
          trigger: aboutMe.current,
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      }
    ); //skills
  }, []);
  return (
    <>
      <section className="bg-[#28292D] relative min-h-screen flex items-center aboutMeMain">
        <span className="absolute right-0 top-1/2 -translate-y-1/2 z-0">
          <img
            src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/2df8ffb4-eb06-4938-b481-5d40a7db5600/public"
            alt="background"
          />
        </span>
        <span className="absolute left-0 top-0 -translate-x-[20px] px-3">
          <img
            src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/4a10e52f-302c-4f7b-6ac2-b4ecd8a1e400/public"
            alt="background"
          />
        </span>
        <article className="container px-3 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 z-30">
          <div className="flex justify-center">
            {/* 내 얼굴 */}

            <div className="relative -mt-0 sm:-mt-[20%] hover:drop-shadow-[0_0_5px_rgba(255,255,255,1)] duration-300 z-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="face w-[400px] md:w-[560px] max-w-full stroke-2 transition-all duration-[4s] ease-in-out"
                viewBox="0 0 564.195 781.168"
                ref={myFace}
              >
                <path
                  id="hat"
                  data-name="hat"
                  d="M215.86,330.682s29.592,101.27,33.538,140.726S244.137,501,232.3,481.625s-30.25-39.808-46.032-55.591-5.261,25.646-1.315,59.841-17.1,46.032-49.978,48S33.706,547.69,17.923,551.636,2.8,552.951,6.744,530.592,43.57,470.751,79.08,429.322s29.592-74.966,23.674-112.449S31.733,209.684,12,180.75,3.456,120.908,30.418,61.724s67.733-82.2,119.025-81.542S254-21.791,290.827-29.024s63.129,11.179,80.157,43.492,5.989,74.876.728,99.207S391.439,145.9,391.439,145.9s7.739,3.266,9.988-8.8-3.451-20.483,19.555-54.066,22.88-81.585,0-120.081S325.9-113.19,334.506-164.909s52.25-61.123,52.25-61.123"
                  transform="translate(-1.13 227.01)"
                  fill="none"
                  stroke="#fee"
                  strokeMiterlimit="10"
                />
                <path
                  id="face"
                  data-name="face"
                  d="M434.757,347.092s4.96,5.918,5.11,0-8.4-17.755-5.768-21.7,5.261-3.946,6.576-4.6.658-3.946-1.315-7.234-6.576-7.891-9.206-8.549.658-2.63,1.973-2.63a24.668,24.668,0,0,0,6.576-.658c1.973-.658,5.918-5.918,5.918-7.234s-.658-1.973-3.946-5.918-5.918-7.234-7.891-9.864-2.63-4.6-7.891-4.6-11.837.658-13.81-.658-7.891-9.206-9.206-14.467,0-12.494,1.973-13.152,5.688-1.315,5.474,0-1.528,4.6-1.528,7.234,3.288,11.837,5.261,13.152,6.576,3.288,9.206-.658,4.6-10.522,11.179-11.179,11.179,3.288,14.467,3.288,4.6-2.63,4.6-5.918.658-8.549-3.946-13.152-13.152-12.494-17.1-18.413-13.81-12.494-15.125-15.125-.658-4.6,0-6.576,1.973-9.206.658-9.206-1.973.658-3.288,3.288-3.946,3.946-7.891,6.576-11.179,7.234-12.494,9.864-.658,8.549-3.288,10.522-5.261,2.63-10.522-2.63-16.44-14.467-13.81-14.467S380.176,213.6,384.122,213.6s3.946-1.315,4.6-2.63-1.315-15.125-2.63-17.1-19.07,3.288-21.7,5.261-7.234-12.494-3.946-21.7,11.179-8.549,20.386-6.576,27.619,10.522,29.592,12.494,1.973,1.315,2.63-1.315,1.315-15.125.658-18.413-17.1-28.277-21.7-37.483S369,81.422,368.34,70.9s4.6-13.152,13.152-7.891,10.522,17.1,8.549,29.592-13.81,108.5-53.923,128.889-61.157-7.234-72.994,0-17.1,10.522-17.1,17.1,3.288,13.152,2.63,15.125-3.946-2.63-11.837-5.261-15.125-5.261-11.837-7.891,10.522-6.576,7.891-7.891-7.234,1.973-11.179,1.973-7.234-.658-5.918-9.206,7.891-13.152,9.206-9.864,1.315,9.864,5.918,7.891,4.6-7.234,4.6-19.728-10.522-19.728-21.7-17.1-15.394,3.946-22.493,18.413-7.757,39.456,3.422,54.581,21.7,19.07,36.168,21.7,21.043,8.549,24.331,20.386,9.206,32.222,25.646,40.114,51.95,19.728,90.749,22.358,53.266,1.315,59.184,1.315,8.549,1.973,5.918,6.576-5.261,11.837-20.386,12.494-42.086-3.288-50.635-1.973-10.522,5.261-10.522,9.206,3.946,24.989,10.522,33.538,7.234,11.837,21.7,15.125,35.51,7.234,49.978,12.494,19.728,10.522,40.113,10.522,65.1.658,94.037,27.619,49.32,51.95,55.9,69.706"
                  transform="translate(-64.176 174.432)"
                  fill="none"
                  stroke="#fee"
                  strokeMiterlimit="10"
                />
              </svg>
              <span className="w-4 h-4 block rounded-full bg-white absolute top-0 -translate-y-1/2 right-[30%]"></span>
            </div>
          </div>

          <div className="pt-12 text-zinc-300 relative z-10">
            <h1
              className="text-[#FFEEEE] font-extrabold text-5xl md:text-6xl"
              ref={aboutMe}
            >
              <span className="text-[#28292D] about">ABOUT</span>
              <span className="ml-3">ME.</span>
            </h1>
            <h2 className="aboutSubTitle mt-9">
              배우고 경험하고 도전하고 싶은게 너무 많은 웹 개발자 박찬근입니다
            </h2>
            <p className="aboutIntro mt-9 leading-relaxed">
              Design을 전공했습니다. 그러나 Front-end Developer로 일하고
              있습니다 <br className="hidden md:block" />
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
              <h3 className="text-orange-400 skillsTitle">
                EXPERIENCED SKILLS+
              </h3>
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
                    src="https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/2d1c667f-cd32-4882-0438-4fdd83435c00/avatar"
                    layout="fixed"
                    alt="threejs"
                    className="h-[40px]"
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
        </article>
        {/* <Canvas
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
        <EffectComposer>
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

        <perspectiveCamera position={(0, 0, 4)} />
        <Rig>
          <Light />
          <FaceLine />
        </Rig>
      </Canvas> */}
      </section>
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
