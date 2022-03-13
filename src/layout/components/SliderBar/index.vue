<template>
  <el-aside :class="{ collapse: isCollapse }">
    <Logo />
    <el-menu :default-active="activeMenu" :collapse="isCollapse">
      <template v-for="item in routes" :key="item.path">
        <SlideBarItem :item="item" />
      </template>
    </el-menu>
  </el-aside>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Logo from "./Logo.vue";
import SlideBarItem from "./Item.vue";
const store = useStore();
// 处理路由多层（超过两层）嵌套，缓存失效问题
function handleRouteNested(routes: any) {
  routes.forEach((list: any) => {
    // 如果是多层嵌套路由
    if (list.name === "NestRoute") {
      const child1Children = [],
        child2Children = [];
      for (let i = 0; i < list.children.length; i++) {
        if (list.children[i].parentName) {
          if (list.children[i].parentName === "Child1") {
            child1Children.push(...list.children.splice(i, 1));
            i--;
          } else if (list.children[i].parentName === "Child2") {
            child2Children.push(...list.children.splice(i, 1));
            i--;
          }
        }
      }
      if (child2Children.length) {
        list.children.unshift({
          path: "child2",
          name: "Child2",
          meta: { title: "子级2", needCache: true },
          component: () => import("@/views/NestRoute/Child2/index.vue"),
          children: child2Children,
        });
      }
      if (child1Children.length) {
        list.children.unshift({
          path: "child1",
          name: "Child1",
          meta: { title: "子级1", needCache: true },
          component: () => import("@/views/NestRoute/Child1/index.vue"),
          children: child1Children,
        });
      }
    }
  });
  return routes;
}
const routes = handleRouteNested(store.getters.routes);
const activeMenu = computed(() => useRoute().name);
const isCollapse = computed(() => useStore().getters.isCollapse);
</script>
<style lang="scss" scoped>
.el-aside {
  width: 230px !important;
  background-color: #3477f2;
  overflow-x: hidden;
  transition: 0.4s;
  &.collapse {
    width: 64px !important;
  }
  // 菜单整体样式
  :deep(.el-menu) {
    max-width: 230px;
    background-color: transparent;
    border: none;
    &:hover {
      i {
        color: #3477f2;
      }
    }
    // 一级菜单样式
    .el-sub-menu {
      &.is-active {
        .el-sub-menu__title {
          background-color: #2c67d3;
        }
      }
      .el-sub-menu__title {
        color: #fff;
        i {
          color: #fff;
        }
        &:hover {
          background-color: #2c67d3;
        }
      }
    }
    // 二级及以下菜单样式
    .el-menu-item {
      &.is-active,
      &:hover {
        background-color: #fff;
        .el-sub-menu__title,
        a,
        i {
          color: #3477f2;
        }
      }
      .el-sub-menu__title,
      a,
      i {
        color: #fff;
        &:hover {
          &,
          i {
            color: #3477f2;
          }
        }
      }
    }
  }
}
</style>
