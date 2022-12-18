<template>
  <div class="phone-pane">
    <el-form label-width="60px" ref="formRef" status-icon>
      <el-form-item label="手机号" prop="phone">
        <el-input />
      </el-form-item>
      <el-form-item label="验证码" prop="validate">
        <div class="validate">
          <el-input />
          <el-button type="primary" class="validate-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.phone-pane {
  .validate {
    display: flex;

    .validate-btn {
      margin-left: 15px;
    }
  }
}
</style>
