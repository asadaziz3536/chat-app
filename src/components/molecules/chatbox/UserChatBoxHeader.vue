

<script>
import ActionDropdown from "../../atoms/ActionDropdown.vue";
import AvatarImg from "../../atoms/AvatarImg.vue";
import CircledIconBtn from "../../atoms/CircledIconBtn.vue";
import Text from "../../atoms/Text.vue";
import ProfileImg from "../../../assets/images/profile-img.png";
import ProfileImg2 from "../../../assets/images/profile-img-2.png";
export default {
  components: {
    AvatarImg,
    CircledIconBtn,
    Text,
    ActionDropdown,
    Text,
  },
  data() {
    return {
      heartSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="12" fill="#F0F2F6"/><path d="M11.9996 17.9999C11.9119 18.0004 11.8249 17.9836 11.7437 17.9504C11.6624 17.9173 11.5885 17.8684 11.5263 17.8066L6.34626 12.6199C5.6965 11.9634 5.33203 11.077 5.33203 10.1533C5.33203 9.22955 5.6965 8.34314 6.34626 7.68659C7.0011 7.0336 7.88814 6.66691 8.81292 6.66691C9.7377 6.66691 10.6247 7.0336 11.2796 7.68659L11.9996 8.40659L12.7196 7.68659C13.3744 7.0336 14.2615 6.66691 15.1863 6.66691C16.111 6.66691 16.9981 7.0336 17.6529 7.68659C18.3027 8.34314 18.6671 9.22955 18.6671 10.1533C18.6671 11.077 18.3027 11.9634 17.6529 12.6199L12.4729 17.8066C12.4106 17.8684 12.3368 17.9173 12.2555 17.9504C12.1743 17.9836 12.0873 18.0004 11.9996 17.9999ZM8.81292 7.99993C8.53071 7.99865 8.25104 8.05338 7.99013 8.16095C7.72921 8.26852 7.49224 8.42679 7.29292 8.62659C6.8903 9.03134 6.66428 9.57903 6.66428 10.1499C6.66428 10.7208 6.8903 11.2685 7.29292 11.6733L11.9996 16.3866L16.7063 11.6733C17.1089 11.2685 17.3349 10.7208 17.3349 10.1499C17.3349 9.57903 17.1089 9.03134 16.7063 8.62659C16.2954 8.2384 15.7515 8.02213 15.1863 8.02213C14.621 8.02213 14.0771 8.2384 13.6663 8.62659L12.4729 9.82659C12.4109 9.88908 12.3372 9.93868 12.256 9.97252C12.1747 10.0064 12.0876 10.0238 11.9996 10.0238C11.9116 10.0238 11.8244 10.0064 11.7432 9.97252C11.662 9.93868 11.5882 9.88908 11.5263 9.82659L10.3329 8.62659C10.1336 8.42679 9.89663 8.26852 9.63572 8.16095C9.3748 8.05338 9.09514 7.99865 8.81292 7.99993Z" fill="black"/></svg>',
      CallSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4C16.859 4 20 7.141 20 11C20 11.553 20.447 12 21 12C21.553 12 22 11.553 22 11C22 6.037 17.963 2 13 2C12.448 2 12 2.447 12 3C12 3.553 12.448 4 13 4ZM13 8C14.654 8 16 9.346 16 11C16 11.553 16.447 12 17 12C17.553 12 18 11.553 18 11C18 8.243 15.757 6 13 6C12.448 6 12 6.447 12 7C12 7.553 12.448 8 13 8ZM21.03 15.2622C21.366 15.3392 21.639 15.5832 21.751 15.9082C21.833 16.1432 21.896 16.3882 21.936 16.6382C21.978 16.8872 22 17.1412 22 17.4002C22 19.9362 19.937 22.0002 17.4 22.0002C8.909 22.0002 2 15.0922 2 6.5992C2 4.0632 4.064 2.0002 6.6 2.0002C6.86 2.0002 7.117 2.0222 7.366 2.0652C7.609 2.1042 7.854 2.1662 8.091 2.2482C8.417 2.3612 8.661 2.6342 8.738 2.9702L10.107 8.9332C10.183 9.2622 10.088 9.6062 9.855 9.8492C9.718 9.9922 9.715 9.9952 8.475 10.6432C9.479 12.8182 11.224 14.5562 13.355 15.5272C14.005 14.2862 14.008 14.2822 14.15 14.1452C14.394 13.9122 14.737 13.8192 15.066 13.8922L21.03 15.2622Z" fill="#F36531"/><mask id="mask0_287_605" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4C16.859 4 20 7.141 20 11C20 11.553 20.447 12 21 12C21.553 12 22 11.553 22 11C22 6.037 17.963 2 13 2C12.448 2 12 2.447 12 3C12 3.553 12.448 4 13 4ZM13 8C14.654 8 16 9.346 16 11C16 11.553 16.447 12 17 12C17.553 12 18 11.553 18 11C18 8.243 15.757 6 13 6C12.448 6 12 6.447 12 7C12 7.553 12.448 8 13 8ZM21.03 15.2622C21.366 15.3392 21.639 15.5832 21.751 15.9082C21.833 16.1432 21.896 16.3882 21.936 16.6382C21.978 16.8872 22 17.1412 22 17.4002C22 19.9362 19.937 22.0002 17.4 22.0002C8.909 22.0002 2 15.0922 2 6.5992C2 4.0632 4.064 2.0002 6.6 2.0002C6.86 2.0002 7.117 2.0222 7.366 2.0652C7.609 2.1042 7.854 2.1662 8.091 2.2482C8.417 2.3612 8.661 2.6342 8.738 2.9702L10.107 8.9332C10.183 9.2622 10.088 9.6062 9.855 9.8492C9.718 9.9922 9.715 9.9952 8.475 10.6432C9.479 12.8182 11.224 14.5562 13.355 15.5272C14.005 14.2862 14.008 14.2822 14.15 14.1452C14.394 13.9122 14.737 13.8192 15.066 13.8922L21.03 15.2622Z" fill="white"/></mask><g mask="url(#mask0_287_605)"><rect width="24" height="24" fill="#F36531"/></g></svg>',
      VidoeSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0117 7.1454C20.3857 6.8734 19.6597 6.9914 19.1607 7.4514L16.9997 9.4514V7.9994C16.9997 6.3454 15.6547 4.9994 13.9997 4.9994H4.99969C3.34569 4.9994 1.99969 6.3454 1.99969 7.9994V15.9994C1.99969 17.6544 3.34569 18.9994 4.99969 18.9994H13.9997C15.6547 18.9994 16.9997 17.6544 16.9997 15.9994V14.5484L19.1607 16.5474C19.4817 16.8444 19.8967 16.9994 20.3197 16.9994C20.5527 16.9994 20.7877 16.9524 21.0117 16.8544C21.6207 16.5884 21.9997 16.0194 21.9997 15.3704V8.6294C21.9997 7.9804 21.6207 7.4114 21.0117 7.1454Z" fill="#F36531"/><mask id="mask0_287_616" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="4" width="21" height="15"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0117 7.1454C20.3857 6.8734 19.6597 6.9914 19.1607 7.4514L16.9997 9.4514V7.9994C16.9997 6.3454 15.6547 4.9994 13.9997 4.9994H4.99969C3.34569 4.9994 1.99969 6.3454 1.99969 7.9994V15.9994C1.99969 17.6544 3.34569 18.9994 4.99969 18.9994H13.9997C15.6547 18.9994 16.9997 17.6544 16.9997 15.9994V14.5484L19.1607 16.5474C19.4817 16.8444 19.8967 16.9994 20.3197 16.9994C20.5527 16.9994 20.7877 16.9524 21.0117 16.8544C21.6207 16.5884 21.9997 16.0194 21.9997 15.3704V8.6294C21.9997 7.9804 21.6207 7.4114 21.0117 7.1454Z" fill="white"/></mask><g mask="url(#mask0_287_616)"><rect width="24" height="24" fill="#F36531"/></g></svg>',
      InfoSvg:
        ' <svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24" fill=none><path fill-rule=evenodd clip-rule=evenodd d="M12 9C11.448 9 11 8.552 11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9ZM13 16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16V11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11V16ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.522 22 22 17.523 22 12C22 6.477 17.522 2 12 2Z" fill=#F36531 /><mask id=mask0_287_626 style=mask-type:luminance maskUnits=userSpaceOnUse x=2 y=2 width=20 height=20><path fill-rule=evenodd clip-rule=evenodd d="M12 9C11.448 9 11 8.552 11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9ZM13 16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16V11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11V16ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.522 22 22 17.523 22 12C22 6.477 17.522 2 12 2Z" fill=white /></mask><g mask=url(#mask0_287_626)><rect width=24 height=24 fill=#F36531 /></g></svg>',
      threeDotsIcon:
        '<svg xmlns="http://www.w3.org/2000/svg" width="4" height="18" viewBox="0 0 4 18" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.00014 4C3.10414 4 4.00014 3.104 4.00014 2C4.00014 0.896 3.10414 0 2.00014 0C0.896137 0 0.000137329 0.896 0.000137329 2C0.000137329 3.104 0.896137 4 2.00014 4ZM2.00014 7C0.896137 7 0.000137329 7.896 0.000137329 9C0.000137329 10.104 0.896137 11 2.00014 11C3.10414 11 4.00014 10.104 4.00014 9C4.00014 7.896 3.10414 7 2.00014 7ZM0.000137329 16C0.000137329 14.896 0.896137 14 2.00014 14C3.10414 14 4.00014 14.896 4.00014 16C4.00014 17.104 3.10414 18 2.00014 18C0.896137 18 0.000137329 17.104 0.000137329 16Z" fill="#5F6269"/></svg>',
      profileImg: ProfileImg,
      screenWidth: window.innerWidth,
      isSidebarVisible: false,

      ProfileImg2: ProfileImg2,
    };
  },

  methods: {
    // Function defining the closing of chatbox
    closeChatBox() {
      let chatBox = document.querySelector(".user-chatbox");
      chatBox.style.left = "100%";
    },
    // Toggle the sidebar
    toggleSidebar() {
      this.$store.dispatch("updatetoggleSidebar");
    },
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
  <!-- Chat Box Header -->
  <div class="user-chatbox-head">
    <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center gap-2">
        <span @click="closeChatBox" class="d-block d-lg-none"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </span>
        <AvatarImg
          :source="userData ? userData.image : ProfileImg2"
          width="36"
          height="36"
        />
        <Text
          class="fw-semibold clr-dark"
          :content="userData ? userData.name : 'Sophie Okonedo'"
        />
        <CircledIconBtn :svg="heartSvg" />
      </div>
      <div class="d-flex right-btns">
        <CircledIconBtn
          :svg="CallSvg"
          bg="transparent"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Audio Call"
        />
        <CircledIconBtn
          :svg="VidoeSvg"
          bg="transparent"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Video Call"
        />
        <ActionDropdown :svg="threeDotsIcon" />
        <CircledIconBtn
          @click="toggleSidebar"
          :svg="InfoSvg"
          bg="transparent"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Contact Details"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.user-chatbox-head {
  border-bottom: 1px solid var(--clr-lighter-variant-two);
  padding: 21px;
}
.user-chatbox-head .right-btns {
  gap: 16px;
}
.user-chatbox-head .custom-dropdown .dropdown-toggle svg path {
  fill: rgb(243, 101, 49);
}

@media screen and (max-width: 767.98px) {
  .user-chatbox-head .right-btns {
    gap: 2px;
  }
}
</style>