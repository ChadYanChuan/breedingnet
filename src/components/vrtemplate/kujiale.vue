<template>
	<div class="pano-body">
		<iframe v-bind:src="Obj.src"></iframe>
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

</style>