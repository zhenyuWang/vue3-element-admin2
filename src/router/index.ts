import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store";

/* Layout */
import Layout from "@/layout/index.vue";
// modules
import table from "./modules/table";
import nestRoute from "./modules/nestRoute";
import compontents from "./modules/compontents";
import user from "./modules/user";

/* 
  config 
    path                路径
    fullPath            完整路径
    name                唯一name 大驼峰
    redirect            重定向(默认 '')
    component           路由对应组件
    hidden:true         是否在左侧菜单隐藏(默认 false)
    meta                
      title             名称 (默认 '')
      icon              左侧菜单icon (默认 '')
      notNeedAuth:true  该路由是否不需要鉴权(默认 false)
      needCache:true    该路由是否需要缓存(默认 false)
      fixed:true        如果设置为true，该路由会固定在visited-view中(默认 false)
*/
// 无需权限的路由
export const routes = [
  {
    path: "/login",
    name: "Login",
    hidden: true,
    meta: { notNeedAuth: true },
    component: () => import("@/views/Login.vue"),
  },
  // 匹配所有路径  vue2使用*  vue3使用/:pathMatch(.*)或/:catchAll(.*)
  {
    path: "/404",
    name: "404",
    hidden: true,
    meta: { notNeedAuth: true },
    component: () => import("@/views/404.vue"),
  },
];
// 需要校验权限的路由
export const permissionRoutes = [
  {
    path: "/",
    name: "Root",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        meta: {
          title: "首页",
          icon: "el-icon-s-home",
          needCache: true,
          fixed: true,
        },
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
  table,
  nestRoute,
  compontents,
  user,
  {
    path: "/:catchAll(.*)",
    hidden: true,
    redirect: "/404",
  },
];

// 路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 始终滚动到顶部
  scrollBehavior() {
    return { top: 0 };
  },
});

// 路由前置守卫
router.beforeEach((to) => {
  /* 
    false 以取消导航
    一个路由
    不返回或者返回true 则去to
    如果遇到了意料之外的情况，可能会抛出一个 Error 这会取消导航并且调用 router.onError() 注册过的回调
    也就是用不到next了，但是next还是可以使用
  */
  // 如果to需要鉴权
  if (!to.meta.notNeedAuth) {
    // 获取userInfo
    const userInfo = store.getters.userInfo;
    // 如果未登录
    if (!userInfo.name || !userInfo.roles.length) {
      return { name: "Login" };
    }
  }
});
// 路由后置守卫
router.afterEach((to: any) => {
  // 添加路由缓存
  if (to.name && to.meta.needCache) {
    store.commit("tagsView/ADD_CACHE_VIEW", to.name);
  }
  // 添加访问过路由
  if (to.meta && !to.meta.notNeedAuth) {
    const { fullPath, name, meta, params, query } = to;
    store.commit("tagsView/ADD_VISITED_VIEW", {
      fullPath,
      name,
      meta,
      params,
      query,
    });
  }
});

export default router;
