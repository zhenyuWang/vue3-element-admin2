import { defineStore } from "pinia";
import { apiLogin, apiSignout } from "@/api/user";
import { usePermissionStore } from "./permission";
import { useTagsViewStore } from "./tagsView";
import { UserStoreState, LoginData } from "@/types/userStore";
import type { Router } from "vue-router";

export const useUserStore = defineStore("user", {
  state: (): UserStoreState => ({
    userInfo: {
      name: "",
      token: "",
      avatar: "",
      roles: [],
    },
  }),
  actions: {
    // 登录
    login(data: LoginData) {
      return new Promise((resolve, reject) => {
        apiLogin(data)
          .then(async (res) => {
            this.userInfo.name = res.body.name;
            this.userInfo.token = res.body.token;
            this.userInfo.avatar = res.body.avatar;
            this.userInfo.roles = res.body.roles;
            const permissionStore = usePermissionStore();
            await permissionStore.handleRoutes();
            resolve("success");
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 退出登录
    logout(router: Router) {
      apiSignout().then(() => {
        this.userInfo.name = "";
        this.userInfo.token = "";
        this.userInfo.avatar = "";
        this.userInfo.roles = [];
        const permissionStore = usePermissionStore();
        permissionStore.resetRoute();
        const tagsViewStore = useTagsViewStore();
        tagsViewStore.cachedViews = [];
        tagsViewStore.visitedViews = [];
        tagsViewStore.fixedVisitedViews = [];
        router.push({ name: "Login" });
      });
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
  },
});
