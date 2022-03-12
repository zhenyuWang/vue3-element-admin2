interface TagsViewState {
  cachedViews: string[];
  fixedVisitedViews: any[];
  visitedViews: any[];
}
type context = {
  state: Record<string, unknown>;
  mutations: Record<string, unknown>;
  actions: Record<string, unknown>;
  commit: any;
};
export default {
  namespaced: true,
  state: {
    // 缓存路由
    cachedViews: [],
    // 固定tabbar的路由
    fixedVisitedViews: [],
    // 访问过的路由
    visitedViews: [],
  },
  mutations: {
    // 添加缓存路由
    ADD_CACHE_VIEW(state: TagsViewState, name: string) {
      if (state.cachedViews.indexOf(name) === -1) state.cachedViews.push(name);
    },
    // 删除缓存路由
    DELETE_CACHE_VIEW(state: TagsViewState, name: string) {
      const index = state.cachedViews.indexOf(name);
      if (index > -1) state.cachedViews.splice(index, 1);
    },
    // 清空缓存路由
    CLEAR_CACHE_VIEW(state: TagsViewState) {
      state.cachedViews = [];
    },
    // 添加固定路由
    ADD_FIXED_VISITED_VIEW(state: TagsViewState, view: any) {
      if (!state.fixedVisitedViews.find((item) => item.name === view.name))
        state.fixedVisitedViews.push(view);
    },
    // 清空固定路由
    CLEAR_FIXED_VISITED_VIEW(state: TagsViewState) {
      state.fixedVisitedViews = [];
    },
    // 添加访问过的路由
    ADD_VISITED_VIEW(state: TagsViewState, view: any) {
      if (!state.visitedViews.find((item) => item.name === view.name))
        state.visitedViews.push(view);
    },
    // 删除访问过的路由
    DELETE_VISITED_VIEW(state: TagsViewState, name: string) {
      state.visitedViews = state.visitedViews.filter((item) => {
        return item.name !== name;
      });
    },
    // 删除其他访问过的路由
    DELETE_OTHER_VISITED_VIEW(state: TagsViewState, view: any) {
      state.visitedViews = [...state.fixedVisitedViews, view];
    },
    // 清空访问过的路由
    CLEAR_VISITED_VIEW(state: TagsViewState) {
      state.visitedViews = [...state.fixedVisitedViews];
    },
  },
  actions: {
    // 添加固定路由
    addFixedVisitedView({ commit }: context, view: any) {
      commit("ADD_FIXED_VISITED_VIEW", view);
      commit("ADD_VISITED_VIEW", view);
    },
    // 删除访问过的路由
    deleteVisitedView({ commit }: context, name: string) {
      commit("DELETE_VISITED_VIEW", name);
      commit("DELETE_CACHE_VIEW", name);
    },
  },
};
