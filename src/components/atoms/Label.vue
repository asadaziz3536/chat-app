

<script>
export default {
  props: {
    content: {
      type: String,
      default: "",
    },
  },
};
</script>
<template>
  <label>{{ content }}</label>
</template>

<style>
</style>