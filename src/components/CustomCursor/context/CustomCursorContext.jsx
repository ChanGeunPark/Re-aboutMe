import { createContext } from "react";

const CustomCursorContext = createContext({
  type: "default",
  setType: (type) => {},
});

export default CustomCursorContext;
