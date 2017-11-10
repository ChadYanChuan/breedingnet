<template>
	<div id="test" class="testDiv">
		<a href="#/" class="back">返回</a>
		<div class="row">
			<div class="col-sm-6">modelA</div>
			<div class="col-sm-6">modelB</div>
		</div>
		<div class="col-xs-3">
		  <a href="#" class="btn btn-block btn-lg btn-default">Default</a>
		</div>
		<h1 v-on:click="testClick(msg)">{{msg}}</h1>
		<router-link :to='{name:"testa",params:test}'>Testa</router-link>
        <router-link to="/test/testb">Testb</router-link>
        <router-view></router-view>
	</div>
</template>

<script>
	
	export default {
		name:"test",
		data () {
			return {
				msg:"this is a test page",
				test:{
					id:1111,
					name:"yan",
					rmb:55888
				}
			}
		},
		beforeCreate () {
			console.log("beforeCreate");
		},
		created () {
			console.log("created");
		},
		beforeMount () {
			console.log("beforeMount");
		},
		mounted () {
			console.log("mounted");
		},
		beforeUpdate () {
			console.log("update");
		},
		updated () {
			console.log("updated");
		},
		activated () {
			console.log("activated");
		},
		deactivated () {
			console.log("deactivated");
		},
		beforedestroy () {
			console.log("beforedestroy");
		},
		destory () {
			console.log("destory");
		},
		methods: {
			/**
			 * [testClick description]
			 * @param  {[type]} m [传参]
			 * @return {[type]}   [description]
			 */
			testClick: function (m) {
				console.log(m);
			},
			testAdd: function(){

			}
		}

	}
</script>

<style type="text/css">
	.testDiv{min-height: 60px;font-size: 20px;}
</style>