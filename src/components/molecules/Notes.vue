<script>
import Label from "../atoms/Label.vue";
import InputBox from "../atoms/InputBox.vue";
export default {
  components: {
    Label,
    InputBox,
  },
};
</script>
<template>
  <div class="notes-wrapper">
    <Label content="Notes" />
    <InputBox class="input-box" rows="3" cols="2" />
  </div>
</template>
<style scoped>
.notes-wrapper {
  background: #f0f2f6;
  padding: 16px 16px 40px 16px;
}
.input-box {
  height: 70px;
}
</style>