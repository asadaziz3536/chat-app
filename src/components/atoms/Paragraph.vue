<script>
export default {
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
  },
};
</script>
<template>
  <p :style="{ color: color, background: bg }">{{ content }}</p>
</template>
<style>
</style>