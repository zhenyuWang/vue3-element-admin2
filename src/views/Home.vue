<template>
  <div class="box t_center">
    <img src="@/assets/img/snail.png" alt="" />
    <hello-world
      msg="Vite2 + Vue3 + Pinia + ElementPlus + TS + jest + cypress buy running snail!"
    />
  </div>
</template>
<script lang="ts">
"Home";
</script>
<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
</script>
<style lang="scss" scoped>
.box {
  padding-top: 100px;
  > img {
    width: 100px;
    height: auto;
    margin-bottom: 20px;
    border-radius: 50%;
  }
}
</style>
