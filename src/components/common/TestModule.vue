<template>
	<div class="row">
		<h1>{{msg}}</h1>
		<h2>moduleA mdcount is {{mdcount}}</h2>
		<h2>moduleB mdtwo is {{mdtwo}}</h2>
		<div class="row">
			<div class="col-sm-6"><button @click="increment">mdcount+3 * 2</button></div>
			<div class="col-sm-6"><button @click="modulebadd">mdtwo * 2</button></div>
			
		</div>
		<h2>testfan</h2>
		
	</div>
</template>
<script>
	export default {
		data () {
			return {
				msg:"this is TestModule.vue!"
			}
		},
		computed:{
           mdcount () {
           		return this.$store.state.a.mdcount;
           },
           mdtwo() {
           		return this.$store.state.b.mdtwo;
           }
           
        },
		mounted () {

		},
		methods:{
			increment:function(){
				this.$store.commit("moduleaadd");
			},
			modulebadd:function(){
				this.$store.commit("modulebadd");
			},
			
		}
	}
</script>
