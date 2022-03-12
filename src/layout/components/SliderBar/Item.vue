<template>
  <template v-if="!item.hidden">
    <template v-if="item.children">
      <template v-if="isOnlyOneChild(item)">
        <SliderBarItem
          :item="
            Object.assign(
              {},
              {
                ...item.children[0],
                meta: { ...item.meta, ...item.children[0].meta },
              }
            )
          "
        />
      </template>
      <el-submenu v-else :index="item.name">
        <template #title>
          <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
          <span>{{ (item.meta && item.meta.title) || item.name }}</span>
        </template>
        <template v-for="child in item.children" :key="child.name">
          <SliderBarItem :item="child" />
        </template>
      </el-submenu>
    </template>
    <el-menu-item v-else :index="item.name">
      <router-link :to="item">
        <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
        <span>{{ (item.meta && item.meta.title) || item.name }}</span>
      </router-link>
    </el-menu-item>
  </template>
</template>
<script lang="ts">
export default {
  name: "SliderBarItem",
};
</script>
<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const isOnlyOneChild = (item: any): boolean => {
  return item.children && item.children.length === 1;
};
</script>
<style lang="scss" scoped>
.el-menu-item {
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}
</style>
