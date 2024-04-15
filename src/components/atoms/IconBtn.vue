<script>
export default {
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
    class="border-0 p-0 m-0"
  >
    <div v-html="svg"></div>
  </button>
</template>
  
  <style>
</style>
  