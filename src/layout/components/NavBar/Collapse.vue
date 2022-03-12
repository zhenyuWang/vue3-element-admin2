<template>
  <div class="collapse_box pr_20 pointer" @click="changeCollapse">
    <span v-if="isCollapse" class="fontsize_20 el-icon-s-unfold"></span>
    <span v-else class="fontsize_20 el-icon-s-fold"></span>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "",
  setup() {
    const store = useStore();
    const changeCollapse = () => {
      store.commit("setting/SET_COLLAPSE", !store.getters.isCollapse);
    };
    return {
      changeCollapse,
    };
  },
  computed: {
    isCollapse() {
      return useStore().getters.isCollapse;
    },
  },
});
</script>
