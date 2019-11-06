<template>
  <root>
    <style-wrapper>
      <app-navigation></app-navigation>
    </style-wrapper>
  </root>
</template>

<script>
import { Root } from "native-base";
import StyleWrapper from "./boot/styleProvider";
import AppNavigation from "./routes";

export default {
  components: { Root, AppNavigation, StyleWrapper }
};
</script>
