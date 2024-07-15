// Home.js

import React from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const { state } = useLocation();
  const { name } = state;

  return (
    <div>
      <h2>Welcome Home!</h2>
      <p>Name: {name}</p>
      {/* 여기에서 데이터를 사용할 수 있습니다. */}
    </div>
  );
}

export default Home;
