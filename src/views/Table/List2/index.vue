<template>
  <div>
    <el-table
      v-loading="loading"
      :data="list.data"
      highlight-current-row
      border
      stripe
    >
      <el-table-column
        label="序号"
        align="center"
        width="80"
        type="index"
        :index="getIndex"
      >
      </el-table-column>
      <el-table-column label="姓名" align="center" width="100" prop="name" />
      <el-table-column label="角色" align="center" width="100" prop="role" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-size="params.pageSize"
      layout="prev, pager, next"
      :total="totalCount"
      @current-change="getList"
    >
    </el-pagination>
  </div>
</template>
<script lang="ts">
export default {
  name: "TableChildList2",
};
</script>
<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { apiList2 } from "@/api/table";
const list = reactive({
  data: [],
});
const params = reactive({
  pageNo: 1,
  pageSize: 10,
});
const totalCount = ref(0);
const loading = ref(false);
const getList = (pageNo?: number) => {
  loading.value = true;
  if (pageNo) params.pageNo = pageNo;
  apiList2(params)
    .then((res: any) => {
      list.data = res.body.data;
      totalCount.value = res.body.totalCount;
    })
    .finally(() => {
      loading.value = false;
    });
};
onMounted(() => {
  getList();
});
const handleDelete = (item: { id: string }) => {
  console.log(`del ${item.id}`);
};
const getIndex = (index: number) => {
  return (params.pageNo - 1) * params.pageSize + index + 1;
};
</script>
