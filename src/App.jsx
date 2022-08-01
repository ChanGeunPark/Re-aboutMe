import "./App.css";
import CarEffect from "./routes/CarEffect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headers from "./components/Headers";
import Home from "./routes/Home";
import CustomCursorManager from "./components/CustomCursor/context/manager";

function App() {
  return (
    <div>
      <CustomCursorManager>
        <Headers />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CarEffect" element={<CarEffect />} />
          </Routes>
        </BrowserRouter>
      </CustomCursorManager>
    </div>
  );
}

export default App;
