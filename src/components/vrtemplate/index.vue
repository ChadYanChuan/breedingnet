<template>
	<div class="main-frame">
		<div class="pano-btn">
			<button type="button" class="btn btn-primary">
				<router-link :to='{name:"index"}'>去首页</router-link>
			</button>
			<button type="button" class="btn btn-primary">
				<router-link :to='{name:"vjia",params:{src:"/static/vr/vjia.html"}}'>3vjia全景模板</router-link>
			</button>
			<button type="button" class="btn btn-primary">
				<router-link :to='{name:"kujiale",params:{src:"/static/vr/kujiale.html"}}'>酷家乐全景模板</router-link>
			</button>
		</div>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">

	export default {
		data () {
			return {
				Obj:{
					src:"/static/vr/vjia.html"
				}
				
			}
		}
	}

</script>
<style>
	iframe{
		border:0;
		width: 100%;
		height: 100%;
	}
	.main-frame{
		width: 100%;
		height: 100%;
	}
	.pano-btn{
		line-height: 55px;
		height: 9%;
		text-align: center;
	}
	button a,button a:visited{color: #ffffff;}
</style>