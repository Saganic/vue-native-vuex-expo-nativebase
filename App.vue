<template>
  <setup :theme="$store.getters['app/darkMode']"></setup>
</template>

<script>
import Setup from "./src/boot/setup.vue";

export default {
  components: { Setup }
};
</script>
