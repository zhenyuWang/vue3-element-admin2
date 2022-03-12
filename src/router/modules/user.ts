import Layout from "@/layout/index.vue";
export default {
  path: "/user",
  name: "User",
  meta: { title: "个人中心" },
  component: Layout,
  redirect: "/user/info",
  hidden: true,
  children: [
    {
      path: "info",
      name: "UserInfo",
      meta: { title: "个人信息" },
      component: () => import("@/views/User/Info.vue"),
    },
  ],
};
