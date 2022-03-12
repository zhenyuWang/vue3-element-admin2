import router, { routes, permissionRoutes } from "@/router";
import store from "@/store";
type routes = any[];
type state = {
  routes: routes;
  permissionRoutes: routes;
};
type context = {
  state: Record<string, unknown>;
  mutations: Record<string, unknown>;
  actions: Record<string, unknown>;
  commit: any;
};
// 处理访问过的路由固定到visited views tabbar
function handleFixedVisitedViews(context: context, routes: any[]) {
  routes.forEach((route) => {
    if (route.meta && route.meta.fixed) {
      store.dispatch("tagsView/addFixedVisitedView", route);
    }
    if (route.children && route.children.length)
      handleFixedVisitedViews(context, route.children);
  });
}
export default {
  namespaced: true,
  state: {
    // 完整路由
    routes: [],
    // 权限路由
    permissionRoutes: [],
  },
  mutations: {
    // 设置路由
    setRoutes(state: state, permissionRoutes: routes) {
      state.routes = routes.concat(permissionRoutes);
      state.permissionRoutes = permissionRoutes;
    },
  },
  actions: {
    // 处理路由
    handleRoutes(context: context) {
      permissionRoutes.forEach((item) => {
        router.addRoute(item);
      });
      handleFixedVisitedViews(context, permissionRoutes);
      context.commit("setRoutes", permissionRoutes);
    },
    // 重置路由
    resetRoute({ commit }: context) {
      permissionRoutes.forEach((item) => {
        if (item.name) router.removeRoute(item.name);
      });
      commit("setRoutes", []);
    },
  },
};
