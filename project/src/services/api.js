import axios from 'axios';

const REQUEST_TIMEOUT = 3000;
const BACKEND_URL = 'https://www.cbr-xml-daily.ru';

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
