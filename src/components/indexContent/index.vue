<template>

	<div class="site-content">
		<h2>{{msg}}</h2>
		<div class="taxonimy-bundles-category">
			<header class="archive-header">
				<h2 class="title">秘诀 &amp; 技巧 - 最新采集</h2>
				<p class="archive-p">每周更新的手工精选的最佳文章、教程、免费赠品、代码片段等等...</p>
			</header>

			<div class="bundle-block" v-for="tip in tipsList">
						
				<div class="bundle-block-content-body">									
				
				<a class="bundle-image" v-bind:href="tip.url" target="_blank">
				<img width="280" height="150" :src="'static/img/' +tip.imgUrl" class="attachment-thumbnail size-thumbnail wp-post-image" alt="">						</a>								
				
				<a v-bind:href="tip.url" :title="tip.explain" rel="bookmark"></a>
				
				<h2 class="bundle-block-title">
				
				<a v-bind:href="tip.url" target="_blank">{{tip.explain}}</a></h2>
											
				</div>
						
			</div>

		</div>
	</div>

</template>

<script>
	export default {
		mounted (){
			var self = this;
			this.axios.get('/static/tips.json')
			.then(function (res) {
			    self.tipsList = res.data.tips;
			})
			.catch(function (error) {
			    console.log(error);
			});
		},
		data () {
			return {
				msg:"lll",
				tipsList:""
			}
		}
	}
</script>