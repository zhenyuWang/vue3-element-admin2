<template>
  <div>
    <Tinymce @updateContent="updateTinymceContent" />
    <Tinymce :disabled="true" @updateContent="updateTinymceContent" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Tinymce from "@/components/tinymce/index.vue";
export default defineComponent({
  name: "TinymceDemo",
  components: { Tinymce },
  setup() {
    const updateTinymceContent = (val: string) => {
      console.log("val", val);
    };
    return {
      updateTinymceContent,
    };
  },
});
</script>
