export interface User {
  email: string;
  phone_number: string;
}

export interface UserAuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export interface SignupPayload {
  email: string;
  phone_number: string;
  password: string;
}

export interface VerifyOtpPayload {
  email: string;
  otp: string;
  need_tokens: boolean; // use false if you don't need auth tokens to be returned
  need_otp_token: boolean;
}
