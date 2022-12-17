<template>
  <div class="login-panel">
    <h1 class="title">厉害的后台管理系统</h1>
    <div class="form">表单</div>
    <div class="control">
      <el-checkbox v-model="isKeepLogin" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" size="large"> 立即登陆 </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isKeepLogin = ref(false);
</script>

<style lang="less" scoped>
.login-panel {
  width: 350px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 1rem;
  }
  .control {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
  }
}
</style>
