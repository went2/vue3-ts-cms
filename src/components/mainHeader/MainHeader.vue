<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleMenuIconClick">
      <el-icon size="28">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">面包屑</div>
      <div class="info">
        <header-info />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import HeaderInfo from './components/HeaderInfo.vue';

const emit = defineEmits(['fold-change']);
const isFold = ref(false);

const handleMenuIconClick = () => {
  isFold.value = !isFold.value;
  emit('fold-change', isFold.value);
};
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 16px;
  }
}
</style>
