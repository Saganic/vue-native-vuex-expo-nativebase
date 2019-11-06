import { Updates } from "expo";

const getDefaultState = () => {
  return {
    app: {
      settings: {
        darkMode: false
      }
    }
  };
};

const state = getDefaultState();
const namespaced = true;

const getters = {
  app: state => {
    return state.app;
  },
  darkMode: state => {
    return state.app.settings.darkMode;
  }
};
const mutations = {
  setDarkMode(state, val) {
    state.app.settings.darkMode = val;
  },
  resetState(state) {
    Object.assign(state, getDefaultState());
  }
};
const actions = {
  setDarkMode(context, val) {
    return new Promise(resolve => {
      context.commit("setDarkMode", val);
      Updates.reload();
      resolve(val);
    });
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
