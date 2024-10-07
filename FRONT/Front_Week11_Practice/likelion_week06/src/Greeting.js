import React, { useEffect, useState } from "react";

const Greeting = () => {
  // 사용자 이름과 프로필 이미지를 관리할 상태 변수
  const [name, setName] = useState();
  const [profileImg, setProfileImg] = useState();

  useEffect(() => {
    // localStorage에 저장된 access token을 가져옴
    const accessToken = localStorage.getItem("accessToken");

    // 카카오 API에 access token을 사용하여 사용자 정보를 요청
    fetch("https://kapi.kakao.com/v2/user/me", {
      method: "GET",
      headers: {
        // Authorization 헤더에 Bearer token 방식으로 access token을 포함
        Authorization: `Bearer ${accessToken}`,
        "Content-type": "application/x-www-form-urlencoded",
      },
    }).then((res) => {
      const userData = res.json();
      userData.then((user) => {
        // 응답에서 사용자 정보를 추출하여 화면에 표시
        // 해당 부분에 대해서는 사용하는 API의 변수명을 참고해야 함
        setName(user.properties.nickname); // 사용자 이름 설정
        setProfileImg(user.properties.profile_image); // 사용자 프로필 이미지 설정
      });
    });
  }, []);

  return (
    <div>
      <div
        className="profile-image-div"
        style={{ backgroundImage: `url(${profileImg})` }}
      ></div>
      <h2>{name}</h2>
    </div>
  );
};

export default Greeting;
