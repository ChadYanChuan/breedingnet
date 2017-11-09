<template>
	<div class="htmlF bg_bg3">
		<headerVue ht="1" />

		<div class="htmlF-list">
			<h2 class="title">{{msg}}</h2>
			<ul>
				<li v-for="(val,index) in htmlList.list">
					<label>{{index + 1}}. {{val.name}}</label>
					<a v-bind:href="val.url">{{val.url}}</a>
				</li>
				
			</ul>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	import headerVue from './Header.vue';

	export default {
		
		data () {
			return {
				msg:'h5常用学习链接',
				htmlList:{
					number:[1,32,4],
					list:""
				}
			}
		},
		mounted () {
			var self = this;
			this.axios.get('/static/h5.json')
			  .then(function (res) {
			    self.htmlList.list = res.data.htmlList;
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		},
		components:{headerVue}
	}
</script>