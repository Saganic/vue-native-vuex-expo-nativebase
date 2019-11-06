<template>
  <root>
    <app-navigation :darkMode="theme"></app-navigation>
  </root>
</template>

<script>
import { Root } from "native-base";
import AppNavigation from "./routes";

export default {
  components: { Root, AppNavigation },
  props: {
    theme: {
      type: Boolean,
      required: true
    }
  }
};
</script>
