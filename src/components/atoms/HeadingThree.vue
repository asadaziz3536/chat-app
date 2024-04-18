<script>
// Props section, defining the properties accepted by the component
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
};
</script>
<template>
  <h3>{{ name }}</h3>
</template>
<style>
</style>