<template>
  <div class="main-aside">
    <div class="brand">
      <img src="@/assets/images/logo.png" alt="" class="logo" />
      <h2 v-show="!isFold" class="title">后台管理系统</h2>
    </div>

    <el-menu
      active-text-color="#fff"
      background-color="#001529"
      :collapse="isFold"
      class="el-menu-vertical-demo"
      :default-active="defaultActive"
      text-color="#b7bdc3"
    >
      <template v-for="item in menu" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <!-- dynamic component: el-icon-setting => <Setting /> -->
            <el-icon>
              <component :is="item.icon.split('el-icon-')[1]" />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>

          <template v-for="subMenu in item.children" :key="subMenu.id">
            <el-menu-item :index="subMenu.id + ''" @click="handleSubMenuClick(subMenu.url)">
              {{ subMenu.name }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import useLoginStore from '@/store/login/login';
import { mapPathToMenu } from '@/utils/mapMenu';

defineProps({
  isFold: {
    type: Boolean,
    default: false,
  },
});

const { menu } = useLoginStore();

const router = useRouter();
const route = useRoute();
const currentRoute = mapPathToMenu(route.path, menu);
const defaultActive = ref(currentRoute.id + '');

const handleSubMenuClick = (path: string) => {
  router.push(path);
};
</script>

<style lang="less" scoped>
.main-aside {
  .brand {
    display: flex;
    align-items: center;
    white-space: nowrap;
    padding: 0 10px;
    .logo {
      width: 50px;
      height: 50px;
    }
    .title {
      margin-left: 10px;
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
