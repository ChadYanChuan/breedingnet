<template>
  <div class="count-div">
      <button v-on:click="reduce">count--</button>
      {{count}}
      <button v-on:click="addCount">count++</button>
      <button v-on:click="actionAdd">action-dispatch</button>
  </div>
</template>
<script>

    export default {
        data () {
            return {
                counter:0
            }
        },
        computed:{
           count () {
               return this.$store.state.count;
           }
        },
        methods:{
            addCount:function(){
                this.$store.commit('increment',100);
                // this.$store.commit("mutats",100);
            },
            reduce:function(){
                this.$store.commit('unincrement');
            },
            actionAdd:function(){
                // this.$store.dispatch("increment");
                this.$store.dispatch("promiseAction").then(() => {
                    console.log("after promise 异步执行");
                });
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


