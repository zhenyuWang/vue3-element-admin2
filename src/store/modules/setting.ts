interface setting {
  isCollapse: boolean;
}
export default {
  namespaced: true,
  state: {
    // 左侧菜单是否展开
    isCollapse: false,
  },
  mutations: {
    SET_COLLAPSE(state: setting, val: boolean) {
      state.isCollapse = val;
    },
  },
  actions: {},
};
