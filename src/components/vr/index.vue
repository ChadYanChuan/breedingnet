<template>
	<div class="vr-content">
		<headerVue vr="1"/>
		<vrList />
		<footerVue />
	</div>
</template>

<script type="text/javascript">
	import headerVue from '../Header.vue';
	import vrList from './vrList.vue';
	import footerVue from '../Footer.vue';
	export default {
		data () {
			return {
				msgs:"III"
			}
		},
		methods:{
			hideShop:function(){
				// $("#iframe")[0].contentWindow.find(".menu-btn-list").css("display","none");
				var ifb = $(document.getElementById('iframe').contentWindow.document.body).find('.menu-btn-list');
				console.log(ifb);
			}
		},
		components:{headerVue,vrList,footerVue}
	}

</script>
