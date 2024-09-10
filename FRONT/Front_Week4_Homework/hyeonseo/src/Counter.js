import React, { useState } from "react";
import "./Counter.css";

const Counter = (props) => {
  const [state, setState] = useState(0);

  const handleDonate = () => {
    setState(state + 100);
  };

  return (
    <div className="counter-container">
      <h1>
        {props.name}님의 사료 후원 금액: {state}원
      </h1>
      <button className="donate-button" onClick={handleDonate}>
        100원 후원하기
      </button>
    </div>
  );
};

export default Counter;
