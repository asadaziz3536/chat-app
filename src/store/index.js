import { createStore } from "vuex";

const store = createStore({
  state: {
    searchQuery: "",
    userData: null,
    isSidebarVisible: false,
  },
  mutations: {
    // Chat search Query
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    // Chat user data
    setUserData(state, userData) {
      state.userData = userData;
    },
    // Toggle Right Sidebar
    toggleSidebar(state) {
      state.isSidebarVisible = !state.isSidebarVisible;
    },
    CloseSidebar(state) {
      state.isSidebarVisible = false;
    },
  },

  actions: {
    // Update search query method
    updateSearchQuery({ commit }, query) {
      commit("setSearchQuery", query);
    },
    // Update user data method
    updateUserData({ commit }, userData) {
      commit("setUserData", userData);
    },
    // Update toggle SideBar
    updatetoggleSidebar({ commit }) {
      commit("toggleSidebar");
    },
    updateCloseSidebar({ commit }) {
      commit("CloseSidebar");
    },
  },
  getters: {
    searchQuery: (state) => state.searchQuery,
    isSidebarVisible: (state) => state.isSidebarVisible,
    userData: (state) => state.userData,
  },
});

export default store;
