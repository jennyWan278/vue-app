import { GetterTree } from "vuex";
import { RootState } from "./types";
export const getters: GetterTree<RootState, RootState> = {
  isLogin: (state): boolean => !!state.token,
};
