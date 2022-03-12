import { apiLogin, apiSignout } from "@/api/user";
type userInfo = {
  name: string;
  token: string;
  avatar: string;
  roles: string[];
};
type state = {
  userInfo: userInfo;
};
type loginData = {
  name: string;
  password: string;
};
type context = {
  state: Record<string, unknown>;
  mutations: Record<string, unknown>;
  actions: Record<string, unknown>;
  dispatch: any;
  commit: any;
};
export default {
  namespaced: true,
  state: {
    userInfo: {
      name: "",
      token: "",
      avatar: "",
      roles: [],
    },
  },
  mutations: {
    setUserInfo(state: state, val: userInfo) {
      state.userInfo = val;
    },
  },
  actions: {
    // 登录
    login({ commit, dispatch }: context, data: loginData) {
      return new Promise((resolve) => {
        apiLogin(data).then(async (res) => {
          // 更新用户信息
          commit("setUserInfo", {
            name: res.body.name,
            token: res.body.token,
            avatar: res.body.avatar,
            roles: res.body.roles,
          });
          // 处理权限路由
          await dispatch("permission/handleRoutes", null, {
            root: true,
          });
          resolve("success");
        });
      });
    },
    // 退出登录
    signout({ commit, dispatch }: context) {
      return new Promise((resolve) => {
        apiSignout().then(async () => {
          commit("setUserInfo", {
            name: "",
            token: "",
            avatar: "",
            roles: [],
          });
          // 重置路由
          await dispatch("permission/resetRoute", null, {
            root: true,
          });
          // 清理缓存路由
          commit("tagsView/CLEAR_CACHE_VIEW", null, {
            root: true,
          });
          // 清理访问过的路由
          commit("tagsView/CLEAR_VISITED_VIEW", null, {
            root: true,
          });
          // 清理固定路由
          commit("tagsView/CLEAR_FIXED_VISITED_VIEW", null, {
            root: true,
          });
          resolve("success");
        });
      });
    },
  },
};
