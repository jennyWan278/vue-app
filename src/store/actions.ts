import { ActionTree } from "vuex";
import { RootState } from "./types";

export const actions: ActionTree<RootState, RootState> = {
  saveLoginInfo({ commit }, { token }) {
    localStorage.token = token;
    commit("updateState", { token });
  },
};
