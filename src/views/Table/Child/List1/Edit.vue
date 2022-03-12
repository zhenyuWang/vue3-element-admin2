<template>
  <div>
    <div>表格1-列表1-编辑</div>
    <div>姓名：{{ userInfo.name }}</div>
    <div>角色：{{ userInfo.role }}</div>
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue";
import { apiItemInfo } from "@/api/table";
export default defineComponent({
  name: "TableChildList1Edit",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const getInfo = () => {
      apiItemInfo({ id: props.id }).then((res) => {
        userInfo.data = res.body.data;
      });
    };
    const userInfo = reactive({
      data: {
        name: "",
        role: "",
      },
    });
    getInfo();
    return {
      userInfo,
    };
  },
});
</script>
