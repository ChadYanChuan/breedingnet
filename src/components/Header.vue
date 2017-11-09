<template>
	<nav class="navbar navbar-default" role="navigation">
		<div class="container-fluid"> 
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
						data-target="#example-navbar-collapse">
					<span class="sr-only">切换导航</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">一只菜鸟</a>
			</div>
			<div class="collapse navbar-collapse" id="example-navbar-collapse">
				<ul class="nav navbar-nav">
					<li v-bind:class="{ active: index }"><a href="#">首页</a></li>
					<li v-bind:class="{ active: ht }"><a href="#/html5">HTML5</a></li>
					<li v-bind:class="{ active: css }"><a href="#">CSS3</a></li>
					<li v-bind:class="{ active: js }"><a href="#">JavaScript</a></li>
					<li v-bind:class="{ active: vr }"><a href="#/vr">VR</a></li>
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							Other <b class="caret"></b>
						</a>
						<ul class="dropdown-menu">
							<li><a href="#">Vue</a></li>
							<li><a href="#">React</a></li>
							<li><a href="#">mui</a></li>
							<li class="divider"></li>
							<li><a href="#">Angular1</a></li>
							<li class="divider"></li>
							<li><a href="#">Angular2~</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</nav>

</template>

<script type="text/javascript">
	export default {
		props:["index","ht","css","js","vr"],
		data () {
			return {
				
			}
		}
	}
</script>