// 内容页主体框架
<template>
  <AppMain />
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import AppMain from "./components/AppMain.vue";
const store = useStore(),
  width = 992,
  resizeHander = () => {
    const rect = document.body.getBoundingClientRect();
    if (rect.width > width) {
      store.commit("setting/SET_COLLAPSE", false);
    } else {
      store.commit("setting/SET_COLLAPSE", true);
    }
  };
onMounted(() => {
  window.addEventListener("resize", resizeHander);
});
onUnmounted(() => {
  window.removeEventListener("resize", resizeHander);
});
</script>
