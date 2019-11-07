<template>
  <style-wrapper :theme="theme">
    <view class="container">
      <app-loading
        v-if="!isAppReady"
        :startAsync="startLoading"
        :onFinish="finishLoading"
      />
      <app v-if="isAppReady" :theme="theme"></app>
    </view>
  </style-wrapper>
</template>

<script>
import Vue from "vue-native-core";
import * as env from "../../env.js";
import store from "../store/store";
import StyleWrapper from "../boot/styleProvider";

import { VueNativeBase } from "native-base";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import App from "../App.vue";

// registering all native-base components to the global scope of the Vue
Vue.use(VueNativeBase);

Vue.prototype.$store = store;
Vue.prototype.$env = env;

export default {
  components: { App, AppLoading, StyleWrapper },
  props: {
    theme: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isAppReady: false
    };
  },
  methods: {
    startLoading() {
      console.log("App started loading");
      this.loadFonts();
    },
    finishLoading() {
      console.log("App finished loading");
    },
    async loadFonts() {
      console.log("Loading fonts");
      try {
        this.isAppReady = false;
        await Font.loadAsync({
          Roboto: require("../../node_modules/native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("../../node_modules/native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("../../node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf")
        });
        this.isAppReady = true;
      } catch (error) {
        console.log("Error occured loading fonts ", error);
        this.isAppReady = true;
      }
    }
  }
};
</script>

<style>
.container {
  flex: 1;
}
</style>
