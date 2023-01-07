<template>
  <div>
    <!-- {{ hello }} -->
    <Header />
    <Top />
  </div>
</template>

<script lang="ts">
import 'normalize.css';
import { createApp, ref } from "vue";
import Top from "./components/top";
import Header from "./components/header";
export default {
  // setup() {
  //     const hello = ref(
  //         "Hello From TypeScript"
  //     )

  //     return {
  //         hello
  //     }
  // },
  components: {
    Top,
    Header,
  }
};
</script>

<style></style>