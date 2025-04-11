/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuthStore } from '@/store/userStore';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getListOfInterests,
  signUpRequest,
  verifyOtp,
} from './queries/userAuthQueries';
import { VerifyOtpPayload } from '@/types/signup/user';

export const useSignUp = () => {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: signUpRequest,
    onSuccess: (data: any) => {
      setUser(data);
    },
  });
};

export const useGetListOfInterests = () => {
  return useQuery({
    queryKey: ['interests'],
    queryFn: getListOfInterests,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: (payload: VerifyOtpPayload) => verifyOtp(payload),
  });
};
