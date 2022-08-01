import { useState } from "react";
import CustomCursorContext from "./CustomCursorContext";

//React Context 개념 알기
export default function CustomCursorManager({ children }) {
  const [type, setType] = useState("default");

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
}
