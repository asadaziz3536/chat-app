<script>
import ChatsHeader from "../molecules/ChatsHeader.vue";
import NormalChatUsers from "../molecules/NormalChatUsers.vue";
import QueuedUsers from "../molecules/QueuedUsers.vue";
import UserListItem from "../molecules/UserListItem.vue";
import personImage from "../../assets/images/person.jpg";
import ProfileImg2 from "../../assets/images/profile-img-2.png";
import ProfileImg from "../../assets/images/profile-img-3.png";
import ProfileImgTwo from "../../assets/images/profile-img.png";
import ProfileImgThree from "../../assets/images/profile-img-2.png";
import ProfileImgFour from "../../assets/images/profile-img-4.svg";
import ProfileImgFive from "../../assets/images/profile-img-5.svg";
import ProfileImgSix from "../../assets/images/profile-img-6.svg";
export default {
  components: {
    ChatsHeader,
    UserListItem,
    QueuedUsers,
    NormalChatUsers,
  },
  data() {
    return {
      chatUsers: [
        {
          id: 1,
          name: "Emily Johnson",
          content: "Hello Emily How are you",
          recepient: "You: ",
          time: "8m: 20s",
          badgeNumber: 2,
          image: personImage,
          online: true,
          badgebg: "#f36531",
          status: "queued",
        },
        {
          id: 2,
          name: "Sophie Okonedo",
          designation: "UX Designer | GreenScape Solut...",
          waitTime: "Wait Time",
          time: "10m : 25s",
          badgeDisplay: "none",
          image: ProfileImg2,
          online: true,
          status: "queued",
        },
        // Add more queued users as needed
        {
          id: 3,
          name: "Quantum Pioneers",
          content: "Hello all session is started join...",
          recepient: "You: ",
          time: "1hr",
          badgeNumber: 2,
          image: ProfileImg,
          online: false,
          badgebg: "#f36531",
          waitTime: "",
          status: "normal",
        },
        {
          id: 4,
          name: "Martin Randolph",
          content: "Hello Martin how are you...",
          designation: "UX Designer | GreenScape Solutions",
          draft: "Draft: ",
          image: ProfileImgTwo,
          badgeNumber: 5,
          badgebg: "#5F6269",
          time: "1hr",
          status: "normal",
        },
        {
          id: 5,
          name: "Sophie Okonedo",
          content: "Sophie i ma sending you soon",
          designation: "Product Manager  | Microsoft",
          image: ProfileImgThree,
          time: "1hr",
          badgeDisplay: "none",
          badgePillbg: "#0061F9",
          badgePillContent: "Exhibitor",
          status: "normal",
        },
        {
          id: 6,
          name: "Microsoft",
          content: "Hello Martin how are you...",
          recepient: "Clark: ",
          image: ProfileImgFour,
          time: "1hr",
          badgeDisplay: "none",
          online: "false",
          status: "normal",
        },
        {
          id: 7,
          name: "Public Chatroom",
          content: "Hello Martin how are you...",
          recepient: "Clark: ",
          image: ProfileImgFive,
          time: "1hr",
          waitTime: "",
          badgeDisplay: "none",
          online: "false",
          status: "normal",
        },
        {
          id: 8,
          name: "Robert Anderson",
          content: "Hello Robert send me your resume",
          designation: "Accounts Manager | Elite Financial Advisors",
          recepient: "You: ",
          image: ProfileImgSix,
          waitTime: "",
          time: "1hr",
          badgeDisplay: "none",
          badgePillContent: "Speaker",
          badgePillbg: "#58B859",
          status: "normal",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="users-chat-list custom-scrollbar">
    <ChatsHeader />
    <QueuedUsers :chatUsers="chatUsers" />
    <NormalChatUsers :chatUsers="chatUsers" />
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