<template>
	<div>
		<h1>{{title}}</h1>
		<div class="row tree"><img src="/static/img/tree03.jpg" /></div>

		<div class="row tree"><img src="/static/img/tree02.jpg" /></div>
		<div class="col-sm-12">
			<a href="/static/twotree.js" download="twotree.js">请下载源码查看</a>
		</div>
	</div>
</template>

<script type="text/javascript">

	export default {
		data () {
			return {
				title:"二叉树"
			}
		},
		components:{

		}
	}
</script>
<style lang="scss" scoped>
	.tree{
		padding: 10px 0;
		img{max-width: 100%;height: auto;}
	}
</style>