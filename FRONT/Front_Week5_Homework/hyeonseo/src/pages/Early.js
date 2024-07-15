import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Early.css";

function Early() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("name");
    console.log("접속되었습니다.");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home", { state: { name } });
  };

  return (
    <div className="show_main">
      <h2 className="alt1">Welcome to Meow World!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nickname:&nbsp;&nbsp;
          <input
            className="input_info"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button className="buttonGo" type="submit">
          Connecting to the Meow World
        </button>
      </form>
    </div>
  );
}

export default Early;
