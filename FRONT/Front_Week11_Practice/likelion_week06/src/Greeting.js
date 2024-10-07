import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [name, setName] = useState();
  const [profileImg, setProfileImg] = useState();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    fetch("https://kapi.kakao.com/v2/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-type": "application/x-www-form-urlencoded",
      },
    }).then((res) => {
      const userData = res.json();
      userData.then((user) => {
        // 로그인에 성공하면 사용자 데이터를 불러와서 화면에 뿌림
        setName(user.properties.nickname);
        setProfileImg(user.properties.profile_image);
      });
    });
  }, []);
  return (
    <div>
      <div
        className="profile-image-div"
        // 이미지 파일의 경우, 변수로 받와서 사용
        style={{ backgroundImage: `url(${profileImg})` }}
      ></div>
      <h2>{name}</h2>
    </div>
  );
};

export default Greeting;
