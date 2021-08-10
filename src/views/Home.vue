<template>
  <Layout></Layout>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "../components/HelloWorld.vue";
import Layout from "@/Layout/index.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Layout,
  },
});
</script>
