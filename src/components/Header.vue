<template>
  <nb-header>
    <nb-left>
      <nb-button transparent :onPress="() => navigation.openDrawer()">
        <nb-icon name="menu" />
      </nb-button>
    </nb-left>
    <nb-body>
      <nb-title>{{ title }}</nb-title>
    </nb-body>
    <nb-right />
  </nb-header>
</template>

<script>
export default {
  name: "Header",
  props: {
    navigation: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      default: "Header"
    }
  }
};
</script>

<style></style>
