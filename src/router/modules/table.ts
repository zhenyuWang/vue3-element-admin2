const Layout = () => import("@/layout/index.vue")
export default {
  path: "/table",
  name: "Table",
  meta: { title: "表格", icon: "Menu" },
  redirect: "/table/child/list1",
  component: Layout,
  children: [
    {
      path: "list1",
      name: "TableList1",
      meta: { title: "表格-列表1", needCache: true },
      component: () => import("@/views/Table/List1/index.vue"),
    },
    {
      path: "list1/edit/:id",
      name: "TableList1Edit",
      meta: { title: "表格-列表1-编辑", needCache: true },
      props: true,
      hidden: true,
      component: () => import("@/views/Table/List1/Edit.vue"),
    },
    {
      path: "list2",
      name: "TableList2",
      meta: { title: "表格-列表2", needCache: true },
      component: () => import("@/views/Table/List2/index.vue"),
    },
  ],
}
