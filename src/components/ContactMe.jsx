import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Cloud, OrbitControls, useHelper } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { Mesh } from "three";
import { TextureLoader } from "three";
import { Water } from "three-stdlib";
export default function ContectMe() {
  const emailModal = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  const modal = () => {
    modalOpen ? setModalOpen(false) : setModalOpen(true);
  };

  const {
    register,
    setError,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onvaild = (data) => {
    emailModal.current.classList.add("opacity-70");
    let templateParams = {
      email: data.email,
      notes: data.notes,
    };
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_EMAIL_ID.slice(0, -1) + "",
        process.env.REACT_APP_TEMPLATE_EMAIL_ID.slice(0, -1) + "",
        templateParams,
        process.env.REACT_APP_USER_EMAIL_KEY.slice(0, -1) + ""
      )

      .then(
        function (response) {
          console.log("성공!");
          console.log(response);
          // , response.status, response.text;
          alert("소중한 의견 감사합니다.");
          emailModal.current.classList.remove("opacity-70");
          setModalOpen(false);
          setValue("notes", "eamil");
        },
        function (error) {
          console.log("전송실패...", error);
        }
      );
  };

  return (
    <div className="relative">
      {/* <div className="border w-full min-h-screen absolute left-0 top-0 z-20">
        <Canvas
          camera={{ position: [0, 1, 20], fov: 35, near: 0.1, far: 1000 }}
        >
          <ContextMeBg />
          <ambientLight intensity={0.24} />
          <OrbitControls />
          <mesh position={[1, 1, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={"#dddddd"} />
          </mesh>
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
        </Canvas>
      </div> */}

      <article
        id="contactMeMain"
        className="w-full min-h-screen flex items-center py-12 bg-[url(https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/23ef26ea-3e50-494e-d24f-8ce7a6adf000/public)] bg-cover px-3 relative"
      >
        <div className="container mx-auto">
          <section>
            <div className="flex items-center text-5xl md:text-7xl font-extrabold relative text-white">
              <span className="about text-transparent">Contact</span>
              <span className="ml-3">Me</span>
            </div>
            <p className="mt-12 text-zinc-200 leading-relaxed">
              항상 소중한 의견을 듣고 배우겠습니다. <br />
              어떤 말씀이건 귀담아 듣겠습니다.
            </p>
            <button
              type="button"
              onClick={modal}
              className="mt-12 text-white bg-indigo-500 px-6 py-3 rounded-md hover:bg-indigo-600 transition-colors"
            >
              하실 말씀이 있으신가요?
            </button>
          </section>
        </div>

        <div className={`${!modalOpen ? "hidden" : ""}`} ref={emailModal}>
          <span
            onClick={modal}
            className="block w-screen h-screen bg-[rgba(0,0,0,0.3)] fixed left-0 top-0"
          ></span>
          <form
            onSubmit={handleSubmit(onvaild)}
            className="p-3 w-[400px] h-[400px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[95%] bg-white rounded-lg shadow-xl z-40"
          >
            <h1 className="text-center text-lg text-blue-500 font-semibold mb-6">
              하실 말씀이 있으신가요?
            </h1>
            <input
              type="text"
              {...register("email", {
                required: "이메일 작성필요",
              })}
              name="email"
              className="w-full bg-gray-100 px-3 py-2 rounded-md focus:ring-2 focus:rign-blue-300 transition-all outline-none"
              placeholder="YOUR EMAIL"
            />
            <textarea
              {...register("notes", {
                required: true,
                // minLength: { value: 5, message: "5글자 이상 작성필요." },
              })}
              id="notes"
              className="w-full h-[220px] bg-zinc-100 mt-3 rounded-md p-3 focus:ring-2 focus:rign-blue-300 transition-all outline-none resize-none"
              placeholder="내용 작성"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 mt-1 w-full rounded-md hover:bg-blue-600 transition-all"
            >
              메일 보내기
            </button>
          </form>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-3 text-zinc-300 text-center resize-none">
          <span>design795@naver.com</span>
        </div>
        {/* <div className="absolute left-0 top-0 w-full h-full"></div> */}
      </article>
    </div>
  );
}

export function ContextMeBg(props) {
  const gltf = useLoader(GLTFLoader, "../models/space_girl/scene.gltf");
  gltf.scene.scale.set(1, 1, 1);

  gltf.scene.castShadow = true;
  gltf.scene.receiveShadow = true;
  const ref = useRef(null);
  const vec = new THREE.Vector3();

  return (
    <>
      <primitive object={gltf.scene} ref={ref} />
    </>
  );
}
