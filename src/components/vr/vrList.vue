<template>
	<div class="vr-list">
		<div class="home-reosurce-repository">
			<header class="archive-header">
				<h2 class="title">全景案例</h2>
				<p>值得学习和收藏的全景案例</p>
			</header>
			<!-- .archive-header -->
			<div class="resources-category" v-for="li in list" >
				<router-link :to="{name: 'vrShow', params: {hf: li.href,name: li.name} }">
					<img :src="'/static/img/'+li.imgUrl">
				</router-link>
				
				<h3 class="title-series"><router-link :to="{name: 'vrShow', params: {hf: li.href,name: li.name} }">{{li.name}}</router-link></h3>
			</div>
			
		</div> <!-- end home-reosurce-repository -->
		
	</div>
</template>
<script type="text/javascript">
	import vrframe from './vrFrame.vue';
	import {url} from '../common/config.vue';
	export default {
		data () {
			return {
				msg:"III",
				list:"",
				childHref:""
			}
		},
		mounted () {
			var self = this;
			this.axios.get(url+'vrList.json')
			  .then(function (res) {
			    self.list = res.data.list;
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		},
		methods:{
			hideShop:function(){
				console.log("list");
			},
			togoFrame:function(href){
				console.info(href);
				// this.childHref = href;
			}
		},
		components:{vrframe}
	}

</script>
<style type="text/css">
	.vr-list{
		width: 100%;
    	overflow: hidden;
	}
</style>