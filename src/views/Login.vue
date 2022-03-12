<template>
  <div
    class="flex flex_justify_center login_main w_100 h_100"
    @keyup.enter="login"
  >
    <!-- 中间盒子 -->
    <div class="content">
      <h3 class="t_center c_fff">登录</h3>
      <el-form ref="form" :model="param" :rules="rules">
        <el-form-item prop="name">
          <el-input
            v-model="param.name"
            prefix-icon="el-icon-user"
            placeholder="账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="param.password"
            prefix-icon="el-icon-lock"
            placeholder="密码"
            show-password
            autocomplete
          ></el-input>
        </el-form-item>
        <el-button class="w_100" type="primary" @click="login">登录</el-button>
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
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
// sotre实例
const store = useStore();
// 路由实例
const router = useRouter();
// 表单
const form = ref(null);
// 请求参数
const param = reactive({
  name: "",
  password: "",
});
// 表单校验规则
const rules = reactive({
  rules: {
    name: [
      { required: true, message: "请输入账号", trigger: "blur" },
      // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  },
});
const passInputType = ref("password");
const changeInputType = (val: string) => {
  passInputType.value = val;
};
// 登录
const login = () => {
  (form as any).value.validate((valid: boolean) => {
    if (valid) {
      store.dispatch("user/login", param).then(() => {
        router.push({ name: "Home" });
      });
    } else {
      return false;
    }
  });
};
</script>
<style lang="scss" scoped>
.login_main {
  background-color: #2d3a4b;
  .content {
    width: 460px;
    margin-top: 200px;
    h3 {
      font-size: 30px;
    }
    .el-form {
      padding-top: 30px;
      .el-form-item {
        padding-left: 10px;
        background-color: #283443;
        border: 1px solid #434c58;
        border-radius: 4px;
        .el-input {
          padding-right: 20px;
          display: inline-block;
          :deep(input) {
            height: 50px;
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
