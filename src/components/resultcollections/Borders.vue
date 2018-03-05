<template>
	<div class="main">
		<h1>{{title}}</h1>

		<div class="box box-border"></div>
		<div class="box0 box-border"></div>
		
		<div class="trianle-up"></div>
		<div class="trianle-down"></div>
		<div class="trianle-left"></div>
		<div class="trianle-right"></div>

		<div class="triangle-top-left"></div>
		<div class="triangle-top-right"></div>

		<div class="box box-dotted"></div>
		
		<!-- <div class="box-double"></div> -->
		
		<!-- <div class="box-groove"></div> -->
		
		<div class="box-img-right"><p class="bg-gray">背景距离右边50像素</p></div>

	</div>	
</template>

<script>
	export default {
		data () {
			return {
				title:"Border Study!!!"
			}
		}
	}
</script>
<style type="text/css" scoped>
	.mian{width: 1200px;margin: 30px auto;}
	.bg-gray{background-color: gray;}
	.box{width: 50px;height:50px;}
	.box0{width: 0;height: 0;}
	.box-border{border: 50px solid transparent;border-color: red green gray gold;}
	.trianle-up{
		width:0;height:0;
		border-left: 25px solid transparent;
		border-right: 25px solid transparent;
		border-bottom:50px solid red;
		/*border-color: transparent transparent red transparent;*/
	}
	.trianle-down{
		width:0;height:0;
		border-left: 25px solid transparent;
		border-right: 25px solid transparent;
		border-top:50px solid green;
		/*border-color: transparent transparent red transparent;*/
	}
	.trianle-left{
		width:0;height:0;
		border-bottom: 25px solid transparent;
		border-right: 50px solid yellowgreen;
		border-top:25px solid transparent;
	}
	.trianle-right{
		width:0;height:0;
		border-left: 50px solid greenyellow;
		border-bottom: 25px solid transparent;
		border-top:25px solid transparent;
	}
	.triangle-top-right{
		width:0;height:0;
		border-left: 50px solid greenyellow;
		border-top:25px solid transparent;
	}
	.triangle-top-left{
		width:0;height:0;
		border-right: 50px solid greenyellow;
		border-top:25px solid transparent;
	}
	.box-dotted{
		 border: 10px dotted green;
	}
	.box-double{
		height: 20px;
		border: 60px double;
		border-color: red green #005EFC gray;
	}
	.box-groove{
		margin-top: 20px;
		height: 20px;
		border: 20px groove;
		border-color: red green #005EFC gray;
	}
	.box-img-right{
		width: 200px;
		height: 100px;
		/*background-image: url(img/headImg.png);*/
		background-size: 100px;
		background-position: 100% center;
		background-repeat: no-repeat;
		border-right: 50px solid transparent;
	}
</style>