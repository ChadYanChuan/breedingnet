<template>
	<div class="row">
		<h1>{{msg}}</h1>
		<h2>{{num}}</h2>
		<h3>{{testfn}}</h3>
		<div class="row">
			<div class="col-sm-4"><button v-on:click="addOne">addOne</button></div>
			<div class="col-sm-4"><button v-on:click="cengten">平方</button></div>
			<div class="col-sm-4"><button v-on:click="clear">clear</button></div>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				msg:"this is TestStore.vue"
			}
		},
		computed:{
           num () {
               return this.$store.state.num;
           },
           testfn () {
           		return this.$store.state.testfn;
           }
        },
		methods:{
			addOne:function(){
				this.$store.commit("mutats");
			},
			cengten:function(){
				// this.$store.commit("rideten");
				this.$store.dispatch("rideten");
			},
			clear:function(){
				this.$store.commit("clearride");
			}
		}
	}
</script>
<style type="text/css">
	
</style>