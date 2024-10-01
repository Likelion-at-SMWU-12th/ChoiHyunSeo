import axios from "axios";

// 1. 회원가입
export const signUp = async (userinfo) => {
  // username, password를 받아 서버에 POST 요청을 보냄
  const { data } = await axios.post(`api/users/signup`, userinfo);
  return data;
};

// 2. 개인정보 수정
export const updateProfile = async (userId, updatedInfo) => {
  // 새로운 사용자 정보를 받아 PUT 요청을 받음
  const { data } = await axios.post(`api/users/profile/${userId}`, updatedInfo);
  return data;
};

// 3. 마이페이지 조회
export const mypageFetch = async (userId) => {
  // userId를 받아서 GET 요청을 보냄
  const { data } = await axios.get(`api/mypage/${userId}`);
  return data;
};

// 4. 회원 정보 삭제
export const deleteUser = async (userId) => {
  // userId를 받아서 DELETE 요청을 보냄
  const { data } = await axios.delete(`api/users/quit/${userId}`);
  return data;
};
