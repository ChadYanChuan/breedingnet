export let action = {
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

export let mutations = {
    increment(state, n) {
        if (n) {
            state.count += n;
        } else {
            state.count++;
        }
    },
    unincrement(state) {
        state.count--;
    },
    promiseAction(state) {
        state.count += 2;
    },
    mutats(state, n) {
        console.log(n);
        state.num++;
    }
}


// export default action