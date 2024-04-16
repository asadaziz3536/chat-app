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
    online: {
      type: Boolean,
      default: "",
    },
  },
};
</script>

<template>
  <li class="user-list-item d-flex justify-content-between gap-2">
    <div class="position-relative">
      <AvatarImg :source="image" width="40px" height="40px" />

      <div :style="{ display: online ? 'block' : 'none' }" class="active"></div>
    </div>
    <div class="flex-grow-1">
      <div class="d-flex justify-content-between">
        <HeadingThree class="mb-0 fs-16 clr-dark fw-bolder" :name="name" />
        <div>
          <Text
            :content="waitTime"
            class="fw-regular fs-14 clr-lighter d-block"
          />
          <Text :content="time" class="time d-block fs-14" />
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-end">
        <div>
          <Text :content="designation" class="fw-medium fs-14 clr-light" />
          <div>
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
          padding="10px"
          :bg="badgebg"
        />
        <ActionDropdown class="action-dropdown" />
      </div>
    </div>
  </li>
</template>
<style scoped>
.user-list-item {
  border-bottom: 1px solid #dfe2e8;
  padding: 12px 0px;
}
.active {
  background: var(--clr-success);
  width: 12px;
  height: 12px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  border: 2px solid #fff;
}
.normal-users .user-list-item .time {
  color: var(--clr-lighter-variant);
}
.queued-users .user-list-item .time {
  color: var(--clr-dark);
  font-weight: 800;
}
</style>