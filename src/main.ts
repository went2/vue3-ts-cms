import { createApp } from 'vue';
import App from './App.vue';

import 'normalize.css';
import './assets/css/index.less';
import 'element-plus/theme-chalk/el-message.css';

import router from './router';
import store from './store';
import icon from './utils/registerIcon';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(icon);
app.mount('#app');
