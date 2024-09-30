import axios from "axios";

export const signUp = async (userinfo) => {
  const { data } = await axios.post(`api/users/signup`, userinfo);
  return data;
};
