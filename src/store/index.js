import Vue from 'vue';
import Vuex from 'vuex';
import { action, mutations } from './actions';
// import { moduleA } from './module';

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
    mutations: mutations,
    actions: action
        // modules: {
        //     mda: moduleA
        // }
});