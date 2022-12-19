<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isFold ? '60px' : '200px'" class="main-aside">
        <main-aside :is-fold="isFold"></main-aside>
      </el-aside>
      <el-container>
        <el-header>
          <main-header @fold-change="handleFoldChange"></main-header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MainAside from '@/components/mainAside/MainAside.vue';
import MainHeader from '@/components/mainHeader/MainHeader.vue';

const isFold = ref(false);
const handleFoldChange = (value: boolean) => {
  isFold.value = value;
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;

  .main-container {
    height: 100%;
  }
  .el-aside {
    height: 100%;
    background-color: #001529;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: left;
    cursor: pointer;
    transition: width 0.3s linear;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .el-header {
    // border: 1px solid #333;
  }

  .el-main {
    border: 1px solid #333;
  }
}
</style>
