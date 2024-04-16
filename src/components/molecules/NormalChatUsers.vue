<script>
import HeadingTwo from "../atoms/HeadingTwo.vue";
import UserListItem from "./UserListItem.vue";
import ProfileImg from "../../assets/images/profile-img-3.png";
import ProfileImgTwo from "../../assets/images/profile-img.png";
import ProfileImgThree from "../../assets/images/profile-img-2.png";
import ProfileImgFour from "../../assets/images/profile-img-4.svg";
import ProfileImgFive from "../../assets/images/profile-img-5.svg";
import ProfileImgSix from "../../assets/images/profile-img-6.svg";
export default {
  components: { HeadingTwo, UserListItem },

  data() {
    return {
      image: ProfileImg,
      profileImg2: ProfileImgTwo,
      profileImg3: ProfileImgThree,
      profileImg4: ProfileImgFour,
      profileImg5: ProfileImgFive,
      profileImg6: ProfileImgSix,
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
      :image="image"
      badgeNumber="2"
      badgebg="#f36531"
      waitTime
      time="1hr"
      :online="false"
    />
    <UserListItem
      class="px-3"
      name="Martin Randolph"
      content="Hello Martin how are you..."
      designation="UX Designer | GreenScape Solutions"
      draft="Draft: "
      :image="profileImg2"
      badgeNumber="5"
      badgebg="#5F6269"
      time="1hr"
    />
    <UserListItem
      class="px-3"
      name="Sophie Okonedo"
      content="Sophie i ma sending you soon"
      designation="Product Manager  | Microsoft"
      :image="profileImg3"
      time="1hr"
      badgeDisplay="none"
      badgePillbg="#0061F9"
      badgePillContent="Exhibitor"
    />
    <UserListItem
      class="px-3"
      name="Microsoft"
      content="Hello Martin how are you..."
      recepient="Clark: "
      :image="profileImg4"
      time="1hr"
      badgeDisplay="none"
      :online="false"
    />
    <UserListItem
      class="px-3"
      name="Public Chatroom"
      content="Hello Martin how are you..."
      recepient="Clark: "
      :image="profileImg5"
      time="1hr"
      badgeDisplay="none"
      :online="false"
    />
    <UserListItem
      class="px-3"
      name="Robert Anderson"
      content="Hello Robert send me your resume"
      designation="Accounts Manager | Elite Financial Advisors"
      recepient="You: "
      :image="profileImg6"
      waitTime
      time="1hr"
      badgeDisplay="none"
      badgePillContent="Speaker"
      badgePillbg="#58B859"
    />
  </div>
</template>
<style>
</style>