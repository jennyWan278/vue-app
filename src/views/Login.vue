<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="js">
import Vue from "vue";
// import HelloWorld from "../components/HelloWorld.vue";

export default Vue.extend({
  name: "Login",

  components: {
  },
  methods: {
  },
  mounted() {
    console.log('params id', this.$route.params.id)
  },
});
</script>
<style lang="scss">
.contnet {
  width: 375px;
  background-color: #f99;
  .content-detail {
    width: 375px;
    height: 20px;
    background-color: #ff9;
  }
}
</style>
