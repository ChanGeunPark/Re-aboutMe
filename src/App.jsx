import "./App.css";
import CarEffect from "./routes/CarEffect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headers from "./components/Headers";
import Home from "./routes/Home";

function App() {
  return (
    <div>
      <Headers />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CarEffect" element={<CarEffect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
