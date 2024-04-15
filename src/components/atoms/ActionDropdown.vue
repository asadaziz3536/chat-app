

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
      }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.0001 7C13.1041 7 14.0001 6.104 14.0001 5C14.0001 3.896 13.1041 3 12.0001 3C10.8961 3 10.0001 3.896 10.0001 5C10.0001 6.104 10.8961 7 12.0001 7ZM12.0001 10C10.8961 10 10.0001 10.896 10.0001 12C10.0001 13.104 10.8961 14 12.0001 14C13.1041 14 14.0001 13.104 14.0001 12C14.0001 10.896 13.1041 10 12.0001 10ZM10.0001 19C10.0001 17.896 10.8961 17 12.0001 17C13.1041 17 14.0001 17.896 14.0001 19C14.0001 20.104 13.1041 21 12.0001 21C10.8961 21 10.0001 20.104 10.0001 19Z"
          fill="#5F6269"
        />
      </svg>
    </a>

    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
</template>
<style scoped>
.custom-dropdown .dropdown-toggle::after {
  display: none;
}
</style>