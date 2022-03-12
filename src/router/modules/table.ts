import Layout from "@/layout/index.vue";
export default {
  path: "/table",
  name: "Table",
  meta: { title: "表格", icon: "el-icon-s-data" },
  redirect: "/table/child/list1",
  component: Layout,
  children: [
    {
      path: "child/list1",
      name: "TableChildList1",
      meta: { title: "表格1-列表1", needCache: true },
      component: () => import("@/views/Table/Child/List1/index.vue"),
    },
    {
      path: "child/list1/edit/:id",
      name: "TableChildList1Edit",
      meta: { title: "表格1-列表1-编辑", needCache: true },
      props: true,
      hidden: true,
      component: () => import("@/views/Table/Child/List1/Edit.vue"),
    },
    {
      path: "child/list2",
      name: "TableChildList2",
      meta: { title: "表格1-列表2", needCache: true },
      component: () => import("@/views/Table/Child/List2/index.vue"),
    },
  ],
};
