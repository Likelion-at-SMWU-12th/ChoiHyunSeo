import React, { useEffect } from "react";
import kakao_btn_img from "./kakao_login_large_narrow.png";
import google_btn_img from "./web_light_sq_SI@2x.png";

const Login = () => {
  const authServerLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
  const handleKakao = () => {
    window.location.href = authServerLink;
  };

  return (
    <div>
      <h2>로그인</h2>
      <div className="btns-container">
        <button onClick={handleKakao}>
          <img src={kakao_btn_img} alt="kakao_btn" />
        </button>
        <button>
          <img src={google_btn_img} alt="google_btn" />
        </button>
      </div>
    </div>
  );
};

export default Login;
