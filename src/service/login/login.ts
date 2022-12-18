import request from '../';

import type { IAccount, ILoginRequest } from '@/types/login.d';

export function login(data: ILoginRequest): Promise<IAccount> {
  return request.post({
    url: '/login',
    data,
  });
}

export function getUserInfo(id: number) {
  return request.get({
    url: `/users/${id}`,
  });
}

export function getUserMenu(role: number) {
  return request.get({
    url: `/role/${role}/menu`,
  });
}
