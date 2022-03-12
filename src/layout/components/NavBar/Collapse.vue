<template>
  <div class="collapse_box pr_20 pointer" @click="changeCollapse">
    <span v-if="isCollapse" class="fontsize_20 el-icon-s-unfold"></span>
    <span v-else class="fontsize_20 el-icon-s-fold"></span>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const changeCollapse = () => {
  store.commit("setting/SET_COLLAPSE", !store.getters.isCollapse);
};
const isCollapse = computed(() => useStore().getters.isCollapse);
</script>
