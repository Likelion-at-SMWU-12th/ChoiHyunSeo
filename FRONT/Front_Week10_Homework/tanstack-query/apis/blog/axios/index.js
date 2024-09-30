import axios from "axios";

// export const createPost = async (newPost) => {
//   const { data } = await axios.post("/api/posts", newPost);
//   return data;
// };

// export const useUpdatePost = () => {
//   return useMutation({
//     mutationFn: ({ postId, title, content }) =>
//       useUpdatePost(postId, title, content),
//   });
// };

export const createPost = async (postId) => {
  const { data } = await axios.post(`/api/posts/${postId}`);
  return data;
};
