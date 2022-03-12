<template>
  <h1 class="c_3477F2">{{ msg }}</h1>
  <p>{{ count }}</p>
  <el-button class="plus" type="primary" @click="count++"> plus </el-button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup() {
    const count = ref(0);
    return { count };
  },
});
</script>
<style lang="scss" scoped>
p {
  padding: 20px 0;
  font-size: 20px;
  color: red;
}
</style>
