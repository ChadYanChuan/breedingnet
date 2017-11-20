export default {
    promiseAction({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit("promiseAction");
            }, 3000);
            resolve();
        })
    },
    increment({ commit }) {
        commit("increment");
    }
}