import "./App.css";
import { Routes, Route } from "react-router-dom";
import Early from "./pages/Early";
import Home from "./pages/Home";
import Menubar from "./pages/Menubar";

function App() {
  return (
    <>
      <Menubar />
      <Routes>
        <Route path="/" element={<Early />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
