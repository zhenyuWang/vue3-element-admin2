import { defineStore } from "pinia"
import { SettingState } from "@/types/settingStore"
export const useSettingStore = defineStore("setting", {
  state: (): SettingState => ({
    // 左侧菜单是否展开
    isCollapse: false,
  }),
  actions: {
    setCollapse(val: boolean) {
      this.isCollapse = val
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
  },
})
