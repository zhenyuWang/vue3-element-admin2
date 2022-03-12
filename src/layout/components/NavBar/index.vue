<template>
  <div class="navbar flex flex_align_center flex_justify_between border_b">
    <div class="flex flex_align_center">
      <Collapse />
      <Breadcrumb />
    </div>
    <AvatarDropDown />
  </div>
  <VisitedViews />
</template>
<script>
import { defineComponent } from "vue";
import Collapse from "./Collapse.vue";
import Breadcrumb from "./Breadcrumb.vue";
import AvatarDropDown from "./AvatarDropDown.vue";
import VisitedViews from "./VisitedViews.vue";
export default defineComponent({
  name: "",
  components: { Collapse, Breadcrumb, AvatarDropDown, VisitedViews },
});
</script>
<style lang="scss" scoped>
.navbar {
  > div:first-child {
    height: 50px;
  }
}
</style>
