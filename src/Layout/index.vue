<template>
  <div class="layout">
    <Menu></Menu>
    <Header></Header>
    <v-main>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-card class="center-card"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer :inset="footer.true" app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
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
  height: 100%;
  flex-direction: row;
}
.layout-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 900px;
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
}
</style>
