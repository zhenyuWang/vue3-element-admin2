<template>
  <div>
    <el-table
      v-loading="loading"
      :data="list.data"
      highlight-current-row
      border
      stripe
    >
      <el-table-column label="序号" align="center" width="80" type="index">
      </el-table-column>
      <el-table-column label="姓名" align="center" width="100" prop="name" />
      <el-table-column label="角色" align="center" width="100" prop="role" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button
            size="small"
            type="primary"
            @click="handleEdit(scope.row.id)"
            >编辑</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
export default {
  name: "TableChildList1",
}
</script>

<script setup lang="ts">
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { apiList1 } from "@/api/table"

const router = useRouter()
const list = reactive({
  data: [],
})
const params = reactive({
  pageNo: 1,
  pageSize: 10,
})
const loading = ref(false)
const getList = () => {
  loading.value = true
  apiList1(params)
    .then((res: any) => {
      list.data = res.body.data
    })
    .finally(() => {
      loading.value = false
    })
}
getList()
const handleEdit = (id: string) => {
  router.push({
    name: "TableList1Edit",
    params: {
      id,
    },
  })
}
const handleDelete = (id: string) => {
  console.log(`del ${id}`)
}
</script>
