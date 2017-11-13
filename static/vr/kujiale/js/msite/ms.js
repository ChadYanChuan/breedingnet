require.config({
  baseUrl:"",
  paths:{
    jquery:"/static/vr/common/lib/jquery-2.2.1.min",
    swiper:"/static/vr/common/lib/swiper.jquery.min",
    msite:"js/msite/msite"
  },
  shim:{
	swiper:{
		deps:["jquery"],
		exports: 'swiper'
	},
  	msite:{
   		deps:["swiper"],
   		exports: 'msite'
   }
  	
  }
});

require(["jquery","swiper","msite"],function($,swiper,msite){
	
});