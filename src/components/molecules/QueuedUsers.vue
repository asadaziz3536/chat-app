<script>
import HeadingTwo from "../atoms/HeadingTwo.vue";
import UserListItem from "./UserListItem.vue";
import ImageOne from "../../assets/images/person.jpg";
import ProfileImg2 from "../../assets/images/profile-img-2.png";
export default {
  components: { HeadingTwo, UserListItem },

  data() {
    return {
      imgOne: ImageOne,
      imgTwo: ProfileImg2,
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
      :online="true"
      badgebg="#f36531"
    />
    <UserListItem
      class="px-3"
      name="Sophie Okonedo"
      designation="UX Designer | GreenScape Solut..."
      waitTime="Wait Time"
      time="10m : 25s"
      badgeDisplay="none"
      :image="imgTwo"
      :online="true"
    />
  </div>
</template>
<style>
</style>