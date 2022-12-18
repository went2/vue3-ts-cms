<template>
  <div class="main">
    <h2>This is Main Page</h2>
    <el-button @click="handleLogout" type="primary">退出登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from '@/global/constants';
import router from '@/router';
import { localCache } from '@/utils/cache';

const handleLogout = () => {
  localCache.removeCache(LOGIN_TOKEN);
  router.push('/login');
};
</script>

<style lang="less" scoped>
.main {
  color: #333;
}
</style>
