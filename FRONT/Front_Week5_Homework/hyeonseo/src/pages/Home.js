import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";

function Home() {
  const { state } = useLocation();
  const [Nickname, setName] = useState(() => {
    return (state && state.name) || localStorage.getItem("Nickname") || "Guest";
  });

  useEffect(() => {
    if (state && state.Nickname) {
      localStorage.setItem("Nickname", state.Nickname);
      setName(state.Nickname);
    }
  }, [state]);

  return (
    <>
      <div className="show_box">
        <h2 className="homeh2">{Nickname}님의 방문을 환영합니다!</h2>
      </div>
      <div className="introduce">
        <h2 className="homeh2">✌🏻현서를 소개합니다✌🏻</h2>
        <img src="./img/pro.png" alt="프로필 이미지" />
        <p className="mainp">이름: 최현서</p>
        <p className="mainp">나이: 2002년생</p>
        <p className="mainp">
          깃허브 주소:&nbsp;
          <a href="https://github.com/kittyismylife">kittyismylife</a>
        </p>
      </div>
    </>
  );
}

export default Home;
