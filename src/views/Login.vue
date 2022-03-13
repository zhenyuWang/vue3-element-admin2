<template>
  <div
    class="flex flex_justify_center login_box w_100 h_100"
    @keyup.enter="login"
  >
    <!-- 中间盒子 -->
    <div class="content">
      <div class="title t_center c_fff">登录</div>
      <el-form ref="form" :model="params" :rules="rules">
        <el-form-item prop="name">
          <el-input v-model="params.name" placeholder="账号">
            <template #prefix>
              <el-icon class="el-input__icon"><user /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="params.password"
            placeholder="密码"
            show-password
            autocomplete="on"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-button class="w_100" size="large" type="primary" @click="login"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "Login",
};
</script>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";
const userStore = useUserStore();
// 路由实例
const router = useRouter();
// 表单
const form = ref(null);
// 请求参数
const params = reactive({
  name: "",
  password: "",
});
// 表单校验规则
const rules = reactive({
  name: [
    { required: true, message: "请输入账号", trigger: "blur" },
    // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
const passInputType = ref("password");
const changeInputType = (val: string) => {
  passInputType.value = val;
};
// 登录
const login = () => {
  (form as any).value.validate((valid: boolean) => {
    if (valid) {
      userStore.login(params).then(() => {
        router.push({ name: "Home" });
      });
    } else {
      return false;
    }
  });
};
</script>
<style lang="scss" scoped>
.login_box {
  background-color: #2d3a4b;
  .content {
    width: 460px;
    margin-top: 200px;
    .title {
      font-size: 30px;
    }
    :deep(.el-form) {
      padding-top: 30px;
      .el-form-item {
        background-color: #283443;
        border: 1px solid #5b9bc8;
        border-radius: 4px;
        .el-input {
          .el-input__inner {
            box-shadow: none;
          }
          input {
            height: 50px;
            padding-right: 30px;
            font-size: 16px;
            background-color: transparent;
            border: none;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
