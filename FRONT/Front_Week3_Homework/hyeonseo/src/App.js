import React, { useState } from "react";
import Hello from "./Hello";
import Secret from "./Secret";
import Todo from "./Todo";
import Else from "./Else";
import MySite from "./MySite";
import GuestBook from "./GuestBook";

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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: 1, marginRight: "30px" }}>
          {showOtherComponent && <MySite />}
        </div>
        <div style={{ flex: 1 }}>{showOtherComponent && <GuestBook />}</div>
      </div>
      {showOtherComponent && <Todo />}
      {showOtherComponent && <Secret />}
      {showOtherComponent && <Else />}
    </div>
  );
}

export default App;
