

<script>
import ActionDropdown from "../../atoms/ActionDropdown.vue";
import AvatarImg from "../../atoms/AvatarImg.vue";
import CircledIconBtn from "../../atoms/CircledIconBtn.vue";
import IconBtn from "../../atoms/IconBtn.vue";
import Paragraph from "../../atoms/Paragraph.vue";
import Text from "../../atoms/Text.vue";
import ChatMessage from "../ChatMessage.vue";
import BotImg from "../../../assets/images/Bot.png";
import profileImg from "../../../assets/images/profile-img-2.png";
import MyImg from "../../../assets/images/me.png";
import Thumbnail from "../../../assets/images/thumbnail.png";
export default {
  components: {
    AvatarImg,
    CircledIconBtn,
    Text,
    ActionDropdown,
    Paragraph,
    Text,
    IconBtn,
    ChatMessage,
  },
  data() {
    return {
      ShareSvg:
        '<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24" fill=none><path fill-rule=evenodd clip-rule=evenodd d="M20.2207 21C19.7597 21 19.3587 20.685 19.2487 20.237C18.3597 16.588 15.2287 13.952 11.4537 13.553V14.674C11.4537 15.38 11.0347 16.009 10.3617 16.314C9.62969 16.647 8.77769 16.527 8.18469 16.01L3.11769 11.586C2.72569 11.242 2.49969 10.755 2.49969 10.25C2.49969 9.74501 2.72569 9.25801 3.11769 8.91401L8.18469 4.49001C8.77769 3.97301 9.62969 3.85301 10.3617 4.18601C11.0347 4.49101 11.4537 5.12001 11.4537 5.82601V7.04401C17.0777 7.53701 21.4997 12.15 21.4997 17.75C21.4997 18.56 21.3967 19.396 21.1927 20.236C21.0837 20.685 20.6827 21 20.2207 21Z" fill=#5F6269 /><mask id=mask0_0_928 style=mask-type:luminance maskUnits=userSpaceOnUse x=2 y=3 width=20 height=18><path fill-rule=evenodd clip-rule=evenodd d="M20.2207 21C19.7597 21 19.3587 20.685 19.2487 20.237C18.3597 16.588 15.2287 13.952 11.4537 13.553V14.674C11.4537 15.38 11.0347 16.009 10.3617 16.314C9.62969 16.647 8.77769 16.527 8.18469 16.01L3.11769 11.586C2.72569 11.242 2.49969 10.755 2.49969 10.25C2.49969 9.74501 2.72569 9.25801 3.11769 8.91401L8.18469 4.49001C8.77769 3.97301 9.62969 3.85301 10.3617 4.18601C11.0347 4.49101 11.4537 5.12001 11.4537 5.82601V7.04401C17.0777 7.53701 21.4997 12.15 21.4997 17.75C21.4997 18.56 21.3967 19.396 21.1927 20.236C21.0837 20.685 20.6827 21 20.2207 21Z" fill=white /></mask><g mask=url(#mask0_0_928)><rect width=24 height=24 fill=#5F6269 /></g></svg>',
      threeDotsIcon:
        '<svg xmlns="http://www.w3.org/2000/svg" width="4" height="18" viewBox="0 0 4 18" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.00014 4C3.10414 4 4.00014 3.104 4.00014 2C4.00014 0.896 3.10414 0 2.00014 0C0.896137 0 0.000137329 0.896 0.000137329 2C0.000137329 3.104 0.896137 4 2.00014 4ZM2.00014 7C0.896137 7 0.000137329 7.896 0.000137329 9C0.000137329 10.104 0.896137 11 2.00014 11C3.10414 11 4.00014 10.104 4.00014 9C4.00014 7.896 3.10414 7 2.00014 7ZM0.000137329 16C0.000137329 14.896 0.896137 14 2.00014 14C3.10414 14 4.00014 14.896 4.00014 16C4.00014 17.104 3.10414 18 2.00014 18C0.896137 18 0.000137329 17.104 0.000137329 16Z" fill="#5F6269"/></svg>',
      Smiley:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_308_474)"><path d="M10.102 11.7353C10.632 11.7353 11.0613 11.1493 11.0613 10.4273C11.0613 9.70534 10.632 9.11934 10.102 9.11934C9.57201 9.11934 9.14267 9.70534 9.14267 10.4273C9.14267 11.1493 9.57201 11.7353 10.102 11.7353ZM7.96601 12.6433C7.94867 12.4387 7.87868 16.122 12.008 16.344C16.052 16.1773 16.052 12.6433 16.052 12.6433C12 13.5873 7.96601 12.6433 7.96601 12.6433ZM15.5413 13.382C15.5413 13.382 15.0953 14.688 12.174 14.688C9.83734 14.688 8.58201 13.912 8.43601 13.382C8.43601 13.382 12.3773 14.0853 15.5413 13.382ZM11.8693 4.67401C7.73934 4.67401 4.65201 8.02201 4.65201 12.152C4.65201 16.282 7.86934 19.326 11.9993 19.326C16.1293 19.326 19.3467 16.282 19.3467 12.152C19.3473 8.02201 15.9993 4.67401 11.8693 4.67401ZM12 18.236C8.48468 18.236 5.74601 15.6453 5.74601 12.13C5.74601 8.61468 8.37401 5.76468 11.8893 5.76468C15.4047 5.76468 18.2547 8.61468 18.2547 12.13C18.254 15.6447 15.5153 18.236 12 18.236ZM14.072 11.7353C14.602 11.7353 15.0313 11.1493 15.0313 10.4273C15.0313 9.70534 14.602 9.11934 14.072 9.11934C13.542 9.11934 13.1127 9.70534 13.1127 10.4273C13.1127 11.1493 13.542 11.7353 14.072 11.7353Z" fill="#5F6269"/></g><defs><clipPath id="clip0_308_474"><rect width="16" height="16" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>',
      BotImg: BotImg,
      profileImg: profileImg,
      MyImg: MyImg,
      Thumbnail: Thumbnail,
      // Chat Message Data Array
      chatMessages: [
        {
          sender: "Bot",
          avatarSource: BotImg,
          time: "9:30 AM",
          message: "John contacted you with Sophie Okonedo",
        },
        {
          sender: "Sophie Okonedo",
          avatarSource: profileImg,
          time: "9:30 AM",
          message:
            "Hi Alex! Have you heard about the upcoming virtual UX design event next month?",
          actions: ["Share", "More Options", "Add emojis"],
        },
        {
          sender: "You",
          avatarSource: MyImg,
          time: "9:30 AM",
          message: "Hey Ali! Yes, I got tickets. Super excited! 🎶",
          response: true,
        },
        {
          sender: "Sophie Okonedo",
          avatarSource: profileImg,
          time: "9:30 AM",
          message: "Hey Samir! Are you going to the concert tomorrow night?",
          actions: ["Share", "More Options", "Add emojis"],
        },
        {
          sender: "You",
          avatarSource: MyImg,
          time: "9:30 AM",
          message: "Hey Sophie! Yes, I got tickets. Super excited! 🎶",
          response: true,
          fileThumbnail: Thumbnail,
        },
        {
          sender: "Sophie Okonedo",
          avatarSource: profileImg,
          time: "9:30 AM",
          message: "Hey Sophe! Yes I got tickets. Super Excited",
          actions: ["Share", "More Options", "Add emojis"],
        },
      ],
    };
  },
  // Props section, defining the properties accepted by the component
  props: {
    userData: {
      type: Object,
      default: {},
    },
  },
};
</script>

<template>
  <div class="user-chatbox-body flex-grow-1 overflow-auto custom-scrollbar">
    <ChatMessage
      v-for="(chatMessage, index) in chatMessages"
      :key="chatMessage[index]"
      :userData="userData"
      :chatMessage="chatMessage"
    />
  </div>
</template>
<style scoped>
.user-chatbox-body {
  padding: 24px 24px 0px 24px;
}

@media screen and (max-width: 991.98px) {
  .user-chatbox-body {
    padding: 16px 16px 0px 16px;
  }
}
</style>