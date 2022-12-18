<template>
  <div class="login-panel">
    <h1 class="title">厉害的后台管理系统</h1>

    <div class="login-tabs">
      <el-tabs type="border-card" stretch v-model="activeTab" @tab-change="handleTabChange">
        <el-tab-pane name="account">
          <template #label>
            <div class="tab-label">
              <el-icon><UserFilled /></el-icon>
              <span class="tab-title">帐号登陆</span>
            </div>
          </template>
          <account-pane ref="accountRef"></account-pane>
        </el-tab-pane>

        <el-tab-pane label="手机登陆" name="phone">
          <template #label>
            <div class="tab-label">
              <el-icon><Cellphone /></el-icon>
              <span class="tab-title">手机登陆</span>
            </div>
          </template>
          <phone-pane ref="phoneRef"></phone-pane>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="control">
      <el-checkbox v-model="isKeepLogin" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      class="login-btn"
      type="primary"
      size="large"
      @click="handleLogin"
      :loading="isLoading"
    >
      立即登陆
    </el-button>
  </div>
</template>

<script setup lang="ts">
import PhonePane from './PhonePane.vue';
import AccountPane from './AccountPane.vue';
import { ElMessage } from 'element-plus';

import { ref, watch } from 'vue';
import { localCache } from '@/utils/cache';

const isKeepLogin = ref<boolean>(localCache.getCache('isKeepLogin') ?? false);
const isLoading = ref(false);

watch(isKeepLogin, (newValue) => {
  localCache.setCache('isKeepLogin', newValue);
});

const activeTab = ref('account');
const handleTabChange = () => {
  // console.log('activeName', activeTab.value);
};

const accountRef = ref<InstanceType<typeof AccountPane>>();
// 登陆按钮
const handleLogin = () => {
  isLoading.value = true;

  accountRef.value
    ?.submit(isKeepLogin.value)
    .then(() => {
      isLoading.value = false;
      ElMessage.success('登陆成功');
    })
    .catch((e) => {
      ElMessage.error(e);
      isLoading.value = false;
    });
};
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

  .login-tabs {
    .tab-label {
      display: flex;
      align-items: center;
      justify-content: center;

      .tab-title {
        margin-left: 5px;
      }
    }
  }

  .login-btn {
    width: 100%;
  }
}
</style>
