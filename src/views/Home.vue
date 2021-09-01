<template>
  <!-- <Layout></Layout> -->
  <div class="contnet">
    <div class="content-detail">
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "../components/HelloWorld.vue";
import Layout from "@/Layout/index.vue";

export default Vue.extend({
  name: "Home",

  components: {
    // Layout,
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
