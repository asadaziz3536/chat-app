

<script>
export default {
  props: {
    bg: {
      type: String,
      default: "",
    },
    padding: {
      type: String,
      default: "",
    },
    svg: {
      type: String,
      default: "",
    },
    outline: {
      type: String,
      default: "",
    },
    border: {
      type: String,
      default: "",
    },
    listGroup: {
      type: Boolean,
      default: false,
    },
    dropdownMenu: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<template>
  <div class="dropdown custom-dropdown" :style="{ background: bg }">
    <a
      class="btn dropdown-toggle"
      href="#"
      role="button"
      id="dropdownMenuLink"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      :style="{
        padding: padding,
        outline: outline,
        border: border,
      }"
    >
      <div v-html="svg"></div>
    </a>

    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <div v-if="dropdownMenu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </div>

      <div class="list-group" v-if="listGroup">
        <a
          href="#"
          class="list-group-item list-group-item-action flex-column align-items-start active"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
          <small>Donec id elit non mi porta.</small>
        </a>
        <a
          href="#"
          class="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small class="text-muted">3 days ago</small>
          </div>
          <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
          <small class="text-muted">Donec id elit non mi porta.</small>
        </a>
        <a
          href="#"
          class="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small class="text-muted">3 days ago</small>
          </div>
          <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
          <small class="text-muted">Donec id elit non mi porta.</small>
        </a>
      </div>
    </ul>
  </div>
</template>
<style scoped>
.custom-dropdown .dropdown-toggle::after {
  display: none;
}
</style>