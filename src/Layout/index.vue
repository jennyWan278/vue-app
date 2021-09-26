<template>
  <div class="layout">
    <Menu></Menu>
    <Header></Header>
    <v-card class="layout-content">
      modulename {{ $t("test") }}
      <router-view />
    </v-card>
  </div>
</template>

<script>
import Header from "@/Layout/Header/index.vue";
import Menu from "@/Layout/Menu/index.vue";

export default {
  data: () => ({
    footer: {
      inset: false,
    },
  }),
  mounted() {
    console.log("$i18n.locale", this.$i18n.locale);
  },
  computed: {},
  watch: {},
  components: {
    Menu,
    Header,
  },
  methods: {},
};
</script>
<style scoped>
.layout {
  display: flex;
  min-width: 1200px;
  width: 100%;
  height: 100%;
  flex-direction: row;
}
.layout-content {
  width: 100%;
  height: calc(100% - 64px);
  margin-top: 64px;
  background-color: #fafcff;
  box-sizing: border-box;
  padding: 20px;
}
.layout-content-header {
  position: relative;
  height: 54px;
  box-shadow: 0 2px 4px 0 rgba(93, 93, 93, 0.2);
  z-index: 1;
}
.header-fixed {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  width: calc(100% - 260px);
  height: 54px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(93, 93, 93, 0.2);
  transition: width 0.3s;
}
.header-fixed-drawer {
  width: calc(100% - 70px);
}
.layout-content-container {
  min-height: calc(100% - 54px);
  background-color: #eee;
}
.center-card {
  width: 100%;
  height: 100%;
  padding: 20px;
  /* background-color: #fafcff; */
  background-color: #f99;
}
.locale-changer,
.select {
  height: 60px;
  width: 80px;
}
</style>
