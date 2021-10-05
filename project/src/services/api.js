import axios from 'axios';
import {BACKEND_URL} from '../utils/common';

const REQUEST_TIMEOUT = 3000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
