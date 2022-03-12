<template>
  <div class="box t_center">
    <img src="@/assets/img/avatar.png" alt="" />
    <HelloWorld
      msg="Vite2 + Vue3 + Element3 + TS + SASS + jest + cypress buy wzy!"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    return {};
  },
});
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
