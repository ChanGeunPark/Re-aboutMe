import { useRef } from "react";

export default function LinkEffect({ children }) {
  const refs = useRef(null);

  // console.log(texts);

  return <span ref={refs}>{children}</span>;
}
