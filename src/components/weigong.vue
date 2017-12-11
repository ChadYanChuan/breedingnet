<template>
	<div class="row">
		<div class="row bold">{{weismall}}</div>
		<div class="row">
			<img src="/static/img/weismall-code.jpg" alt="" />
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				weismall:"此公众号(绿源出品)一直在筹划之中，欢迎关注！！！"
			}
		}
	}
</script>
<style>
	.bold{
		font-size: 20px;
		font-weight: bold;
		padding: 20px 0;
	}
</style>