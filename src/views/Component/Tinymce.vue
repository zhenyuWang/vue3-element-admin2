<template>
  <div>
    <Tinymce id="tinymce1" key="tinymce1" :content="content1" />
    <Tinymce
      id="tinymce2"
      key="tinymce2"
      :content="content2"
      :readonly="true"
    />
  </div>
</template>
<script lang="ts">
export default {
  name: "TinymceDemo",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import Tinymce from "@/components/tinymce/index.vue";
const content1 = ref("");
const content2 = ref("<div>content2</div>");
</script>
