<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="36" :src="avatar"></el-avatar>
    </span>
    <el-dropdown-menu>
      <el-dropdown-item @click="goUserInfo">个人中心</el-dropdown-item>
      <el-dropdown-item @click="signout">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "",
  setup() {
    const store = useStore();
    const router = useRouter();
    const goUserInfo = () => {
      router.push({ name: "UserInfo" });
    };
    const signout = () => {
      store.dispatch("user/signout").then(() => {
        router.push({ name: "Login" });
      });
    };
    return { goUserInfo, signout };
  },
  computed: {
    avatar() {
      return useStore().getters.userInfo.avatar;
    },
  },
});
</script>
