
<script>
import ActionDropdown from "../atoms/ActionDropdown.vue";
import AvatarImg from "../atoms/AvatarImg.vue";
import CircledIconBtn from "../atoms/CircledIconBtn.vue";
import RatingStar from "../atoms/RatingStar.vue";
import Text from "../atoms/Text.vue";
import Rating from "./Rating.vue";
import ProfileImg from "../../assets/images/profile-img-2.png";
export default {
  components: {
    AvatarImg,
    Text,
    CircledIconBtn,
    ActionDropdown,
    RatingStar,
    Rating,
  },
  data() {
    return {
      heartSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="12" fill="#F0F2F6"/><path d="M11.9996 17.9999C11.9119 18.0004 11.8249 17.9836 11.7437 17.9504C11.6624 17.9173 11.5885 17.8684 11.5263 17.8066L6.34626 12.6199C5.6965 11.9634 5.33203 11.077 5.33203 10.1533C5.33203 9.22955 5.6965 8.34314 6.34626 7.68659C7.0011 7.0336 7.88814 6.66691 8.81292 6.66691C9.7377 6.66691 10.6247 7.0336 11.2796 7.68659L11.9996 8.40659L12.7196 7.68659C13.3744 7.0336 14.2615 6.66691 15.1863 6.66691C16.111 6.66691 16.9981 7.0336 17.6529 7.68659C18.3027 8.34314 18.6671 9.22955 18.6671 10.1533C18.6671 11.077 18.3027 11.9634 17.6529 12.6199L12.4729 17.8066C12.4106 17.8684 12.3368 17.9173 12.2555 17.9504C12.1743 17.9836 12.0873 18.0004 11.9996 17.9999ZM8.81292 7.99993C8.53071 7.99865 8.25104 8.05338 7.99013 8.16095C7.72921 8.26852 7.49224 8.42679 7.29292 8.62659C6.8903 9.03134 6.66428 9.57903 6.66428 10.1499C6.66428 10.7208 6.8903 11.2685 7.29292 11.6733L11.9996 16.3866L16.7063 11.6733C17.1089 11.2685 17.3349 10.7208 17.3349 10.1499C17.3349 9.57903 17.1089 9.03134 16.7063 8.62659C16.2954 8.2384 15.7515 8.02213 15.1863 8.02213C14.621 8.02213 14.0771 8.2384 13.6663 8.62659L12.4729 9.82659C12.4109 9.88908 12.3372 9.93868 12.256 9.97252C12.1747 10.0064 12.0876 10.0238 11.9996 10.0238C11.9116 10.0238 11.8244 10.0064 11.7432 9.97252C11.662 9.93868 11.5882 9.88908 11.5263 9.82659L10.3329 8.62659C10.1336 8.42679 9.89663 8.26852 9.63572 8.16095C9.3748 8.05338 9.09514 7.99865 8.81292 7.99993Z" fill="black"/></svg>',
      threeDotsIcon:
        '<svg xmlns="http://www.w3.org/2000/svg" width="4" height="18" viewBox="0 0 4 18" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.00014 4C3.10414 4 4.00014 3.104 4.00014 2C4.00014 0.896 3.10414 0 2.00014 0C0.896137 0 0.000137329 0.896 0.000137329 2C0.000137329 3.104 0.896137 4 2.00014 4ZM2.00014 7C0.896137 7 0.000137329 7.896 0.000137329 9C0.000137329 10.104 0.896137 11 2.00014 11C3.10414 11 4.00014 10.104 4.00014 9C4.00014 7.896 3.10414 7 2.00014 7ZM0.000137329 16C0.000137329 14.896 0.896137 14 2.00014 14C3.10414 14 4.00014 14.896 4.00014 16C4.00014 17.104 3.10414 18 2.00014 18C0.896137 18 0.000137329 17.104 0.000137329 16Z" fill="#5F6269"/></svg>',
      profileImg: ProfileImg,
    };
  },
};
</script>
<template>
  <div class="d-flex align-items-start justify-content-between user-main-info">
    <div class="d-flex gap-2">
      <div>
        <AvatarImg :source="profileImg" width="48" height="48" />
      </div>

      <div>
        <Text class="fw-semibold clr-dark" content="Sophie Okonedo" />
        <Text
          class="d-block fs-12"
          content="Senior UX/UI Designer at Nexus"
          color="#667085"
        />
        <Text
          class="d-block fs-12"
          content="Technology Group"
          color="#667085"
        />
        <Rating />
      </div>
    </div>

    <div class="d-flex right-btns gap-2">
      <CircledIconBtn :svg="heartSvg" />
      <ActionDropdown
        class="rounded-circle"
        bg="#F0F2F6"
        :svg="threeDotsIcon"
      />
    </div>
  </div>
</template>

<style scoped>
.user-main-info {
  padding: 24px 24px 12px 24px;
}
</style>