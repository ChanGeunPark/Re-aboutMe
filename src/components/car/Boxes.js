import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

function Box({ color }) {
  const box = useRef();
  const time = useRef(0);
  const [xRotSpeed] = useState(() => Math.random()); //x 로테이트 스피드
  const [yRotSpeed] = useState(() => Math.random()); //y 로테이트 스피드
  const [scale] = useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05); //pow는 첫번째 값을 두번째값으로 제곱한다. *0.5 // 0과 1사이
  const [position, setPosition] = useState(getInitialPosition());

  function getInitialPosition() {
    let v = new Vector3(
      (Math.random() * 2 - 1) * 3, // -1 ... +1 *3 = -3 ~ +3
      Math.random() * 2.5 + 0.1,
      (Math.random() * 2 - 1) * 15
    );
    if (v.x < 0) v.x -= 1.75; // 자동차의 간격만큼 벌리려고
    if (v.x > 0) v.x += 1.75; // 자동차의 간격만큼 벌리려고

    //setPosition(v);
    return v;
  }

  function resetPosition() {
    //재설정 위치  -> 박스아 어느정도 거리에서 벋어나면 다시 앞에다 생성해줘야 한다.
    let v = new Vector3(
      (Math.random() * 2 - 1) * 3, // -1 ... +1 *3 = -3 ~ +3
      Math.random() * 2.5 + 0.1,
      Math.random() * 10 + 10
    );
    if (v.x < 0) v.x -= 1.75; // 자동차의 간격만큼 벌리려고
    if (v.x > 0) v.x += 1.75; // 자동차의 간격만큼 벌리려고

    //setPosition(v);
    return v;
  }

  useFrame(
    (state, delta) => {
      //delta = 랜더링 이후 경과된 시간
      time.current += delta * 1.2;
      let newZ = position.z - time.current; //초기 위치값에서 타이머 값을 뺀 값

      if (newZ < -10) {
        // 값이 마이너스 10단위보다 낮으면 리셋
        resetPosition();
        time.current = 2;
      }

      box.current.position.set(position.x, position.y, newZ);
      box.current.rotation.x += delta * xRotSpeed;
      box.current.rotation.y += delta * yRotSpeed;
    },
    [xRotSpeed, yRotSpeed, position]
  );

  return (
    <mesh ref={box} scale={scale} onPointerEnter={(boxes) => {}} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} envMapIntensity={0.15} />
    </mesh>
  );
}

export function Boxes() {
  const [arr] = useState(() => {
    let a = [];
    for (let i = 0; i < 100; i++) a.push(0);
    return a;
  });
  return (
    <>
      {arr.map((e, i) => (
        <Box
          key={i}
          color={i % 2 === 0 ? [0.4, 0.1, 0.1] : [0.05, 0.15, 0.4]}
        />
      ))}
    </>
  );
}
