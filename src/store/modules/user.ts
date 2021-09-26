import { Commit, GetterTree, Getter, ActionContext } from "vuex";

const state = {
  userName: localStorage.userName || "",
  token: localStorage.token || "",
  userId: localStorage.userId || "",
};
export type State = typeof state;

const getters = {
  isLogin: (state: State) => !!state.token,
};

const mutations = {
  updateState(state: State, newState: State) {
    Object.assign(state, newState);
  },
};
const actions = {
  updateState(context: { commit: Commit; state: State }, newState: State) {
    context.commit("updateState", newState);
  },
  saveLoginInfo(
    { commit }: { commit: Commit },
    { userName, token, userId }: State
  ) {
    localStorage.userName = userName;
    localStorage.token = token;
    localStorage.userId = userId;
    commit("updateState", { userName, token, userId });
  },
  removeLoginInfo({ commit }: { commit: Commit }) {
    localStorage.removeItem("token");
    commit("updateState", {
      token: "",
    });
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
