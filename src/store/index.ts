import { createPinia } from 'pinia';
import type { App } from 'vue';
import useLoginStore from './login/login';

export default function (app: App) {
  const store = createPinia();
  app.use(store);

  // 每次初始化 app 时添加路由
  const loginStore = useLoginStore();
  loginStore.setStoreFromLocal();
}
