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
        {/* <Route path="week01" element={<Week01 />} />
        <Route path="week02" element={<Week02 />} />
        <Route path="week03" element={<Week03 />} />
        <Route path="week04" element={<Week04 />} /> */}
      </Routes>
    </>
  );
}

export default App;
