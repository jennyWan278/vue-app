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

<script lang="ts">
import Header from "@/Layout/Header/index.vue";
import Menu from "@/Layout/Menu/index.vue";
import { Vue, Component, Watch } from "vue-property-decorator";
import { State, Getter, Action, Mutation } from "vuex-class";
import { UserState } from "@/store/modules/types/userStoreType";
// import { token } from "../store/getters";
// const user = namespace("user");
const namespace = "user";
@Component({
  components: {
    Menu,
    Header,
  },
  filters: {},
})
export default class Login extends Vue {
  @State("token") public token: any;
  @State("user") public userStore: any;
  @Action("saveLoginInfo") public saveLoginInfo: any;
  @Mutation("updateState") public updateState: any;
  public footer: any = {
    inset: false,
  };
  mounted() {
    const params = {
      token: "djie",
    };
    this.saveLoginInfo(params);
    console.log("token", this.token);
  }
}
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
