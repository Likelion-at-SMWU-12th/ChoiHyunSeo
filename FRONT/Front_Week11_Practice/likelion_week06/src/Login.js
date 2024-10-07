import React from "react";
import kakao_btn_img from "./kakao_login_large_narrow.png";
import google_btn_img from "./web_light_sq_SI@2x.png";

const Login = () => {
  // 카카오 인증 서버에 보낼 URL을 구성
  // 사용자에게 authorization code를 요청하는 단계
  // .env에 저장되어 있는 값들을 불러와서 사용함
  const authServerLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

  // 카카오 로그인 버튼 클릭 시 카카오 인증 서버로 리다이렉트!
  const handleKakao = () => {
    // 카카오 인증 서버로 이동하여 사용자에게 로그인 화면을 제공하고, authorization code를 발급 받음
    window.location.href = authServerLink;
  };

  return (
    <div>
      <h2>로그인</h2>
      <div className="btns-container">
        {/* 카카오 로그인 버튼 */}
        <button onClick={handleKakao}>
          <img src={kakao_btn_img} alt="kakao_button" />
        </button>
        {/* 구글 로그인 버튼 */}
        <button>
          <img src={google_btn_img} alt="google_button" />
        </button>
      </div>
    </div>
  );
};

export default Login;
