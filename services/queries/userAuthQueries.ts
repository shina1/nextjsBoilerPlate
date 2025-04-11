/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosIsntanceAuth } from '@/lib/api/axiosInstance';
import { SignupPayload, VerifyOtpPayload } from '@/types/signup/user';
import ENUM from '../enum';

export const signUpRequest = async (payload: SignupPayload) => {
  try {
    const response = await axiosIsntanceAuth.post(ENUM.USER_SIGNUP, payload);
    if (response?.status == 201) return response?.data;
  } catch (error: any) {
    console.log('error', error);
  }
};

// Signup successful, OTP has been sent to your email for verification.
export const getListOfInterests = async () => {
  try {
    const response = await axiosIsntanceAuth.get(ENUM.GET_LIST_OF_INTERESTS);
    console.log('response', response);
  } catch (error) {
    console.log('error', error);
  }
};

export const verifyOtp = async (payload: VerifyOtpPayload) => {
  try {
    const response = await axiosIsntanceAuth.post(ENUM.VERIFY_OTP, payload);
    console.log('response', response);
  } catch (error) {
    console.log(error);
  }
};
