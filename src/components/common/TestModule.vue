<template>
	<div class="row">
		<h1>{{msg}}</h1>
		<h2>moduleA mdcount is {{mdcount}}</h2>
		<h2>moduleB mdcount is {{mdtwo}}</h2>
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

		}
	}
</script>
