import { createApp } from 'vue';
import App from './App.vue';

import 'normalize.css';
import './assets/css/index.less';
import 'element-plus/theme-chalk/el-message.css';

import router from './router';
import pinia from './store';
import registerIcon from './utils/registerIcon';

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(registerIcon);
app.mount('#app');
