import Axios from 'axios';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

const cookies = parseCookies();

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    Authorization: 'Bearer ' + cookies['api_token'],
  },
  withCredentials: true,
});

export default axios;
