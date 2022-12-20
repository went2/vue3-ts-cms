import { defineStore } from 'pinia';
import type { ILoginRequest } from '@/types/login.d';
import { localCache } from '@/utils/cache';
import { LOGIN_TOKEN, USER_INFO, USER_MENU } from '@/global/constants';
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
    userInfo: localCache.getCache(USER_INFO) ?? {},
    menu: localCache.getCache(USER_MENU) ?? [],
  }),
  actions: {
    async userLoginAction(data: ILoginRequest) {
      const info = await login(data);
      const id = info.id;
      const token = info.token;
      this.token = token;
      localCache.setCache(LOGIN_TOKEN, token);

      // get user info
      const userInfoResult = await getUserInfo(id);
      this.userInfo = userInfoResult;

      // get user menus
      const menuResult = await getUserMenu(this.userInfo.role.id);
      this.menu = menuResult;

      // 本地缓存
      localCache.setCache(USER_INFO, userInfoResult);
      localCache.setCache(USER_MENU, menuResult);

      // 动态添加路由对象
      menuResult.forEach((item: any) => {
        const firstMenu = item.url.split('/')[2];

        if (item.children) {
          // 添加一级菜单路由
          router.addRoute('main', {
            path: item.url,
            redirect: item.children[0].path,
            children: item.children.map((secondMenu: any) => ({
              path: secondMenu.url,
              components: () => import(`@/views/${firstMenu}/${secondMenu.url.split('/')[3]}`),
            })),
          });
        }
      });

      // go to main page
      router.push('/main');
    },
    userLogoutAction() {
      localCache.removeCache(LOGIN_TOKEN);
      localCache.removeCache(USER_INFO);
      localCache.removeCache(USER_MENU);
      router.push('/login');
    },
  },
});

export default useLoginStore;
