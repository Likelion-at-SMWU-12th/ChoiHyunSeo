import { useMutation, useQuery, useQueryClient } from "react-query";

import { signUp } from "../axios/index";
import { updateProfile } from "../axios/index";
import { mypageFetch } from "../axios/index";
import { deleteUser } from "../axios/index";

export const useSignUp = (username, password) => {
  return useMutation({
    mutationFn: ({ username, password }) => signUp(username, password),
    enabled: !!username && !!password,
    onSuccess: () => {
      alert("환영합니다");
    },
  });
};
