

<script>
// Props section, defining the properties accepted by the component
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