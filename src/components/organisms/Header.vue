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
      <Logo />
    </div>
    <div>
      <HeaderInnerRight />
    </div>
  </div>
</template>



<style>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dfe2e8;
  padding: 8px;
}
</style>