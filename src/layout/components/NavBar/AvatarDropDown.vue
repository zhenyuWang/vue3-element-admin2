<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="36" :src="avatar"></el-avatar>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="goUserInfo">个人中心</el-dropdown-item>
        <el-dropdown-item @click="signOut">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { computed } from "vue"
import { useUserStore } from "@/store/user"
import { useRouter } from "vue-router"
const userStore = useUserStore()
const router = useRouter()
const goUserInfo = () => {
  router.push({ name: "UserInfo" })
}
const signOut = () => {
  userStore.logout(router)
}
const avatar = computed(() => userStore.userInfo.avatar)
</script>
