<script>
// Props section, defining the properties accepted by the component
export default {
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    updateSearch() {
      this.$store.dispatch("updateSearchQuery", this.searchInput);
    },
  },
};
</script>

<template>
  <div class="icon-input-wrapper">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      class="search-icon"
    >
      <path
        d="M13.4478 12.3961L10.9301 9.88581C11.7424 8.85092 12.1831 7.57296 12.1815 6.25735C12.1815 5.08569 11.8341 3.94034 11.1831 2.96614C10.5322 1.99194 9.60698 1.23264 8.52451 0.78427C7.44204 0.335895 6.25091 0.21858 5.10177 0.447159C3.95262 0.675739 2.89706 1.23995 2.06857 2.06844C1.24008 2.89692 0.675876 3.95248 0.447297 5.10163C0.218717 6.25078 0.336032 7.4419 0.784407 8.52437C1.23278 9.60684 1.99208 10.532 2.96628 11.183C3.94048 11.8339 5.08582 12.1814 6.25748 12.1814C7.5731 12.183 8.85106 11.7422 9.88594 10.9299L12.3962 13.4476C12.4651 13.517 12.547 13.5721 12.6372 13.6097C12.7275 13.6473 12.8242 13.6667 12.922 13.6667C13.0198 13.6667 13.1165 13.6473 13.2068 13.6097C13.297 13.5721 13.3789 13.517 13.4478 13.4476C13.5172 13.3788 13.5723 13.2969 13.6098 13.2066C13.6474 13.1164 13.6668 13.0196 13.6668 12.9219C13.6668 12.8241 13.6474 12.7273 13.6098 12.6371C13.5723 12.5468 13.5172 12.4649 13.4478 12.3961ZM1.81447 6.25735C1.81447 5.3786 2.07505 4.51959 2.56325 3.78894C3.05146 3.05829 3.74536 2.48882 4.55722 2.15254C5.36907 1.81626 6.26241 1.72827 7.12427 1.89971C7.98613 2.07114 8.7778 2.4943 9.39917 3.11566C10.0205 3.73703 10.4437 4.5287 10.6151 5.39056C10.7866 6.25242 10.6986 7.14576 10.3623 7.95761C10.026 8.76947 9.45654 9.46337 8.72589 9.95158C7.99524 10.4398 7.13623 10.7004 6.25748 10.7004C5.07912 10.7004 3.94903 10.2323 3.1158 9.39903C2.28257 8.56581 1.81447 7.43571 1.81447 6.25735Z"
        fill="#B5B8BE"
      />
    </svg>
    <input
      class="custom-input form-control"
      type="text"
      name=""
      id=""
      placeholder="Search messages"
      v-model="searchInput"
      @input="updateSearch"
    />
  </div>
</template>
<style scoped>
.custom-input {
  border-radius: 8px;
  border: 1px solid #f0f2f6;
  background: #f0f2f6;
  padding-left: 30px;
}
.custom-input::placeholder {
  color: var(--clr-lighter-variant);
}
.icon-input-wrapper {
  position: relative;
}
.icon-input-wrapper svg {
  position: absolute;
  left: 6px;
  top: 6px;
  transform: translate(6px, 6px);
}
</style>