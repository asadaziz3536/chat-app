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
  },
};
</script>
<template>
  <span :style="{ color: color }">{{ content }}</span>
</template>
<style>
</style>