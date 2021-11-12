import { MutationTree } from "vuex";
import { RootState } from "./types";

export const mutations: MutationTree<RootState> = {
  updateState(state: RootState, newState) {
    Object.assign(state, newState);
  },
};
