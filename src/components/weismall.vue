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
				weismall:"信用卡刷卡计算小程序，为你计算出今日刷最佳卡，尽最大化利用信用卡额度！！！"
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