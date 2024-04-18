import { createStore } from "vuex";

const store = createStore({
  state: {
    searchQuery: "",
    userData: null,
  },
  mutations: {
    setSearchQuery(state, query) {
      console.log("Setting search query:", query);
      state.searchQuery = query;
    },
    setUserData(state, userData) {
      console.log("user data setting in store", userData);
      state.userData = userData;
    },
  },

  actions: {
    updateSearchQuery({ commit }, query) {
      commit("setSearchQuery", query);
    },
    updateUserData({ commit }, userData) {
      commit("setUserData", userData);
    },
  },
  getters: {
    searchQuery: (state) => state.searchQuery,
  },
});

export default store;
