

<script>
import ActionDropdown from "../../atoms/ActionDropdown.vue";
import AvatarImg from "../../atoms/AvatarImg.vue";
import CircledIconBtn from "../../atoms/CircledIconBtn.vue";
import Paragraph from "../../atoms/Paragraph.vue";
import Text from "../../atoms/Text.vue";
export default {
  components: {
    AvatarImg,
    CircledIconBtn,
    Text,
    ActionDropdown,
    Paragraph,
    Text,
  },
  data() {
    return {
      ShareSvg:
        '<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24" fill=none><path fill-rule=evenodd clip-rule=evenodd d="M20.2207 21C19.7597 21 19.3587 20.685 19.2487 20.237C18.3597 16.588 15.2287 13.952 11.4537 13.553V14.674C11.4537 15.38 11.0347 16.009 10.3617 16.314C9.62969 16.647 8.77769 16.527 8.18469 16.01L3.11769 11.586C2.72569 11.242 2.49969 10.755 2.49969 10.25C2.49969 9.74501 2.72569 9.25801 3.11769 8.91401L8.18469 4.49001C8.77769 3.97301 9.62969 3.85301 10.3617 4.18601C11.0347 4.49101 11.4537 5.12001 11.4537 5.82601V7.04401C17.0777 7.53701 21.4997 12.15 21.4997 17.75C21.4997 18.56 21.3967 19.396 21.1927 20.236C21.0837 20.685 20.6827 21 20.2207 21Z" fill=#5F6269 /><mask id=mask0_0_928 style=mask-type:luminance maskUnits=userSpaceOnUse x=2 y=3 width=20 height=18><path fill-rule=evenodd clip-rule=evenodd d="M20.2207 21C19.7597 21 19.3587 20.685 19.2487 20.237C18.3597 16.588 15.2287 13.952 11.4537 13.553V14.674C11.4537 15.38 11.0347 16.009 10.3617 16.314C9.62969 16.647 8.77769 16.527 8.18469 16.01L3.11769 11.586C2.72569 11.242 2.49969 10.755 2.49969 10.25C2.49969 9.74501 2.72569 9.25801 3.11769 8.91401L8.18469 4.49001C8.77769 3.97301 9.62969 3.85301 10.3617 4.18601C11.0347 4.49101 11.4537 5.12001 11.4537 5.82601V7.04401C17.0777 7.53701 21.4997 12.15 21.4997 17.75C21.4997 18.56 21.3967 19.396 21.1927 20.236C21.0837 20.685 20.6827 21 20.2207 21Z" fill=white /></mask><g mask=url(#mask0_0_928)><rect width=24 height=24 fill=#5F6269 /></g></svg>',
    };
  },
};
</script>

<template>
  <div class="user-chatbox-body flex-grow-1 overflow-auto custom-scrollbar">
    <div class="chat-message-wrapper">
      <div class="d-flex">
        <AvatarImg />
        <Text class="fw-bolder clr-lighter fs-14" content="Sophie Okonedo" />
        &nbsp;
        <Text class="fs-12" content="9:30 AM"></Text>
      </div>
      <div>
        <div class="d-flex align-items-center">
          <div class="chat-message">
            <Paragraph
              class="fs-16 mb-0"
              bg="#DFE2E8"
              content="John contacted you with Sophie Okenodo"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="chat-message-wrapper">
      <div class="d-flex">
        <AvatarImg />
        <Text class="fw-bolder clr-lighter fs-14" content="Sophie Okonedo" />
        &nbsp;
        <Text class="fs-12" content="9:30 AM"></Text>
      </div>
      <div>
        <div class="d-flex align-items-center">
          <div class="chat-message">
            <Paragraph
              class="fs-16 mb-0"
              bg="#DFE2E8"
              content="Hi Alex! Have you heard about the upcoming 
        virtual UX design event next month?"
            />
          </div>
          <div class="d-flex action-btns">
            <CircledIconBtn :svg="ShareSvg" bg="transparent" />
            <ActionDropdown padding="0" class="p-0" />
          </div>
        </div>
      </div>
    </div>

    <div class="chat-message-wrapper response">
      <div class="chat-message-info d-flex">
        <AvatarImg />
        <Text class="fw-bolder clr-lighter fs-14" content="You" />
        &nbsp;
        <Text class="fs-12" content="9:30 AM"></Text>
      </div>
      <div>
        <div class="d-flex align-items-center">
          <div class="chat-message response-msg">
            <Paragraph
              class="fs-16 mb-0 text-white"
              content="Hey Ali! Yes, I got tickets. Super excited! 🎶"
            />
          </div>
          <div class="d-flex action-btns">
            <CircledIconBtn :svg="ShareSvg" bg="transparent" />
            <ActionDropdown padding="0" class="p-0" />
          </div>
        </div>
      </div>
    </div>
    <div class="chat-message-wrapper">
      <div class="d-flex">
        <AvatarImg />
        <Text class="fw-bolder clr-lighter fs-14" content="Sophie Okonedo" />
        &nbsp;
        <Text class="fs-12" content="9:30 AM"></Text>
      </div>
      <div>
        <div class="d-flex align-items-center">
          <div class="chat-message">
            <Paragraph
              class="fs-16 mb-0"
              bg="#DFE2E8"
              content="Hey Samir! Are you going to the concert tomorrow night?"
            />
          </div>
          <div class="d-flex action-btns">
            <CircledIconBtn :svg="ShareSvg" bg="transparent" />
            <ActionDropdown padding="0" class="p-0" />
          </div>
        </div>
      </div>
    </div>

    <div class="chat-message-wrapper response">
      <div class="chat-message-info">
        <AvatarImg />
        <Text class="fw-bolder clr-lighter fs-14" content="You" />
        &nbsp;
        <Text class="fs-12" content="9:30 AM"></Text>
      </div>
      <div class="file pb-1"></div>
      <div>
        <div class="chat-message response-msg">
          <Paragraph
            class="fs-16 mb-0 text-white"
            content="Hey Sophie! Yes, I got tickets. Super excited! 🎶"
          />
        </div>
        <div class="d-flex action-btns">
          <CircledIconBtn :svg="ShareSvg" bg="transparent" />
          <ActionDropdown padding="0" class="p-0" />
        </div>
      </div>
    </div>
    <div class="chat-message-wrapper">
      <div class="d-flex">
        <AvatarImg />
        <Text class="fw-bolder clr-lighter fs-14" content="Sophie Okonedo" />
        &nbsp;
        <Text class="fs-12" content="7 min ago"></Text>
      </div>
      <div>
        <div class="d-flex align-items-center">
          <div class="chat-message">
            <Paragraph
              class="fs-16 mb-0"
              bg="#DFE2E8"
              content="“Hey Sophe! Yes I got tickets. Super Excited”"
            />
          </div>
          <div class="d-flex action-btns">
            <CircledIconBtn :svg="ShareSvg" bg="transparent" />
            <ActionDropdown padding="0" class="p-0" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.user-chatbox-body {
  padding: 24px 24px 0px 24px;
}
.chat-message-wrapper {
  margin-bottom: 20px;
}
.chat-message-wrapper.response {
  max-width: max-content;
  margin-left: auto;
  text-align: right;
}
.chat-message-wrapper.response .action-btns {
  display: none !important;
}
.chat-message-wrapper.response .chat-message-info {
  flex-direction: row-reverse;
}
.chat-message {
  padding: 4px 12px 4px 12px;
  border-radius: 2px 8px 8px 8px;
  opacity: 0px;
  background: var(--clr-lighter-variant-two);
  max-width: max-content;
}
.chat-message p {
  line-height: 24px;
  font-weight: 500;
}
.chat-message.response-msg {
  padding: 4px 12px 4px 12px;
  border-radius: 8px 2px 8px 8px;
  background: var(--clr-primary);
}
.action-btns button,
.action-btns .custom-dropdown {
  width: 24px;
  height: 24px;
}
.custom-dropdown .dropdown-toggle {
  padding: 0;
}
</style>