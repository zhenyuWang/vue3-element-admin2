<template>
  <div class="visited_views">
    <template v-for="view in visitedViews" :key="view.name">
      <div
        class="fontsize_12 c_666 pointer"
        :class="{ active: currentRouteName === view.name }"
        @click="goTargetView(view)"
        @contextmenu.prevent="mouseRightClick(view, $event)"
      >
        {{ view.meta?.title }}
        <el-icon
          v-if="view.meta && !view.meta.fixed"
          :size="14"
          @click.stop="delTargetVisited(view.name)"
          ><Close
        /></el-icon>
      </div>
    </template>
    <ul
      v-show="visible"
      ref="menu"
      class="menu bg_fff fontsize_13 pointer c_333"
    >
      <li @click="refresh">刷新</li>
      <li
        v-if="mouseRightView.meta && !mouseRightView.meta.fixed"
        @click="close"
      >
        关闭
      </li>
      <li @click="closeOther">关闭其他</li>
      <li @click="closeAll">关闭所有</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, Ref, VueElement } from "vue";
import { storeToRefs } from "pinia";
import { useTagsViewStore } from "@/store/tagsView";
import { useRoute, useRouter } from "vue-router";
import type { _RouteRecordBase, RouteRecordName } from "vue-router";
const router = useRouter();
const route = useRoute();
const tagsViewStore = useTagsViewStore();
// 获取当前路由
const currentRouteName = computed(() => route.name);
// 获取已访问路由
const { visitedViews } = storeToRefs(tagsViewStore);
// 跳转目标路由
const goTargetView = (view: _RouteRecordBase) => {
  router.push(view);
};
// 删除已访问路由
const delTargetVisited = (name: RouteRecordName | undefined) => {
  tagsViewStore.deleteVisitedView(name);
  // 如果删除的是active路由，跳转访问路由最后一个
  if (name === route.name) {
    router.push({
      name: visitedViews.value[visitedViews.value.length - 1].name,
    });
  }
};
// 当前右键view
const mouseRightView: Ref<_RouteRecordBase> = ref({
  name: "",
  path: "",
  meta: {
    fixed: false,
  },
});
// 右键菜单html
const menu: Ref<VueElement | null> = ref(null);
// 右键菜单是否显示
const visible = ref(false);
// 关闭右键菜单
const hideMenu = () => {
  visible.value = false;
};
// 显示右键菜单
const showMenu = (left: number, top: number) => {
  // 浏览器添加click关闭右键菜单
  window.addEventListener("click", hideMenu);
  visible.value = true;
  if (menu.value) {
    menu.value.style.left = `${left}px`;
    menu.value.style.top = `${top + 10}px`;
  }
};
// 鼠标右键点击
const mouseRightClick = (view: _RouteRecordBase, e: any) => {
  // 存储右键view
  mouseRightView.value = view;
  // 显示右键菜单
  showMenu(e.clientX, e.clientY);
};
// 刷新右键路由
const refresh = async () => {
  tagsViewStore.deleteCacheView(mouseRightView.value.name);
  if (mouseRightView.value.name === route.name) {
    await router.push({ name: "Home" });
    router.replace({ name: mouseRightView.value.name });
  } else {
    router.push({ name: mouseRightView.value.name });
  }
};
// 关闭右键路由
const close = () => {
  delTargetVisited(mouseRightView.value.name);
};
// 右键关闭其他
const closeOther = () => {
  tagsViewStore.deleteOtherVisitedView(mouseRightView.value);
  if (mouseRightView.value.name !== route.name) {
    router.push({ name: mouseRightView.value.name });
  }
};
// 右键关闭所有
const closeAll = async () => {
  await tagsViewStore.clearCacheView();
  await tagsViewStore.clearVisitedView();
  router.push({
    name: visitedViews.value[visitedViews.value.length - 1].name,
  });
};
</script>
<style lang="scss" scoped>
.visited_views {
  height: 30px;
  padding-top: 2px;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  > div {
    height: 24px;
    margin-right: 5px;
    padding: 0 10px;
    display: inline-block;
    line-height: 24px;
    border: 1px solid #ccc;
    border-radius: 3px;
    &.active {
      background-color: rgb(19, 107, 19);
      border: none;
      color: #fff;
    }
    .el-icon {
      margin-left: 4px;
      vertical-align: -3px;
    }
  }
  .menu {
    width: 100px;
    padding: 5px 10px;
    position: absolute;
    z-index: 9999;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    > li {
      padding: 5px 2px;
      &:hover {
        color: #3477f2;
      }
    }
  }
}
</style>
