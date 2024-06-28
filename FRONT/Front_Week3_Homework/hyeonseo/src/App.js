import React, { useState } from "react";
import Hello from "./Hello";
import Secret from "./Secret";
import Else from "./Else";

function App() {
  const [showOtherComponent, setShowOtherComponent] = useState(false);

  const mainBoxStyle = {
    height: "1000hv",
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    fontSize: "40px",
    color: "black",
    marginBottom: "20px",
  };

  return (
    <div id="mainbox" style={mainBoxStyle}>
      <h1 style={headingStyle}>🪐 Welcome to My Space 🪐</h1>
      <Hello setShowOtherComponent={setShowOtherComponent} />
      {showOtherComponent && <Secret />}
      {showOtherComponent && <Else />}
    </div>
  );
}

export default App;
