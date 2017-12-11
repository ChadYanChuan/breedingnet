<template>
	<div class="main">
		<h1>{{title}}</h1>
		<iframe src="/static/html/loading.html" border="0" scrolling="auto"></iframe>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				title:"Loading animations"
			}
		}
	}
</script>
<style type="text/css">
	.main,iframe{width: 100%;height: 100%;}
</style>