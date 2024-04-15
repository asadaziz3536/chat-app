<script>
import Notes from "../molecules/Notes.vue";
import UserDetailBody from "../molecules/UserDetailBody.vue";
import UserDetailHead from "../molecules/UserDetailHead.vue";

export default {
  components: {
    UserDetailBody,
    Notes,
    UserDetailHead,
  },
};
</script>
<template>
  <div class="right-bar">
    <div
      class="user-details-wrapper d-flex justify-content-between flex-column h-100"
    >
      <div>
        <UserDetailHead />
        <UserDetailBody />
      </div>

      <Notes />
    </div>
  </div>
</template>
<style scoped>
.right-bar {
  min-width: 360px;
}

@media screen and (max-width: 767.98px) {
  .right-bar {
    display: none;
  }
}
</style>