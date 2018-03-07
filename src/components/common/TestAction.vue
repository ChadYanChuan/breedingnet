<template>
	<div class="row">
		<h1>{{msg}}</h1>
		<div class="col-sm-6"><button @click="getUserList">通过action 获取异步数据 改变state</button></div>
		<ul>
			<li v-for="(key,$index) in testfan">{{key.name}}</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				msg:"this is a test Action!!!"
			}
		},
		computed:{
			testfan () {
           		return this.$store.state.testfan;
           }
		},
		methods:{
			getUserList:function(){
				this.$store.dispatch("getUser");
			}
		}
	}
</script>
<style type="text/css">
	
</style>