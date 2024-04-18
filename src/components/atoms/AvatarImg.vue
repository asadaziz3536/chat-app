<script>
export default {
  // Props section, defining the properties accepted by the component
  props: {
    width: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "",
    },
    source: {
      type: String,
      default: "",
    },
  },
};
</script>
<template>
  <img :src="source" :width="width" :height="height" class="rounded-circle" />
</template>
<style>
</style>