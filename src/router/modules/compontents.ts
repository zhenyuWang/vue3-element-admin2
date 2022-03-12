import Layout from "@/layout/index.vue";
export default {
  path: "/compontents",
  name: "Components",
  meta: { title: "组件", icon: "el-icon-s-data" },
  redirect: "/compontents/tinymce",
  component: Layout,
  children: [
    {
      path: "tinymce",
      name: "TinymceDemo",
      meta: { title: "富文本", needCache: true },
      component: () => import("@/views/Component/Tinymce.vue"),
    },
  ],
};
