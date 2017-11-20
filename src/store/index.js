import Vue from 'vue';
import Vuex from 'vuex';
import action from './actions';
import { moduleA } from './module';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        num: 0,
        todos: [
            { id: 1, text: "yan", done: true },
            { id: 2, text: "chuan", done: false }
        ]
    },
    getters: {
        doneTodos(state) {
            return state.todos.length;
        },
        getTodoById: (state, getters) => (id) => {
            return state.todos.find(todo => todo.id === id);
        }
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
    actions: action
        // modules: {
        //     mda: moduleA
        // }
});