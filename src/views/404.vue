<template>
  <div class="not_fund flex flex_center flex_direction_column">
    <div class="logo"></div>
    <p class="pb_20">您访问的页面不存在</p>
    <el-button type="primary" @click="$router.push({ name: 'Home' })"
      >返回首页</el-button
    >
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  components: {},
});
</script>
<style lang="scss" scoped>
.not_fund {
  .logo {
    width: 700px;
    height: 300px;
    margin: 200px auto 50px;
    background: url("@/assets/img/404.jpg");
  }
}
</style>
