<template>
  <nb-container>
    <header-component :navigation="this.props.navigation" title="About" />
    <nb-content>
      <text>Test</text>
    </nb-content>
  </nb-container>
</template>

<script>
import HeaderComponent from "../components/Header";

export default {
  name: "AboutView",
  components: {
    HeaderComponent
  }
};
</script>

<style></style>
