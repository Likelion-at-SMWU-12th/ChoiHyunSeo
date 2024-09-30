import { useMutation } from "react-query";
import { createPost } from "../axios/index";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: ({ title, content }) => createPost(title, content),
  });
};
