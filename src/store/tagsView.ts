import { defineStore } from "pinia";
import { TagViewState } from "@/types/tagsViewStore";
import type { _RouteRecordBase, RouteRecordName } from "vue-router";

export const useTagsViewStore = defineStore("tagsView", {
  state: (): TagViewState => ({
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
    deleteCacheView(name: RouteRecordName | undefined) {
      if (!name) return;
      const index = this.cachedViews.indexOf(name.toString());
      if (index > -1) this.cachedViews.splice(index, 1);
    },
    // 清空缓存路由
    clearCacheView() {
      this.cachedViews = [];
    },
    // 添加固定路由
    addFixedVisitedView(view: _RouteRecordBase) {
      if (!this.fixedVisitedViews.find((item) => item.name === view.name))
        this.fixedVisitedViews.push(view);
    },
    // 清空固定路由
    clearFixedVisitedView() {
      this.fixedVisitedViews = [];
    },
    // 添加访问过的路由
    addVisitedView(view: _RouteRecordBase) {
      if (!this.visitedViews.find((item) => item.name === view.name))
        this.visitedViews.push(view);
    },
    // 删除访问过的路由
    deleteVisitedView(name: RouteRecordName | undefined) {
      if (!name) return;
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
    deleteOtherVisitedView(view: _RouteRecordBase) {
      this.visitedViews = [...this.fixedVisitedViews];
      if (view.meta && !view.meta.fixed) this.visitedViews.push(view);
    },
    // 清空访问过的路由
    clearVisitedView() {
      this.visitedViews = [...this.fixedVisitedViews];
    },
    // 添加固定路由
    handleAddFixedVisitedView(view: _RouteRecordBase) {
      this.addFixedVisitedView(view);
      this.addVisitedView(view);
    },
    // 删除访问过的路由
    handleDeleteVisitedView(name: RouteRecordName | undefined) {
      this.deleteCacheView(name);
      this.deleteVisitedView(name);
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
  },
});
