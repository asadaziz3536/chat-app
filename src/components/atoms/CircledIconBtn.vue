<script>
export default {
  // Props section, defining the properties accepted by the component
  props: {
    svg: {
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
  <button
    :style="{
      background: bg,
    }"
    class="border-0 p-0 m-0 rounded-circle"
  >
    <div v-html="svg"></div>
  </button>
</template>
  
  <style>
</style>
  