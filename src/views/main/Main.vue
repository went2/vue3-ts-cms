<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside width="200px" class="main-aside">
        <main-aside></main-aside>
      </el-aside>
      <el-container>
        <el-header>
          <main-header></main-header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainAside from '@/components/mainAside/MainAside.vue';
import MainHeader from '@/components/mainHeader/MainHeader.vue';
</script>

<style lang="less" scoped>
.main {
  height: 100%;

  .main-container {
    height: 100%;
  }
  .el-aside {
    height: 100%;
    border: 1px solid #333;
  }

  .el-header {
    border: 1px solid #333;
  }

  .el-main {
    border: 1px solid #333;
  }
}
</style>
