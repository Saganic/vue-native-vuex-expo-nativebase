import Vue from "vue-native-core";
import Vuex from "vuex";

import VuexPersistence from "vuex-persist";
import { AsyncStorage } from "react-native";

// import api from "../api/api";

//import modules
import app from "./modules/App";

const modules = {
  app
};
const mutations = {};

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  strictMode: true,
  storage: AsyncStorage,
  asyncStorage: true,
  reducer: state => ({
    app: state.app
  })
});

const vuexPersistEmitter = () => {
  return store => {
    store.subscribe(mutation => {
      if (mutation.type === "RESTORE_MUTATION") {
        console.log("--- RESTORING MUTATIONS ---");
        console.log(mutation.payload);
        store._vm.$root.$emit("storageReady");
        console.log("--- DONE ---");
      }
    });
  };
};

Object.assign(mutations, {
  RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION
});

export default new Vuex.Store({
  state: {},
  namespaced: true,
  mutations,
  modules,
  plugins: [vuexLocal.plugin, vuexPersistEmitter()]
});

export { vuexLocal };
