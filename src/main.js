import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRouter, createWebHistory } from "vue-router";
// Main routes for navigations
import routes from "./routes.js";

// Emoji Picker
import EmojiPicker from "vue3-emoji-picker";
// Emoji Picker css
import "vue3-emoji-picker/css";

// Import vuex store
import store from "./store";

const app = createApp(App);

let router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(store);
app.use(router);
app.mount("#app");
