import { RoundedBox } from "@react-three/drei";
import { forwardRef } from "react";

export const Block = forwardRef(
  // react 컴포넌트에 ref prop을 넘겨서 그 내부에 있는 HTML 엘리먼트에 접근을 하게 해주는 함수
  (
    {
      children,
      transparent = false,
      opacity = 1,
      color = "white",
      args = [1, 1, 1],
      ...props
    },
    ref
  ) => {
    return (
      <RoundedBox args={args} receiveShadow castShadow ref={ref} {...props}>
        <meshStandardMaterial
          color={color}
          transparent={transparent}
          opacity={opacity}
        />
        {children}
      </RoundedBox>
    );
  }
);
