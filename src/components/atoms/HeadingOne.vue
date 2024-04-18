

<script>
// Props section, defining the properties accepted by the component
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
<template>
  <h1>{{ title }}</h1>
</template>
<style>
</style>