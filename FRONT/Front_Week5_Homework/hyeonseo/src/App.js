import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Early from "./pages/Early";
import Home from "./pages/Home";
import User from "./pages/UserPage";
import Menubar from "./pages/Menubar";

function App() {
  const [info, setInfo] = useState(null);

  const handleInfoSubmit = (data) => {
    setInfo(data);
  };

  return (
    <>
      <Menubar />
      <Routes>
        <Route path="/" element={<Early />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
