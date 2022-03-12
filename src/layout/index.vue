// 内容页主体架子
<template>
  <AppMain />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppMain from "./components/AppMain.vue";
import ResizeMixin from "./mixin/resize";
export default defineComponent({
  components: { AppMain },
  mixins: [ResizeMixin],
});
</script>
