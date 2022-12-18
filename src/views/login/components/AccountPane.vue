<template>
  <div class="account-pane">
    <el-form label-width="60px" :model="form" :rules="rules" ref="formRef" status-icon>
      <el-form-item label="帐号" prop="account">
        <el-input v-model="form.account" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineExpose } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import useLoginStore from '@/store/login/login';
import { localCache } from '@/utils/cache';

const formRef = ref<FormInstance>();
const form = reactive({
  account: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? '',
});

const rules: FormRules = {
  account: [
    { required: true, message: '请输入帐号', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9]{3,}$/, message: '帐号长度需在3位以上', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9]{5,}$/, message: '密码长度需在5位以上', trigger: 'blur' },
  ],
};

const loginStore = useLoginStore();

const submit = (isKeepLogin: boolean) => {
  return new Promise((resolve, reject) => {
    formRef.value?.validate((isValid) => {
      if (!isValid) {
        reject('请填写正确的登陆信息');
      }
      const name = form.account;
      const password = form.password;

      loginStore
        .userLoginAction({ name, password })
        .then(() => {
          if (isKeepLogin) {
            localCache.setCache('name', name);
            localCache.setCache('password', password);
          } else {
            localCache.removeCache('name');
            localCache.removeCache('password');
          }
          resolve(1);
        })
        .catch((e) => {
          reject(e);
        });
    });
  });
};

defineExpose({
  submit,
});
</script>

<style lang="less" scoped>
.account-pane {
  color: #333;
}
</style>
