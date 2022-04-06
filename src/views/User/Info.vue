<template>
  <div class="c-666">
    <div class="flex flex-align-center">
      <span>头像：</span>
      <el-avatar shape="square" :size="100" :src="userInfo.avatar"></el-avatar>
    </div>
    <div class="flex flex-align-center pt-20 pb-20">
      <span>姓名：</span>
      <span>{{ userInfo.name }}</span>
    </div>
    <div class="flex flex-align-center">
      <span>角色：</span>
      <span>{{ userInfo.roles.join(" | ") }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useUserStore } from "@/store/user"
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
</script>
