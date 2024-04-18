<script>
import { mapGetters } from "vuex";
import ChatBoxFooter from "../molecules/chatbox/ChatBoxFooter.vue";
import ChatBoxBody from "../molecules/chatbox/UserChatBoxBody.vue";
import ChatBoxHeader from "../molecules/chatbox/UserChatBoxHeader.vue";

export default {
  components: { ChatBoxHeader, ChatBoxBody, ChatBoxFooter },

  // computed: {
  //   ...mapGetters(["userData"]),
  // },

  data() {
    return {
      // userData: this.$store.state.userData,
    };
  },
};
</script>
<template>
  <div class="user-chatbox flex-grow-1">
    <ChatBoxHeader :userData="$store.state.userData" />
    <ChatBoxBody :userData="$store.state.userData" />
    <ChatBoxFooter />
  </div>
</template>

<style scoped>
.user-chatbox {
  border-right: 1px solid var(--clr-lighter-variant-two);
  display: flex;
  flex-direction: column;
}

/* Media Queries */
@media screen and (max-width: 991.98px) {
  .user-chatbox {
    position: fixed;
    background: #fff;
    left: 100%;
    width: 100%;
    bottom: 0;
    top: 62px;
    z-index: 100;
    transition: 0.5s ease-in-out;
  }
  .user-chatbox-body {
    height: 74vh;
  }
}
</style>