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
		<div class="col-sm-9">
			<pre>
				this is code code!!!!!!
				<h1>title</h1>
				<h6>66666</h6>
			</pre>
		</div>
		<div>-------------------------------------------------------------</div>
		<counter></counter>
		<div>-------------------------------------------------------------</div>
		<br/>
		<div class="row">
			<teststore></teststore>
		</div>
		<br/>
		<div>-------------------------------------------------------------</div>
		<br>
		<testmodule></testmodule>
		<div>------------------------------------</div>
		<div>
			中央事件栈
			<firstchild />
			<secondchild />
		</div>
		<h1 v-on:click="testClick(msg)">{{msg}}</h1>
		<div class="row">
			<div class="col-sm-4"><router-link :to='{name:"testa",params:test}'>Testa</router-link></div>
			<div class="col-sm-4"><router-link to="/test/testb">Testb</router-link></div>
		</div>
        <router-view></router-view>
	</div>
</template>

<script>
	import firstchild from './test/firstchild.vue';
	import secondchild from './test/secondchild.vue';
	import counter from './common/counter.vue';
	import teststore from './common/TestStore.vue';
	import testmodule from './common/TestModule.vue';
	export default {
		name:"test",
		data () {
			return {
				msg:"this is a test page",
				test:{
					id:1111,
					name:"yan",
					rmb:55888
				},
				content:"this is a  markdown html"
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
		},
		components:{firstchild,secondchild,counter,teststore,testmodule}

	}
</script>

<style type="text/css">
	.testDiv{min-height: 60px;font-size: 20px;}
	pre {
	    padding: 16px;
	    overflow: auto;
	    font-size: 85%;
	    line-height: 1.45;
	    background-color: #f7f7f7;
	    border-radius: 3px;
	}
</style>