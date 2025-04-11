import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const axiosIsntanceAuth = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
//   withCredentials: true,
});
