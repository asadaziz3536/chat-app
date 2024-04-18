

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
  <h2 class="fs-24 mb-0">{{ content }}</h2>
</template>
<style>
</style>