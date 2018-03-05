export const moduleA = {
    state: {
        mdcount: 1
    },
    mutations: {
        increment: function(state) {
            console.log(11111);
            state.mdcount++;
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
        increment:function(state){
            state.mdcount = state.mdcount * 2;
        }
    }
}