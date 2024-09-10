import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import Menubar from "./pages/Menubar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/introduce" element={<Introduce />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
