import { Module, ActionTree, MutationTree, GetterTree } from "vuex";
import { RootState } from "../types";
import { UserState } from "./types/userStoreType"; //定义state里面值的类型

const state: UserState = {
  userName: localStorage.userName || "",
  token: localStorage.token || "",
  userId: localStorage.userId || "",
};

const getters: GetterTree<UserState, RootState> = {
  isLogin: (state): boolean => !!state.token,
};

const mutations: MutationTree<UserState> = {
  updateState(state: UserState, newState) {
    Object.assign(state, newState);
  },
};
const actions: ActionTree<UserState, RootState> = {
  updateState({ commit }, params) {
    commit("updateState", params);
  },
  saveLoginInfo({ commit }, { userName, token, userId }) {
    localStorage.userName = userName;
    localStorage.token = token;
    localStorage.userId = userId;
    commit("updateState", { userName, token, userId });
  },
  removeLoginInfo({ commit }) {
    localStorage.removeItem("token");
    commit("updateState", {
      token: "",
    });
  },
};

const namespaced = true;
const user: Module<UserState, RootState> = {
  namespaced,
  state,
  mutations,
  getters,
  actions,
};
export default user;
export type User = typeof user;
