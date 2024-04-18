<script>
import Logo from "../atoms/Logo.vue";
import HeaderInnerRight from "../molecules/HeaderInnerRight.vue";
export default {
  components: {
    HeaderInnerRight,
    Logo,
  },
};
</script>
<template>
  <div class="header-wrapper">
    <div>
      <router-link to="/" class="logo">
        <Logo />
      </router-link>
    </div>
    <div>
      <HeaderInnerRight />
    </div>
  </div>
</template>



<style scoped>
</style>