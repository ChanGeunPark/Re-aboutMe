import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color } from "three";

export function Rings() {
  const itemsRef = useRef([]);

  useFrame((state) => {
    let elapsed = state.clock.getElapsedTime();

    for (let i = 0; i < itemsRef.current.length; i++) {
      let mesh = itemsRef.current[i];

      // let z = (i - 7) * 3.5;
      let z = (i - 7) * 3.5 + ((elapsed * 0.8) % 3.5) * 2; // 3.5 * 2만큼 옮겼다가 다시 제자리로 오게 해야한다.

      mesh.position.set(0, 0, -z);

      let dist = Math.abs(z); // z의 절대값
      mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);

      let colorScale = 1;
      if (dist > 2) {
        colorScale = 1 - (Math.min(dist, 12) - 2) / 10;
      }
      colorScale *= 0.5;

      if (i % 2 == 1) {
        mesh.material.emissive = new Color(6, 0.15, 0.7).multiplyScalar(0.5);
      } else {
        mesh.material.emissive = new Color(0.1, 0.7, 3).multiplyScalar(0.5);
      }
    }
  });

  return (
    <>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
        <mesh
          castShadow //이 물체에 그림자가 생기게 할건지
          receiveShadow //그림자를 줄건지
          position={[0, 0, 0]}
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
        >
          <torusGeometry args={[3.35, 0.05, 16, 100]} />
          <meshStandardMaterial emissive={[0.5, 0.5, 0.5]} color={[0, 0, 0]} />
        </mesh>
      ))}
    </>
  );
}
