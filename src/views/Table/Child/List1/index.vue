<template>
  <div>
    <el-table :data="list.data" highlight-current-row border stripe>
      <el-table-column label="序号" align="center" width="80" type="index">
      </el-table-column>
      <el-table-column label="姓名" align="center" width="100" prop="name" />
      <el-table-column label="角色" align="center" width="100" prop="role" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { apiList1 } from "@/api/table.ts";
import { ElLoading } from "element3";
export default defineComponent({
  name: "TableChildList1",
  components: {},
  setup() {
    const list = reactive({
      data: [],
    });
    const param = reactive({
      pageNo: 1,
      pageSize: 10,
    });
    const getList = () => {
      const loading = ElLoading.service({
        fullscreen: false,
        target: ".el-table__body-wrapper",
        text: "Loading...",
        spinner: "el-icon-loading",
      });
      apiList1(param).then((res) => {
        list.data = res.body.data;
        loading.close();
      });
    };
    onMounted(() => {
      getList();
    });
    const router = useRouter();
    const handleEdit = (item: any) => {
      router.push(`/table/child/list1/edit/${item.id}`);
    };
    const handleDelete = (item: any) => {
      console.log(`del ${item.id}`);
    };
    return {
      list,
      param,
      handleEdit,
      handleDelete,
    };
  },
});
</script>
