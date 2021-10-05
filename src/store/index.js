import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    windowSize: null,
  },
  mutations: {
    updateSize(state, posts) {
      state.windowSize = posts
  },
  },
  actions: {
    setCurrentSize({commit}, windowSize) {
      if (windowSize.innerWidth >= 1200) {
          commit('updateSize', 'desktop')
      } else if (windowSize.innerWidth <= 1200 && windowSize.innerWidth >= 768) {
          commit('updateSize', 'tablet')
      } else {
          commit('updateSize', 'mobile')
      }
  },
  },
  getters: {
    getSize(state) {
      return state.windowSize
    }
  },
  modules: {},
});
