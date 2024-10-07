import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Redirection = () => {
  // URL에서 authorization code를 추출
  const [params] = useSearchParams();
  const authCode = params.get("code");
  const grant_type = "authorization_code";
  const navigate = useNavigate();

  useEffect(() => {
    // authorization code를 이용하여 카카오로부터 access token을 요청
    fetch(
      // 카카오 token endpoint로 POST 요청을 보냄
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${authCode}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // POST 요청에 맞는 헤더 설정
        },
      }
    ).then((res) => {
      // 응답에서 액세스 토큰을 추출
      const data = res.json();
      data.then((data) => {
        // access token을 localStorage에 저장하여 이후 API 요청에 사용
        localStorage.setItem("accessToken", data.access_token);

        // 인증이 완료되면 Greeting 페이지로 이동
        navigate("/greeting");
      });
    });
  }, []);
  return <div>Redirection Page: 카카오 로그인 중…</div>;
};

export default Redirection;
