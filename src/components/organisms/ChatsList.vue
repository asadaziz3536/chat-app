<script>
import ChatsHeader from "../molecules/ChatsHeader.vue";
import NormalChatUsers from "../molecules/NormalChatUsers.vue";
import QueuedUsers from "../molecules/QueuedUsers.vue";
import UserListItem from "../molecules/UserListItem.vue";
export default {
  components: {
    ChatsHeader,
    UserListItem,
    QueuedUsers,
    NormalChatUsers,
  },
};
</script>
<template>
  <div class="users-chat-list">
    <ChatsHeader />
    <QueuedUsers />
    <NormalChatUsers />
  </div>
</template>
<style scoped>
.users-chat-list {
  border: 1px solid #dfe2e8;
  overflow-y: auto;
  height: calc(100vh - 60px);
  width: 360px;
}

@media screen and (max-width: 991.98px) {
  .users-chat-list {
    height: calc(100vh - 126px);
    width: 100%;
  }
}
</style>