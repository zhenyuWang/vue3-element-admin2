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
import { computed } from "vue"
import { storeToRefs } from "pinia"
import { usePermissionStore } from "@/store/permission"
import { useSettingStore } from "@/store/setting"
import { useRoute } from "vue-router"
import Logo from "./Logo.vue"
import SlideBarItem from "./Item.vue"
import type { _RouteRecordBase } from "vue-router"

/*
  处理菜单层级问题
  因为如果路由直接写成三级，页面缓存会无效
  所以路由只能嵌套两级，这里针对需求组合三级菜单
*/
const permissionStore = usePermissionStore(),
  settingStore = useSettingStore(),
  route = useRoute()
const activeMenu = computed(() => route.name?.toString())
const { isCollapse } = storeToRefs(settingStore)
const { routes } = storeToRefs(permissionStore)
function handleRouteNested() {
  routes.value.forEach((item: any) => {
    // 如果是多层嵌套路由
    if (item.name === "NestRoute" && item.children && item.children.length) {
      const child1Children = [],
        child2Children = []
      for (let i = 0; i < item.children.length; i++) {
        if (item.children[i].parentName) {
          if (item.children[i].parentName === "Child1") {
            child1Children.push(...item.children.splice(i, 1))
            i--
          } else if (item.children[i].parentName === "Child2") {
            child2Children.push(...item.children.splice(i, 1))
            i--
          }
        }
      }
      if (child2Children.length) {
        item.children.unshift({
          path: "child2",
          name: "Child2",
          meta: { title: "子级2", needCache: true },
          component: () => import("@/views/NestRoute/Child2/index.vue"),
          children: child2Children,
        })
      }
      if (child1Children.length) {
        item.children.unshift({
          path: "child1",
          name: "Child1",
          meta: { title: "子级1", needCache: true },
          component: () => import("@/views/NestRoute/Child1/index.vue"),
          children: child1Children,
        })
      }
    }
  })
}
handleRouteNested()
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
