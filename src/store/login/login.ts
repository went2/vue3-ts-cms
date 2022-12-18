import { defineStore } from 'pinia';
import type { ILoginRequest } from '@/types/login.d';
import { localCache } from '@/utils/cache';
import { LOGIN_TOKEN } from '@/global/constants';
import router from '@/router';
import { login, getUserInfo, getUserMenu } from '@/service/login/login';

interface IState {
  token: string;
  userInfo: any;
  menu: any[];
}

const useLoginStore = defineStore('login', {
  state: (): IState => ({
    token: '',
    userInfo: {},
    menu: [],
  }),
  actions: {
    async userLoginAction(data: ILoginRequest) {
      const info = await login(data);
      const id = info.id;
      this.token = info.token;

      // 本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token);

      // get user info
      this.userInfo = await getUserInfo(id);

      // get user menus
      this.menu = await getUserMenu(this.userInfo.role.id);

      // go to main page
      router.push('/main');
    },
  },
});

export default useLoginStore;
