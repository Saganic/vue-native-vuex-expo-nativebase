<template>
  <nb-container>
    <header-component
      :navigation="this.props.navigation"
      :title="$env.appName"
    />
    <nb-content>
      <nb-button :onPress="toggleDarkMode">
        <nb-text>Toggle Dark Mode</nb-text>
      </nb-button>
      <nb-text>{{ darkMode }}</nb-text>
    </nb-content>
  </nb-container>
</template>

<script>
import HeaderComponent from "../components/Header";

export default {
  name: "HomeView",
  components: {
    HeaderComponent
  },
  computed: {
    darkMode() {
      return this.$store.getters["app/darkMode"];
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.dispatch("app/setDarkMode", !this.darkMode);
    }
  }
};
</script>

<style></style>
