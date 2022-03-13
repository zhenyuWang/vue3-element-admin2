import { defineStore } from "pinia";
import router, { permissionRoutes } from "@/router";
import { useTagsViewStore } from "./tagsView";
type Routes = any[];
type State = {
  routes: Routes;
};
// 将访问过的路由固定到visited views bar
function handleFixedVisitedViews(tagsViewStore: any, routes: any[]) {
  routes.forEach((route) => {
    if (route.meta && route.meta.fixed) {
      tagsViewStore.handleAddFixedVisitedView(route);
    }
    if (route.children && route.children.length)
      handleFixedVisitedViews(tagsViewStore, route.children);
  });
}

export const usePermissionStore = defineStore("permission", {
  state: (): State => ({
    routes: [],
  }),
  actions: {
    // 处理路由
    handleRoutes() {
      return new Promise((resolve) => {
        // 获取用户权限路由树
        this.routes = permissionRoutes;
        // 将权限路由添加到路由实例中
        this.routes.forEach((item) => {
          router.addRoute(item);
        });
        // 获取 tagsViewStore
        const tagsViewStore = useTagsViewStore();
        handleFixedVisitedViews(tagsViewStore, this.routes);
        resolve("handleRoutes success");
      });
    },
    // 重置路由
    resetRoute() {
      permissionRoutes.forEach((item) => {
        if (item.name) router.removeRoute(item.name);
      });
      this.routes = [];
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
  },
});
