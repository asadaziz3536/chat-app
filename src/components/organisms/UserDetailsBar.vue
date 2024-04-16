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
  <div class="right-bar overflow-auto custom-scrollbar">
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
@media screen and (min-width: 992px) and (max-width: 1199.98px) {
  .right-bar {
    min-width: auto;
  }
}
@media screen and (max-width: 767.98px) {
  .right-bar {
    display: none;
  }
}
</style>