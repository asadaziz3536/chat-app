<script>
import HeadingTwo from "../atoms/HeadingTwo.vue";
import UserListItem from "./UserListItem.vue";
import { mapGetters } from "vuex";
export default {
  components: { HeadingTwo, UserListItem },

  data() {
    return {
      NormalUsers: [],
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
    getNormalUsers() {
      this.NormalUsers = this.chatUsers.filter(
        (User, index) => User.status === "normal"
      );
    },
    showChatBox(user) {
      let chatBox = document.querySelector(".user-chatbox");
      chatBox.style.left = "0%";
      this.$store.dispatch("updateUserData", user);
    },
  },
  mounted() {
    this.getNormalUsers();
  },
  computed: {
    ...mapGetters(["searchQuery"]),
    normalChatUsersFiltered() {
      // Filter normal chat users based on search query
      const query = this.searchQuery.toLowerCase();
      return this.NormalUsers.filter((user) =>
        user.name.toLowerCase().includes(query)
      );
    },
  },
};
</script>
<template>
  <div class="normal-users">
    <HeadingTwo content="Chats" class="py-4 px-3" />
    <UserListItem
      @click="showChatBox(chatUser)"
      class="px-3"
      v-for="chatUser in searchQuery ? normalChatUsersFiltered : NormalUsers"
      :key="chatUser.id"
      :name="chatUser.name"
      :content="chatUser.content"
      :recepient="chatUser.recepient"
      :image="chatUser.image"
      :badgeNumber="chatUser.badgeNumber"
      :badgebg="chatUser.badgebg"
      :time="chatUser.time"
      :online="chatUser.online"
      :designation="chatUser.designation"
      :badgeDisplay="chatUser.badgeDisplay"
      :badgePillbg="chatUser.badgePillbg"
      :badgePillContent="chatUser.badgePillContent"
    />
  </div>
</template>
<style>
</style>