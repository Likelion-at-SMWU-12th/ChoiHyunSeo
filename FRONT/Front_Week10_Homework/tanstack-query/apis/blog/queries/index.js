import { useMutation, useQuery, useQueryClient } from "react-query";

import { signUp } from "../axios/index";
import { updateProfile } from "../axios/index";
import { mypageFetch } from "../axios/index";
import { deleteUser } from "../axios/index";

// 1. 회원가입
export const useSignUp = (username, password) => {
  // useMutation - 데이터 변이에 사용되는 hook
  return useMutation({
    mutationFn: ({ username, password }) => signUp(username, password),
    enabled: !!username && !!password,
    onSuccess: () => {
      alert("환영합니다"); // 조건에 만족하면 메세지 출력
    },
  });
};

// 2. 개인정보 수정
export const useUpdateProfile = (userId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ userId, updatedInfo }) => updateProfile(userId, updatedInfo),
    enabled: !!userId,
    onSuccess: () => {
      alert("개인 정보가 수정되었습니다");

      // invalidateQueries를 사용하여 쿼리 다시 가져오기
      queryClient.invalidateQueries({ queryKey: ["mypage"] });
    },
  });
};
