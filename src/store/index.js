import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        num: 0
    },
    mutations: {
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
    },
    actions: {
        // increment({ commit }) {
        //     commit("increment");
        // },
        promiseAction({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit("promiseAction");
                }, 3000);
                resolve();
            })
        }
    }
});