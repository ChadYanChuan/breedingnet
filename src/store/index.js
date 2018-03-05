import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './Mutations';
import actions from './Actions';

import { moduleA,moduleB } from './Module';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 11,
        num: 0,
        todos: [
            { id: 1, text: "yan", done: true },
            { id: 2, text: "chuan", done: false }
        ],
        testfn:"where are you from?"
    },
    getters: {
        doneTodos(state) {
            return state.todos.length;
        },
        getTodoById: (state, getters) => (id) => {
            return state.todos.find(todo => todo.id === id);
        }
    },
    mutations: mutations,
    actions: actions,
    modules: {
        a: moduleA,
        b:moduleB
    }
});
