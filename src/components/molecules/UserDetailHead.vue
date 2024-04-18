
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
        '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" ><path d="M6.99959 11.9999C6.91185 12.0004 6.82488 11.9836 6.74365 11.9504C6.66243 11.9173 6.58855 11.8684 6.52626 11.8066L1.34626 6.61993C0.696497 5.96338 0.332031 5.07697 0.332031 4.15326C0.332031 3.22955 0.696497 2.34314 1.34626 1.68659C2.0011 1.0336 2.88814 0.666908 3.81292 0.666908C4.7377 0.666908 5.62475 1.0336 6.27959 1.68659L6.99959 2.40659L7.71959 1.68659C8.37443 1.0336 9.26148 0.666908 10.1863 0.666908C11.111 0.666908 11.9981 1.0336 12.6529 1.68659C13.3027 2.34314 13.6671 3.22955 13.6671 4.15326C13.6671 5.07697 13.3027 5.96338 12.6529 6.61993L7.47292 11.8066C7.41063 11.8684 7.33675 11.9173 7.25553 11.9504C7.1743 11.9836 7.08733 12.0004 6.99959 11.9999ZM3.81292 1.99993C3.53071 1.99865 3.25104 2.05338 2.99013 2.16095C2.72921 2.26852 2.49224 2.42679 2.29292 2.62659C1.8903 3.03134 1.66428 3.57903 1.66428 4.14993C1.66428 4.72083 1.8903 5.26851 2.29292 5.67326L6.99959 10.3866L11.7063 5.67326C12.1089 5.26851 12.3349 4.72083 12.3349 4.14993C12.3349 3.57903 12.1089 3.03134 11.7063 2.62659C11.2954 2.2384 10.7515 2.02213 10.1863 2.02213C9.62099 2.02213 9.07715 2.2384 8.66626 2.62659L7.47292 3.82659C7.41095 3.88908 7.33721 3.93868 7.25597 3.97252C7.17473 4.00637 7.0876 4.02379 6.99959 4.02379C6.91158 4.02379 6.82444 4.00637 6.74321 3.97252C6.66197 3.93868 6.58823 3.88908 6.52626 3.82659L5.33292 2.62659C5.13361 2.42679 4.89663 2.26852 4.63572 2.16095C4.3748 2.05338 4.09514 1.99865 3.81292 1.99993Z" fill="black"/></svg>',
      threeDotsIcon:
        '<svg xmlns="http://www.w3.org/2000/svg" width="4" height="18" viewBox="0 0 4 18" ><path fill-rule="evenodd" clip-rule="evenodd" d="M2.00014 4C3.10414 4 4.00014 3.104 4.00014 2C4.00014 0.896 3.10414 0 2.00014 0C0.896137 0 0.000137329 0.896 0.000137329 2C0.000137329 3.104 0.896137 4 2.00014 4ZM2.00014 7C0.896137 7 0.000137329 7.896 0.000137329 9C0.000137329 10.104 0.896137 11 2.00014 11C3.10414 11 4.00014 10.104 4.00014 9C4.00014 7.896 3.10414 7 2.00014 7ZM0.000137329 16C0.000137329 14.896 0.896137 14 2.00014 14C3.10414 14 4.00014 14.896 4.00014 16C4.00014 17.104 3.10414 18 2.00014 18C0.896137 18 0.000137329 17.104 0.000137329 16Z" fill="#5F6269"/></svg>',
      profileImg: ProfileImg,
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
  <!-- User Detail Head -->
  <div class="d-flex align-items-start justify-content-between user-main-info">
    <div class="d-flex gap-2">
      <div>
        <AvatarImg
          :source="userData ? userData.image : profileImg"
          width="48"
          height="48"
        />
      </div>

      <div>
        <Text
          class="fw-semibold clr-dark"
          :content="userData ? userData.name : 'Sophie Okonedo'"
        />
        <Text
          class="d-block fs-12"
          :content="
            userData ? userData.designation : 'Senior UX/UI Designer at Nexus'
          "
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
      <CircledIconBtn :svg="heartSvg" class="icon-btn" />
      <ActionDropdown
        class="rounded-circle icon-btn d-flex align-items-center justify-content-center"
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