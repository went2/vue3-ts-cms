<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './components/LoginPanel.vue';
</script>

<style lang="less" scoped>
.login {
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  .control {
    display: flex;
    justify-content: space-between;
  }
}
</style>
