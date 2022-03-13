import { defineStore } from "pinia";
interface State {
  cachedViews: string[];
  fixedVisitedViews: any[];
  visitedViews: any[];
}

export const useTagsViewStore = defineStore("tagsView", {
  state: (): State => ({
    // 缓存路由
    cachedViews: [],
    // 固定tabbar的路由
    fixedVisitedViews: [],
    // 访问过的路由
    visitedViews: [],
  }),
  actions: {
    // 添加缓存路由
    addCacheView(name: string) {
      if (!this.cachedViews.includes(name)) this.cachedViews.push(name);
    },
    // 删除缓存路由
    deleteCacheView(name: string) {
      const index = this.cachedViews.indexOf(name);
      if (index > -1) this.cachedViews.splice(index, 1);
    },
    // 清空缓存路由
    clearCacheView() {
      this.cachedViews = [];
    },
    // 添加固定路由
    addFixedVisitedView(view: any) {
      if (!this.fixedVisitedViews.find((item) => item.name === view.name))
        this.fixedVisitedViews.push(view);
    },
    // 清空固定路由
    clearFixedVisitedView() {
      this.fixedVisitedViews = [];
    },
    // 添加访问过的路由
    addVisitedView(view: any) {
      if (!this.visitedViews.find((item) => item.name === view.name))
        this.visitedViews.push(view);
    },
    // 删除访问过的路由
    deleteVisitedView(name: string) {
      let ind;
      for (let i = 0; i < this.visitedViews.length; i++) {
        if (this.visitedViews[i].name === name) {
          ind = i;
          break;
        }
      }
      if (ind !== undefined) this.visitedViews.splice(ind, 1);
    },
    // 删除其他访问过的路由
    deleteOtherVisitedView(view: any) {
      this.visitedViews = [...this.fixedVisitedViews];
      if (view.meta && !view.meta.fixed) this.visitedViews.push(view);
    },
    // 清空访问过的路由
    clearVisitedView() {
      this.visitedViews = [...this.fixedVisitedViews];
    },
    // 添加固定路由
    handleAddFixedVisitedView(view: any) {
      this.addFixedVisitedView(view);
      this.addVisitedView(view);
    },
    // 删除访问过的路由
    handleDeleteVisitedView(name: string) {
      this.deleteCacheView(name);
      this.deleteVisitedView(name);
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
  },
});
