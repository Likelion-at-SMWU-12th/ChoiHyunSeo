import React, { useState } from "react";
import Hello from "./Hello";
import Secret from "./Secret";
import Todo from "./Todo";
import Else from "./Else";
import MySite from "./MySite";
import GuestBook from "./GuestBook";
import "./Week03.css";

function Week03() {
  const [showOtherComponent, setShowOtherComponent] = useState(false);

  return (
    <div className="show">
      <div id="mainbox" className="mainBoxStyle">
        <h1 className="headingStyle">🪐 Welcome to My Space 🪐</h1>
        <Hello setShowOtherComponent={setShowOtherComponent} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 1, marginRight: "30px" }}>
            {showOtherComponent ? <MySite /> : null}
          </div>
          <div style={{ flex: 1 }}>
            {showOtherComponent ? <GuestBook /> : null}
          </div>
        </div>
        {showOtherComponent && <Todo />}
        {showOtherComponent && <Secret />}
        {showOtherComponent && <Else />}
      </div>
    </div>
  );
}

export default Week03;
