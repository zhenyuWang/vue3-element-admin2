import { defineStore } from "pinia";
interface State {
  isCollapse: boolean;
}
export const useSettingStore = defineStore("setting", {
  state: (): State => ({
    // 左侧菜单是否展开
    isCollapse: false,
  }),
  actions: {
    setCollapse(val: boolean) {
      this.isCollapse = val;
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
  },
});
