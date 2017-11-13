<template>
	<div class="pano-body">
		<div class="pano-mobile">
			<iframe v-bind:src="Obj.src"></iframe>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				Obj:{}
			}
		},
		created:function(){
			var self = this;
			console.log(this.$route.params);
			self.Obj = this.$route.params;
		}

	}

</script>
<style>
	.pano-body{
		width: 100%;
		height: 90%;
	}
	.pano-mobile{
		width: 412px;height: 712px;margin: 0 auto;
	}
</style>