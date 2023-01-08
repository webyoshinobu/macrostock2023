<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import 'normalize.css';
// import { createApp, ref } from "vue";
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  }
};
</script>

<style></style>
