let actions = {
    promiseAction({ commit }) {
        //异步调用 可以引入async/await对action进行组合
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit("promiseAction");
            }, 3000);
            resolve();
        })
    },
    increment({ commit }) {
        commit("increment");
    },
    rideten ({commit}) {
        commit("rideten");
    }
}

export default actions;