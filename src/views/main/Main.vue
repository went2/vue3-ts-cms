<template>
  <div class="main">
    <h2>This is Main Page</h2>
    <h3>{{ counterStore.count }} - {{ counterStore.doubleCount }}</h3>
    <button @click="changeCount">Add 1</button>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '@/store/counter';

const counterStore = useCounterStore();

const changeCount = () => {
  counterStore.addOneAction();
};
</script>

<style lang="less" scoped>
.main {
  color: #333;
}
</style>
