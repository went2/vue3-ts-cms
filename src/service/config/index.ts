/**
 * 区分开发环境与生产环境的不同配置
 */
// 1. 手动开启/关闭配置
// export const API_BASE_URL = 'https://coderwhy/org/dev'
// export const API_BASE_URL = 'https://coderwhy/org/prod'

// 2. Vite 提供的环境变量 import.meta.env.MODE / import.meta.env.DEV
// let baseURL = ''
// if (import.meta.env.MODE === 'production') {
//   baseURL = 'https://coderwhy/org/prod'
// } else if (import.meta.env.DEV) {
//   baseURL = 'https://coderwhy/org/dev'
// } else {
//   baseURL = 'https://coderwhy/org/test'
// }

// 3. Vite 会根据当前环境自动加载不同的 .env 配置文件
export const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const TIME_OUT = 10000;
