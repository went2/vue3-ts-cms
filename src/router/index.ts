import { LOGIN_TOKEN } from '@/global/constants';
import { localCache } from '@/utils/cache';
import { createRouter, createWebHashHistory } from 'vue-router';
import { firstMenu } from '@/utils/mapMenuToRoutes';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue'),
    },
    {
      name: 'main',
      path: '/main',
      component: () => import('../views/main/Main.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/notFound/NotFound.vue'),
    },
  ],
});

router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN);
  if (to.path === '/main' && !token) {
    return '/login';
  }

  if (to.path === '/main') {
    return firstMenu.path;
  }
});

export default router;
