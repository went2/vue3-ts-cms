<template>
  <div class="header-info">
    <span>
      <el-icon size="20"><Bell /></el-icon>
    </span>
    <span>
      <el-icon size="20"><Box /></el-icon>
      <span class="dot"></span>
    </span>
    <span>
      <el-dropdown>
        <el-avatar :size="26" src="https://www.w3schools.com/howto/img_avatar.png" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
            <el-dropdown-item divided>个人信息</el-dropdown-item>
            <el-dropdown-item>跳至旧版</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </span>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login';

const loginStore = useLoginStore();

const handleLogout = () => {
  loginStore.userLogoutAction();
};
</script>

<style lang="less" scoped>
.header-info {
  display: flex;
  align-items: center;

  span {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 16px;
    cursor: pointer;
  }

  .dot {
    position: absolute;
    top: -2px;
    left: 5px;
    width: 6px;
    height: 6px;
    background-color: red;
    border: 1px solid red;
    border-radius: 100%;
  }
}
</style>
