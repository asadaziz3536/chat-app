<script>
import HeadingTwo from "../atoms/HeadingTwo.vue";
import UserListItem from "./UserListItem.vue";
import ImageOne from "../../assets/images/person.jpg";
export default {
  components: { HeadingTwo, UserListItem },

  data() {
    return {
      imgOne: ImageOne,
    };
  },
};
</script>
<template>
  <div class="queued-users">
    <HeadingTwo content="Queued" class="py-4 px-3" />
    <UserListItem
      class="px-3"
      name="Emily Johnson"
      content="Hello Emily How are you"
      recepient="You: "
      time="8m: 20s"
      badgeNumber="2"
      :image="imgOne"
      badgeDisplay=""
    />
    <UserListItem
      class="px-3"
      name="Sophie Okonedo"
      designation="UX Designer | GreenScape Solut..."
      waitTime="Wait Time"
      time="10m : 25s"
      badgeDisplay="none"
      :image="imgOne"
    />
  </div>
</template>
<style>
</style>