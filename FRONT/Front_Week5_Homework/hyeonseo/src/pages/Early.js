import React from "react";
import { Link } from "react-router-dom";
import "./Early.css";

const Early = () => {
  return (
    <>
      <div className="show_main">
        <h2 className="alt1">Welcome to Meow World!</h2>
        <br />
        <Link to="/home" className="buttonGo">
          Connecting to the Meow World
        </Link>
      </div>
    </>
  );
};

export default Early;
