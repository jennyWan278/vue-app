import Vue from "vue";
import Vuex from "vuex";
import user from "./user";

Vue.use(Vuex);

interface State {
  user: typeof user.state;
}

type GettersFunscs = typeof user.getters;
export default new Vuex.Store<State>({
  modules: {
    user,
  },
});
