

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
  // Props section, defining the properties accepted by the component
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      threeDotsIcon:
        '<svg xmlns="http://www.w3.org/2000/svg" width="4" height="18" viewBox="0 0 4 18" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.00014 4C3.10414 4 4.00014 3.104 4.00014 2C4.00014 0.896 3.10414 0 2.00014 0C0.896137 0 0.000137329 0.896 0.000137329 2C0.000137329 3.104 0.896137 4 2.00014 4ZM2.00014 7C0.896137 7 0.000137329 7.896 0.000137329 9C0.000137329 10.104 0.896137 11 2.00014 11C3.10414 11 4.00014 10.104 4.00014 9C4.00014 7.896 3.10414 7 2.00014 7ZM0.000137329 16C0.000137329 14.896 0.896137 14 2.00014 14C3.10414 14 4.00014 14.896 4.00014 16C4.00014 17.104 3.10414 18 2.00014 18C0.896137 18 0.000137329 17.104 0.000137329 16Z" fill="#5F6269"/></svg>',
    };
  },
};
</script>
<template>
  <div
    class="chats-header d-flex justify-content-between align-items-center px-3 pt-3"
  >
    <HeadingOne :title="title" class="fs-24" />
    <ActionDropddown :svg="threeDotsIcon" />
  </div>
  <div class="px-3 input-wrapper">
    <Input />
  </div>
</template>
<style scoped>
</style>