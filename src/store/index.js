import Vue from "vue";
import Vuex from "vuex";
import Api from "./../plugins/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collections: [],
    loading: false,
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_COLLECTIONS(state, payload) {
      state.collections = payload;
    },
    SET_BLOCK_VALUE(state, payload) {
      let { value, id } = payload;
      if (value <= 99) {
        state.collections &&
          state.collections.blocks.map((block) => {
            if (block.id === id) {
              block.value = 100;
            }
          });
      }
    },
  },
  actions: {
    async getCollections({ commit }) {
      commit("SET_LOADING", true);
      try {
        const response = await Api.get("fixtures/mock.json");
        commit("SET_COLLECTIONS", response.data);
        commit("SET_LOADING", false);
      } catch (error) {
        console.log(error);
        commit("SET_LOADING", false);
      }
    },
  },
  getters: {
    getAllCollections: (state) => state.collections,
  },
  modules: {},
});
