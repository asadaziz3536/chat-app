

<script>
import Header from "../organisms/Header.vue";
import Tabs from "../organisms/Tabs.vue";
import ChatBox from "../organisms/ChatBox.vue";
import UserDetails from "../organisms/UserDetailsBar.vue";
import "../../assets/styles/main.css";
export default {
  components: {
    Header,
    Tabs,
    ChatBox,
    UserDetails,
  },
};
</script>

<template>
  <Header />
  <div class="main-contain d-flex">
    <Tabs />
    <ChatBox />
    <UserDetails />
  </div>
</template>

<style scoped>
.main-contain {
  overflow: auto;
  height: calc(100vh - 60px);
}
/* Media Queries */

@media screen and (max-width: 991.98px) {
  .main-contain {
    flex-direction: column;
  }
}
</style>