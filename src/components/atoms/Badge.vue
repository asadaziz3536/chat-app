

<script>
export default {
  props: {
    content: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "",
    },
    font: {
      type: String,
      default: "",
    },
    padding: {
      type: String,
      default: "",
    },
    display: {
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
  <span
    :style="{
      width: width,
      height: height,
      padding: padding,
      background: bg,
    }"
    class="badge d-flex align-items-center justify-content-center"
    >{{ content }}</span
  >
</template>
<style>
.badge {
  background: var(--clr-primary);
}
</style>