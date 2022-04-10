<template>
  <div class="collapse_box pr-20 pointer" @click="changeCollapse">
    <el-icon v-show="isCollapse"><expand /></el-icon>
    <el-icon v-show="!isCollapse"><fold /></el-icon>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useSettingStore } from "@/store/setting"

const settingStore = useSettingStore()
const { isCollapse } = storeToRefs(settingStore)
const changeCollapse = () => {
  settingStore.setCollapse(!isCollapse.value)
}
</script>
