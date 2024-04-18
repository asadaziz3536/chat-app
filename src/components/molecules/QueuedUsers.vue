<script>
import HeadingTwo from "../atoms/HeadingTwo.vue";
import UserListItem from "./UserListItem.vue";
import { mapGetters } from "vuex";
export default {
  components: { HeadingTwo, UserListItem },

  data() {
    return {
      queuedUsers: [],
    };
  },
  // Props section, defining the properties accepted by the component
  props: {
    chatUsers: {
      type: Array,
      default: [],
    },
  },
  methods: {
    // filter queued users
    filterQueuedUsers() {
      this.queuedUsers = this.chatUsers.filter(
        (User, index) => User.status === "queued"
      );
    },
    showChatBox(user) {
      let chatBox = document.querySelector(".user-chatbox");
      chatBox.style.left = "0%";
      this.$store.dispatch("updateUserData", user);
    },
  },
  mounted() {
    this.filterQueuedUsers();
  },

  computed: {
    ...mapGetters(["searchQuery"]),
    queuedUsersFiltered() {
      return this.queuedUsers.filter((user) => {
        return user.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },
};
</script>
<template>
  <div class="queued-users">
    <HeadingTwo content="Queued" class="py-4 px-3" />
    <UserListItem
      @click="showChatBox(chatUser)"
      v-for="chatUser in searchQuery ? queuedUsersFiltered : queuedUsers"
      :key="chatUser.id"
      class="px-3"
      :name="chatUser.name"
      :content="chatUser.content"
      :recepient="chatUser.recepient"
      :designation="chatUser.designation"
      :time="chatUser.time"
      :badgeNumber="chatUser.badgeNumber"
      :image="chatUser.image"
      :badgeDisplay="chatUser.badgeDisplay"
      :online="chatUser.online"
      :badgebg="chatUser.badgebg"
      :badgePillbg="chatUser.badgePillbg"
      :badgePillContent="chatUser.badgePillContent"
    />
  </div>
</template>
<style>
</style>