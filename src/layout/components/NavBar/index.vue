<template>
  <div class="navbar flex flex-align-center flex-justify-between border-b">
    <div class="flex flex-align-center">
      <Collapse />
      <Breadcrumb />
    </div>
    <AvatarDropDown />
  </div>
  <VisitedViews />
</template>

<script setup lang="ts">
import Collapse from "./Collapse.vue"
import Breadcrumb from "./Breadcrumb.vue"
import AvatarDropDown from "./AvatarDropDown.vue"
import VisitedViews from "./VisitedViews.vue"
</script>

<style lang="scss" scoped>
.navbar {
  > div:first-child {
    height: 50px;
  }
}
</style>
