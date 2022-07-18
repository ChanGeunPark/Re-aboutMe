import { useCompoundBody } from "@react-three/cannon";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { Block } from "../helpers/Block";

export function Table(props) {
  // const [table] = useCompoundBody(() => ({
  //   mass: 54,
  //   shapes: [
  //     { type: "box", mass: 50, position: [0, 0, 0], args: [5, 0.5, 5] },
  //     { type: "box", mass: 1, position: [2, -2.25, 2], args: [0.5, 4, 0.5] },
  //     { type: "box", mass: 1, position: [-2, -2.25, 2], args: [0.5, 4, 0.5] },
  //     { type: "box", mass: 1, position: [-2, -2.25, -2], args: [0.5, 4, 0.5] },
  //     { type: "box", mass: 1, position: [2, -2.25, -2], args: [0.5, 4, 0.5] },
  //   ],
  //   ...props,
  // }));

  return (
    <>
      {/* <ambientLight args={[0xffffff, 0.7]} /> */}

      <OrbitControls target={[0, 0, 0]} maxPolarAngle={2} />

      {/* <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} /> */}
      <group {...props}>
        <Block position={[0, 0, 0]} scale={[5, 0.5, 5]} />
        <Block position={[2, -2.25, 2]} scale={[0.5, 4, 0.5]} />
        <Block position={[2, -2.25, -2]} scale={[0.5, 4, 0.5]} />
        <Block position={[-2, -2.25, -2]} scale={[0.5, 4, 0.5]} />
        <Block position={[-2, -2.25, 2]} scale={[0.5, 4, 0.5]} />
      </group>
    </>
  );
}

export function Caption({ children }) {
  const width = useThree((state) => state.viewport);
  return (
    <>
      <OrbitControls target={[0, 0, 0]} maxPolarAngle={1.45} />
      <Text
        position={[0, 0, 0]}
        lineHeight={0}
        font="/fonts/Pretendard-Bold.ttf"
        fontSize={width / 2}
        material-toneMapped={false}
        anchorX="center"
        anchorY="top-baseline"
      >
        {children}
      </Text>
    </>
  );
}
