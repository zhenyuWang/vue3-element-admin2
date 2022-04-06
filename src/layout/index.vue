// 内容页主体框架
<template>
  <AppMain />
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from "vue"
import { useSettingStore } from "@/store/setting"
import AppMain from "./components/AppMain.vue"
const settingStore = useSettingStore(),
  width = 992,
  resizeHander = () => {
    const rect = document.body.getBoundingClientRect()
    if (rect.width > width) {
      settingStore.setCollapse(false)
    } else {
      settingStore.setCollapse(true)
    }
  }
onMounted(() => {
  window.addEventListener("resize", resizeHander)
})
onUnmounted(() => {
  window.removeEventListener("resize", resizeHander)
})
</script>
