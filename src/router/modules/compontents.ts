const Layout = () => import("@/layout/index.vue")
export default {
  path: "/compontents",
  name: "Components",
  meta: { title: "组件", icon: "Menu" },
  redirect: "/compontents/tinymce",
  component: Layout,
  children: [
    {
      path: "tinymce",
      name: "TinymceDemo",
      meta: { title: "富文本", needCache: false },
      component: () => import("@/views/Component/Tinymce.vue"),
    },
  ],
}
