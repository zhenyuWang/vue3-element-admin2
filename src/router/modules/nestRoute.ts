const Layout = () => import("@/layout/index.vue")
export default {
  path: "/nest-route",
  name: "NestRoute",
  meta: { title: "多级嵌套", icon: "Menu" },
  component: Layout,
  children: [
    {
      path: "grandson/template1",
      name: "Child1Template1",
      meta: { title: "子级1-1", needCache: true },
      parentName: "Child1",
      component: () =>
        import("@/views/NestRoute/Child1/GrandSon/Template1.vue"),
    },
    {
      path: "grandson/template2",
      name: "Child1Template2",
      meta: { title: "子级1-2", needCache: true },
      parentName: "Child1",
      component: () =>
        import("@/views/NestRoute/Child1/GrandSon/Template2.vue"),
    },
    {
      path: "grandson/template3",
      name: "Child1Template3",
      meta: { title: "子级1-3", needCache: true },
      parentName: "Child1",
      component: () =>
        import("@/views/NestRoute/Child1/GrandSon/Template3.vue"),
    },
    {
      path: "grandson/template1",
      name: "Child2Template1",
      parentName: "Child2",
      meta: { title: "子级2-1", needCache: true },
      component: () =>
        import("@/views/NestRoute/Child2/GrandSon/Template1.vue"),
    },
    {
      path: "grandson/template2",
      name: "Child2Template2",
      meta: { title: "子级2-2", needCache: true },
      parentName: "Child2",
      component: () =>
        import("@/views/NestRoute/Child2/GrandSon/Template2.vue"),
    },
    {
      path: "grandson/template3",
      name: "Child2Template3",
      meta: { title: "子级2-3", needCache: true },
      parentName: "Child2",
      component: () =>
        import("@/views/NestRoute/Child2/GrandSon/Template3.vue"),
    },
  ],
}
