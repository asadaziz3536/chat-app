<script>
import HeadingTwo from "../atoms/HeadingTwo.vue";
import UserListItem from "./UserListItem.vue";
import ImgOne from "../../assets/images/person.jpg";
export default {
  components: { HeadingTwo, UserListItem },

  data() {
    return {
      img: ImgOne,
    };
  },
};
</script>
<template>
  <div class="normal-users">
    <HeadingTwo content="Chats" class="py-4 px-3" />
    <UserListItem
      class="px-3"
      name="Quantum Pioneers"
      content="Hello all session is started join..."
      recepient="You: "
      :image="img"
      badgeNumber="2"
      waitTime
      time="1hr"
    />
    <UserListItem
      class="px-3"
      name="Martin Randolph"
      content="Hello Martin how are you..."
      designation="UX Designer | GreenScape Solutions"
      draft="Draft: "
      :image="img"
      badgeNumber="5"
      badgebg="#5F6269"
      time="1hr"
    />
    <UserListItem
      class="px-3"
      name="Sophie Okonedo"
      content="Sophie i ma sending you soon"
      designation="Product Manager  | Microsoft"
      :image="img"
      time="1hr"
      badgeDisplay="none"
    />
    <UserListItem
      class="px-3"
      name="Microsoft"
      content="Hello Martin how are you..."
      recepient="Clark: "
      :image="img"
      time="1hr"
      badgeDisplay="none"
    />
    <UserListItem
      class="px-3"
      name="Public Chatroom"
      content="Hello Martin how are you..."
      recepient="Clark: "
      :image="img"
      time="1hr"
      badgeDisplay="none"
    />
    <UserListItem
      class="px-3"
      name="Robert Anderson"
      content="Hello Robert send me your resume"
      designation="Accounts Manager | Elite Financial Advisors"
      recepient="You: "
      :image="img"
      waitTime
      time="1hr"
      badgeDisplay="none"
    />
  </div>
</template>
<style>
</style>