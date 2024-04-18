<script>
import RatingStar from "../atoms/RatingStar.vue";
import Text from "../atoms/Text.vue";
export default {
  components: { RatingStar, Text },
};
</script>
<template>
  <div class="rating">
    <RatingStar color="#FFA32D" />
    <RatingStar color="#FFA32D" />
    <RatingStar color="#FFA32D" />
    <RatingStar color="#DFE2E8" />
    <RatingStar color="#DFE2E8" />
    &nbsp;
    <Text class="fw-bolder clr-lighter" content="3.0" />
  </div>
</template>
<style scoped>
</style>