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
      alert("개인정보가 수정되었습니다.");

      // invalidateQueries를 사용하여 쿼리 다시 가져오기
      queryClient.invalidateQueries({ queryKey: ["mypage"] });
    },
  });
};

// 3. 마이페이지 조회
export const useMyPageFetch = (userId) => {
  return useQuery({
    queryKey: ["mypage", userId],
    queryFn: () => mypageFetch(userId),
    enabled: !!userId,
    // 30초 - stale 상태 유지
    staleTime: 30000,
    // 5분 - cacheTime 상태 유지
    cacheTime: 300000,
  });
};

// 4. 회원 정보 삭제
export const useDeleteUser = (userId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ userId }) => deleteUser(userId),
    enabled: !!userId,
    // 5분 - cacheTime 상태 유지
    cacheTime: 300000,
    onSuccess: () => {
      alert("사용자 정보가 성공적으로 삭제되었습니다.");
      // 쿼리를 무효화하는 역할 - 최신 상태 융지
      queryClient.invalidateQueries({ queryKey: ["mypage"] });
    },
  });
};
