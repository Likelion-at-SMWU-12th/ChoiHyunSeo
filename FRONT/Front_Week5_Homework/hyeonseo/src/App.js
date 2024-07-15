import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menubar from "./pages/Menubar";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="/home" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
