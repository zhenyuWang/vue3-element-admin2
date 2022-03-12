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
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Logo from "./Logo.vue";
import SlideBarItem from "./Item.vue";
export default defineComponent({
  name: "",
  components: { Logo, SlideBarItem },
  setup() {
    const store = useStore();
    const routes = store.getters.routes;
    return {
      routes,
    };
  },
  computed: {
    activeMenu() {
      return useRoute().name;
    },
    isCollapse() {
      return useStore().getters.isCollapse;
    },
  },
});
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
    .el-submenu {
      &.is-active {
        .el-submenu__title {
          background-color: #2c67d3;
        }
      }
      .el-submenu__title {
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
        .el-submenu__title,
        a,
        i {
          color: #3477f2;
        }
      }
      .el-submenu__title,
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
