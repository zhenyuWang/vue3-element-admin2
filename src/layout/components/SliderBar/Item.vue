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
      <el-sub-menu v-else :index="item.name">
        <template #title>
          <el-icon v-if="item.meta && item.meta.icon" :size="14">
            <component :is="item.meta.icon" />
          </el-icon>
          <span>{{ (item.meta && item.meta.title) || item.name }}</span>
        </template>
        <template v-for="child in item.children" :key="child.name">
          <SliderBarItem :item="child" />
        </template>
      </el-sub-menu>
    </template>
    <el-menu-item v-else :index="item.name">
      <el-icon v-if="item.meta && item.meta.icon" :size="14">
        <component :is="item.meta.icon" />
      </el-icon>
      <template #title>
        <router-link :to="item">
          <span>{{ (item.meta && item.meta.title) || item.name }}</span>
        </router-link>
      </template>
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
import { _RouteRecordBase } from "vue-router";
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const isOnlyOneChild = (item: any): boolean => {
  return !!item.children && item.children.length === 1;
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
