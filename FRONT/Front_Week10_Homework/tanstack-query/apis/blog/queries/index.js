import { useMutation } from "react-query";
import { createPost } from "../axios/index";
import { useQueryClient } from "@tanstack/react-query";

// export const useUpdatePost = () => {
//   return useMutation({
//     mutationFn: ({ postId, title, content }) =>
//       createPost(postId, title, content),
//   });
// };

// export const useGetPost = (postId) => {
//   return useQuery({
//     queryKey: ["post", postId],
//     queryFn: () => getPost(postId),
//     enabled: !!postId,
//     staleTiem: 10000,
//     cacheTime: 60000,
//   });
// };

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postId,
    onSuccess: () => {
      alert("게시글 삭제");
      queryClient.invalidateQueries("postList");
    },
  });
};
