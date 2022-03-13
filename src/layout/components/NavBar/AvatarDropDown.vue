<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="36" :src="avatar"></el-avatar>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="goUserInfo">个人中心</el-dropdown-item>
        <el-dropdown-item @click="signout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
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
const avatar = computed(() => useStore().getters.userInfo.avatar);
</script>
