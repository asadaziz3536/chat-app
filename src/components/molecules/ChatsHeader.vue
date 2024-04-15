

<script>
import HeadingOne from "../atoms/HeadingOne.vue";
import ActionDropddown from "../atoms/ActionDropdown.vue";
import Input from "../atoms/Input.vue";
export default {
  components: {
    HeadingOne,
    ActionDropddown,
    Input,
  },
};
</script>
<template>
  <div
    class="chats-header d-flex justify-content-between align-items-center px-3 pt-3"
  >
    <HeadingOne class="fs-24" />
    <ActionDropddown />
  </div>
  <div class="px-3 input-wrapper">
    <Input />
  </div>
</template>
<style scoped>
</style>