export const moduleA = {
    state: {
        mdcount: 1
    },
    mutations: {
        moduleaadd: function(state) {
            state.mdcount = (state.mdcount + 3) * 2;
        }
    },
    getters: {

    },
    actions: {
        incrementAdd: function({ commit }) {
            commit("increment");
        }
    }
}

export const moduleB = {
    state:{
        mdtwo:2
    },
    mutations:{
        modulebadd:function(state){
            state.mdtwo = state.mdtwo * 2;
        }
    }
}