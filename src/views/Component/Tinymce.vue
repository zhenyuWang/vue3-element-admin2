<template>
  <div>
    <Tinymce id="tinymce1" @updateContent="updateTinymceContent" />
    <Tinymce
      id="tinymce2"
      :disabled="true"
      @updateContent="updateTinymceContent"
    />
  </div>
</template>
<script lang="ts">
export default {
  name: "TinymceDemo",
};
</script>
<script setup lang="ts">
import Tinymce from "@/components/tinymce/index.vue";
const updateTinymceContent = (val: string) => {
  console.log("val", val);
};
</script>
