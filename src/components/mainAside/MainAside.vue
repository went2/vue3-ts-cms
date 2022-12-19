<template>
  <div class="main-aside">
    <div class="brand">
      <img src="@/assets/images/logo.png" alt="" class="logo" />
      <h1 class="title">后台管理系统</h1>
    </div>

    <el-menu
      active-text-color="#fff"
      background-color="#001529"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#b7bdc3"
    >
      <el-sub-menu v-for="item in menu" :key="item.id">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>{{ item.name }}</span>
        </template>

        <el-menu-item v-for="subMenu in item.children" :key="subMenu.id">
          {{ subMenu.name }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache';
import { USER_MENU } from '@/global/constants';

const menu = localCache.getCache(USER_MENU);
</script>

<style lang="less" scoped>
.main-aside {
  .brand {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .logo {
      width: 50px;
      height: 50px;
    }
    .title {
      color: #fff;
      font-size: 20px;
    }
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }
  .el-menu-item:hover {
    color: #fff;
  }
  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
