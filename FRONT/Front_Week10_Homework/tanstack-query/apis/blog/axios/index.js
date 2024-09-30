import axios from "axios";

export const createPost = async (newPost) => {
  const { data } = await axios.post("/api/posts", newPost);
  return data;
};
