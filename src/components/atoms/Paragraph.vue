<script>
export default {
  // Props section, defining the properties accepted by the component
  props: {
    content: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    bg: {
      type: String,
      default: "",
    },
    html: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<template>
  <p v-if="!html" :style="{ color: color, background: bg }">{{ content }}</p>
  <p v-else v-html="content"></p>
</template>
<style>
</style>