<script>
import ChatBoxFooter from "../molecules/chatbox/ChatBoxFooter.vue";
import ChatBoxBody from "../molecules/chatbox/UserChatBoxBody.vue";
import ChatBoxHeader from "../molecules/chatbox/UserChatBoxHeader.vue";

export default {
  components: { ChatBoxHeader, ChatBoxBody, ChatBoxFooter },
};
</script>
<template>
  <div class="user-chatbox flex-grow-1">
    <ChatBoxHeader />
    <ChatBoxBody />
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
    display: none;
    position: absolute;
    background: #fff;
    left: 0;
    right: 0;
    bottom: 0;
    top: 62px;
    z-index: 100000;
  }
  .user-chatbox-body {
    height: 74vh;
  }
}
</style>