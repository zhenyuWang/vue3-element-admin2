// 在页面刷新时处理路由
import { createApp } from "vue";
import App from "@/App.vue";
import { createPinia } from "pinia";
import { usePermissionStore } from "@/store/permission";
import { UserStoreState } from "@/types/userStore";
export default () => {
  return new Promise((resolve) => {
    let userStore: UserStoreState = {
      userInfo: {
        name: "",
        token: "",
        avatar: "",
        roles: [],
      },
    };
    const userStoreStr = sessionStorage.getItem("user");
    if (userStoreStr) userStore = JSON.parse(userStoreStr);
    // 如果已经登录
    if (
      userStore.userInfo &&
      userStore.userInfo.name &&
      userStore.userInfo.token
    ) {
      // 处理权限路由
      const pinia = createPinia();
      const app = createApp(App);
      app.use(pinia);
      const permissionStore = usePermissionStore();
      permissionStore.handleRoutes().then(() => {
        resolve("refreshHandleRoute success");
      });
    } else {
      // 如果未登录，直接往下走
      resolve("login");
    }
  });
};
