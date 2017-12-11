<template>
	<div class="main">
		<h1>{{title}}</h1>
		<ul class="list">
			<li><a href="#/ad">广告模板</a></li>
			<li><a href="#/loading">loading animations</a></li>
			<li><a href="#/borders">Border</a></li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	let Mock =  require('mockjs');
	export default {
		data () {
			return {
				title:"列表"
			}
		}
	}
</script>
<style lang="scss" type="text/css" scoped>
	.list{
		li{padding: 5px 0;}
	}
</style>