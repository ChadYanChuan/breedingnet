<template>
	<div>
		<h1>this is a child compontent!!!</h1>
		<h3>{{msg}}</h3>
		<div class="test-name">{{child}},,,,,{{name}}</div>
		<h3>id is {{ta.id}};name is {{ta.name}};rmb is {{ta.rmb}}</h3>
		<p>我是父组件,子组件传来的值为:{{childMsg}}</p>
		<input type="text" placeholder="parentMsg" v-model="parentMsg" name="">
		<hr/>
		<div>---------------------------------------------------------------</div>	
		<cmm v-bind:childmsg="parentMsg" v-on:listenChild="showChildMsg"></cmm>
	</div>
</template>

<script type="text/javascript">
	import cmm from "../common/common.vue";
	
	export default {
		props:["child"],
		data () {
			return {
				msg:"testa",
				name:"child Vue!!!",
				ta:{},
				parentMsg:"父子组件间传值",
				childMsg:""
			}
		},
		created:function(){
			var self = this;
			console.log(this.$route.params);
			self.ta = this.$route.params;
		},
		render:function(createElement,context){
			// var self = this;
			return createElement("div",this.msg);
		},
		methods:{
			showChildMsg:function(data){
				//接收 子
				this.childMsg = data;
			}
			

		},
		components:{cmm}
	}
</script>