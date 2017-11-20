<template>
  <div class="count-div">
      <button v-on:click="reduce">count--</button>
      {{count}}
      <button v-on:click="addCount">count++</button>
      <button v-on:click="actionAdd">action-dispatch</button>
      <button v-on:click="gettersTodo">gettersTodo</button>
      <div class="row">
      </div>
  </div>
</template>
<script>
    // import {mapActions} from 'vuex';
    export default {
        data () {
            return {
                
            }
        },
        computed:{
           count () {
               return this.$store.state.count;
           }
        },
        methods:{
            // ...mapActions([
            //     "incrementAdd"
            // ]),
            addCount:function(){
                this.$store.commit('increment',100);
                // this.$store.commit("mutats",100);
            },
            reduce:function(){
                this.$store.commit('unincrement');
            },
            actionAdd:function(){
                this.$store.dispatch("increment");
                this.$store.dispatch("promiseAction").then(() => {
                    console.log("after promise 异步执行");
                });
            },
            gettersTodo:function(){
                
                var x = this.$store.getters.doneTodos;
                var obj = this.$store.getters.getTodoById(2);
                console.log("getterstodos"+x+"getbyId"+JSON.stringify(obj));
            },
            mdcountAdd:function(){
                console.log(this);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .count-div{
        padding:10px 0;
        button{margin:0 5px;}
    }
</style>


