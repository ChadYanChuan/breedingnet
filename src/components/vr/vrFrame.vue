<template>
	<div class="vr-content">
		<headerVue vr="1"/>
		<div class="frameDiv">
			<iframe id="iframe" width="100%" height="100%" :src="href"></iframe>
			<div class="framePos" onclick="window.history.go(-1);">返回</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import headerVue from '../Header.vue';
	export default {
		mounted () {
			console.log(this.$route.params);
			this.href = this.$route.params.hf;
		},
		data () {
			return {
				msg:"III",
				href:""
			}
		},
		components:{headerVue}
	}
</script>
<style type="text/css">
	.vr-content{width: 100%;height: 100%;}
	.frameDiv{
		width: 100%;
		height: -o-calc(100% - 56px);
		height: -moz-calc(100% - 56px);
        height: -webkit-calc(100% - 56px);
        height: calc(100% - 56px);
        position: relative;
	}
	.framePos{
		width: 200px;
	    height: 60px;
	    position: absolute;
	    left: 15%;
	    top: 0;
	    color: #fff;
	    line-height: 60px;
	    font-size: 30px;
	    cursor: pointer;
	}
</style>