<template>
  <section class="app_main flex">
    <SliderBar />
    <el-container>
      <el-header height="80px">
        <NavBar />
      </el-header>
      <el-main>
        <router-view v-slot="{ Component }">
          <template v-if="Component">
            <transition name="fade-transform" mode="out-in">
              <keep-alive :include="cachedViews">
                <component :is="Component" :key="key" />
              </keep-alive>
            </transition>
          </template>
        </router-view>
      </el-main>
    </el-container>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { storeToRefs } from "pinia"
import { useTagsViewStore } from "@/store/tagsView"
import { useRoute } from "vue-router"
import SliderBar from "./SliderBar/index.vue"
import NavBar from "./NavBar/index.vue"

const tagsViewStore = useTagsViewStore()
const { cachedViews } = storeToRefs(tagsViewStore)
const route = useRoute()
const key = computed(() => route.fullPath)
</script>

<style lang="scss" scoped>
.app_main {
  height: 100%;
  .el-header {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  }
}
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.2s;
  opacity: 0;
  transform: translateX(30px);
}
</style>
