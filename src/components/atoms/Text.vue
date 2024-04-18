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
  },
};
</script>
<template>
  <span :style="{ color: color }">{{ content }}</span>
</template>
<style>
</style>