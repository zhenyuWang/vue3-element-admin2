<template>
  <h1 class="c-3477F2">{{ msg }}</h1>
  <p>{{ count }}</p>
  <el-button class="plus" type="primary" @click="count++"> plus </el-button>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue"
// 获取 props
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
const count = ref(0)
</script>
<style lang="scss" scoped>
p {
  padding: 20px 0;
  font-size: 20px;
  color: red;
}
</style>
