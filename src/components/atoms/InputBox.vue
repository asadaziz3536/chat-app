

<script>
export default {
  props: {
    cols: {
      type: String,
      default: "",
    },
    rows: {
      type: String,
      default: "",
    },
  },
};
</script>
<template>
  <textarea
    name=""
    id=""
    :cols="cols"
    :rows="rows"
    class="form-control"
  ></textarea>
</template>

<style>
</style>