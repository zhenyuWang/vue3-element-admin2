<template>
  <div>
    <div>表格1-列表1-编辑</div>
    <div>姓名：{{ userInfo.name }}</div>
    <div>角色：{{ userInfo.role }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, reactive } from "vue"
import { apiItemInfo } from "@/api/table"

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})
const userInfo = reactive({
  name: "",
  role: "",
})
const getInfo = () => {
  apiItemInfo({ id: props.id }).then((res) => {
    const data = res.body.data
    userInfo.name = data.name
    userInfo.role = data.role
  })
}
getInfo()
</script>
