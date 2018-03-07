let mutations = {
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
        state.num++;
    },
    rideten(state,n) {
        state.num = state.num * state.num;
    },
    clearride(state) {
        state.num = 0;
    },
    getUser(state,status) {
        console.log(status);
        state.testfan = status;
    }

}

export default mutations;