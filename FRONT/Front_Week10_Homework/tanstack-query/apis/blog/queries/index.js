import { useMutation } from "react-query";
import { createPost } from "../axios/index";

// export const useUpdatePost = () => {
//   return useMutation({
//     mutationFn: ({ postId, title, content }) =>
//       createPost(postId, title, content),
//   });
// };

export const useGetPost = (postId) => {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPost(postId),
    enabled: !!postId,
    staleTiem: 10000,
    cacheTime: 60000,
  });
};
