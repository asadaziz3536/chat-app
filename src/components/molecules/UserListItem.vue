<script>
import HeadingThree from "../atoms/HeadingThree.vue";
import Text from "../atoms/Text.vue";
import Badge from "../atoms/Badge.vue";
import AvatarImg from "../atoms/AvatarImg.vue";
import ActionDropdown from "../atoms/ActionDropdown.vue";
export default {
  components: {
    HeadingThree,
    Text,
    Badge,
    AvatarImg,
    ActionDropdown,
  },
  // Props section, defining the properties accepted by the component
  props: {
    name: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    recepient: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    time: {
      type: String,
      default: "",
    },
    badgeNumber: {
      type: String,
      default: "",
    },
    badgeDisplay: {
      type: String,
      default: "",
    },
    draft: {
      type: String,
      default: "",
    },
    designation: {
      type: String,
      default: "",
    },
    waitTime: {
      type: String,
      default: "",
    },
    badgebg: {
      type: String,
      default: "",
    },
    badgePillbg: {
      type: String,
      default: "",
    },
    online: {
      type: Boolean,
      default: "",
    },
    badgePillContent: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      threeDotsIcon:
        '<svg xmlns="http://www.w3.org/2000/svg" width="4" height="18" viewBox="0 0 4 18" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.00014 4C3.10414 4 4.00014 3.104 4.00014 2C4.00014 0.896 3.10414 0 2.00014 0C0.896137 0 0.000137329 0.896 0.000137329 2C0.000137329 3.104 0.896137 4 2.00014 4ZM2.00014 7C0.896137 7 0.000137329 7.896 0.000137329 9C0.000137329 10.104 0.896137 11 2.00014 11C3.10414 11 4.00014 10.104 4.00014 9C4.00014 7.896 3.10414 7 2.00014 7ZM0.000137329 16C0.000137329 14.896 0.896137 14 2.00014 14C3.10414 14 4.00014 14.896 4.00014 16C4.00014 17.104 3.10414 18 2.00014 18C0.896137 18 0.000137329 17.104 0.000137329 16Z" fill="#5F6269"/></svg>',
    };
  },
};
</script>

<template>
  <!-- User List Item  -->
  <li class="user-list-item d-flex justify-content-between gap-2">
    <div class="position-relative">
      <AvatarImg :source="image" width="40px" height="40px" />

      <div
        :style="{ display: online ? 'block' : 'none' }"
        class="active-user"
      ></div>
    </div>
    <div class="flex-grow-1">
      <div class="d-flex justify-content-between">
        <HeadingThree class="mb-0 fs-16 clr-dark fw-bolder" :name="name" />
        <badge
          :style="{ background: badgePillbg }"
          class="badge badge-pill badge-primary"
          :content="badgePillContent"
        />
        <div>
          <Text
            :content="waitTime ? waitTime : ''"
            class="fw-regular fs-14 clr-lighter d-block"
          />
          <Text :content="time" class="time d-block fs-14" />
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-end">
        <div>
          <Text
            :content="designation"
            class="fw-medium fs-14 clr-light one-line"
          />
          <div class="one-line">
            <Text :content="recepient" class="fw-bolder clr-lighter fs-14" />
            <router-link to="/">
              <Text :content="draft" class="fw-med fs-14 clr-blue" />
            </router-link>

            <Text :content="content" class="fw-regular fs-14 clr-lighter" />
          </div>
        </div>
        <Badge
          :class="{
            'd-none': badgeDisplay === 'none',
            'd-block rounded-circle': badgeDisplay !== 'none',
          }"
          :content="badgeNumber"
          width="16px"
          height="16px"
          font="8px"
          padding="4px 6px"
          lh="8px"
          :bg="badgebg"
        />
        <ActionDropdown
          padding="2px 14px"
          :svg="threeDotsIcon"
          class="action-dropdown"
        />
      </div>
    </div>
  </li>
</template>
<style scoped>
.one-line {
  overflow: hidden;
  width: 90%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>