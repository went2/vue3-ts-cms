/**
 * export a request object
 */
import Request from './request';
import { API_BASE_URL, TIME_OUT } from './config';
import { localCache } from '@/utils/cache';
import { LOGIN_TOKEN } from '@/global/constants';

const request = new Request({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT,
  interceptorHooks: {
    requestInterceptor: (config) => {
      const token = localCache.getCache(LOGIN_TOKEN);
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res.data;
    },
    responseInterceptorCatch: (err) => {
      return err;
    },
  },
});

export default request;
