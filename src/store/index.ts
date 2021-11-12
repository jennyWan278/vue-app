import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import modules from "./modules";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
Vue.use(Vuex);

console.log("actions", actions);
const store: StoreOptions<RootState> = {
  state: {
    version: "xzl",
    token: "",
  },
  actions,
  getters,
  mutations,
  modules,
};
export default new Vuex.Store<RootState>(store);
