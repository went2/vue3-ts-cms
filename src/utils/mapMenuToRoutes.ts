import router from '@/router';
import type { RouteRecordRaw } from 'vue-router';
import useLoginStore from '@/store/login/login';

export default function mapMenuToRoutes() {
  // 获取全部本地路由
  const localRoutes: RouteRecordRaw[] = [];
  const files: Record<string, any> = import.meta.glob('@/router/main/**/*.ts', {
    eager: true,
  });
  for (const key in files) {
    localRoutes.push(files[key].default);
  }

  const loginStore = useLoginStore();
  const menu = loginStore.menu;

  // 根据菜单，添加routes
  addDynamicRoutes(menu, localRoutes);
}

function addDynamicRoutes(menu: any, localRoutes: RouteRecordRaw[]) {
  for (const topMenu of menu) {
    for (const subMenu of topMenu.children) {
      const routeObj = localRoutes.find((route) => route.path === subMenu.url);
      if (routeObj) {
        router.addRoute('main', routeObj);
      }
    }
  }
}
