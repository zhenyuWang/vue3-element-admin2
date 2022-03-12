<template>
  <div class="c_666">
    <div class="flex flex_align_center">
      <span>头像：</span>
      <el-avatar shape="square" :size="100" :src="userInfo.avatar"></el-avatar>
    </div>
    <div class="flex flex_align_center pt_20 pb_20">
      <span>姓名：</span>
      <span>{{ userInfo.name }}</span>
    </div>
    <div class="flex flex_align_center">
      <span>角色：</span>
      <span>{{ userInfo.roles.join(" | ") }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "",
  setup() {
    const userInfo = useStore().getters.userInfo;
    return { userInfo };
  },
});
</script>
