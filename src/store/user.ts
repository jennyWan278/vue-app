// export default {
//   namespaced: true,
//   state: {
//     userName: localStorage.userName || "",
//     token: localStorage.token || "",
//     userId: localStorage.userId || "",
//   },
//   mutations: {
//     updateState(state, newState) {
//       Object.assign(state, newState);
//     },
//   },
//   getters: {
//     isLogin(state) {
//       return !!state.token;
//     },
//   },
//   actions: {
//     updateState({ commit }, newState) {
//       commit("updateState", newState);
//     },
//     saveLoginInfo({ commit }, { userName, token, userId }) {
//       localStorage.userName = userName;
//       localStorage.token = token;
//       localStorage.userId = userId;
//       commit("updateState", { userName, token, userId });
//     },
//     removeLoginInfo({ commit }) {
//       localStorage.removeItem("token");
//       commit("updateState", {
//         token: "",
//       });
//     },
//   },
// };
