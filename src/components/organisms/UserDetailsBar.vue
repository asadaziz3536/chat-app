<script>
import Notes from "../molecules/Notes.vue";
import UserDetailBody from "../molecules/UserDetailBody.vue";
import UserDetailHead from "../molecules/UserDetailHead.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    UserDetailBody,
    Notes,
    UserDetailHead,
  },
  computed: {
    ...mapGetters(["isSidebarVisible", "userData"]),
  },
  methods: {
    closeRightBar() {
      this.$store.dispatch("updateCloseSidebar");
    },
  },
};
</script>
<template>
  <!-- User details side bar -->
  <div class="right-bar overflow-auto custom-scrollbar" v-if="isSidebarVisible">
    <span @click="closeRightBar" class="close-icon d-flex d-lg-none">X</span>
    <div
      class="user-details-wrapper d-flex justify-content-between flex-column h-100"
    >
      <div>
        <UserDetailHead :userData="userData" />
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
    width: auto;
  }
}
@media screen and (max-width: 991.98px) {
  .right-bar {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100000;
    background: #fff;
    box-shadow: 6px 10px 10px 5px #ccc;
    bottom: 0;
  }
  .right-bar .close-icon {
    position: absolute;
    background: #000;
    color: #fff;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-radius: 50%; */
    right: 0;
    font-size: 10px;
    border-radius: 6px 0px 0px 6px;
  }
}
</style>