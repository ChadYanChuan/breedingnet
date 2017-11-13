require.config({
  baseUrl:"",
  paths:{
    jquery:"/static/vr/common/lib/jquery-2.2.1.min",
    swiper:"/static/vr/common/lib/swiper.jquery.min",
    qrcode:"/static/vr/common/lib/jquery.qrcode.min",
    comm:"js/common/common",
    fn:"js/common/fn"
  },
  shim:{
   	qrcode:{
   		deps:["jquery"],
   		exports:"qd"
   	},
   	swiper:{
   		deps:["jquery"],
   		exports:"swiper"
   	},
  	comm:{
  		deps:["qrcode"],
        exports:"cm"
  	},
  	fn:{
   		deps:["swiper"],
   		exports: 'fn'
   }
  	
  }
});

require(["jquery","swiper","qrcode","comm","fn"],function($,swiper,qrcode,cm,fn){
	
	cm.test("this is a test function!");
	//生成二维码
	cm.addqrcode("qrcode");

	//房间选择
	$(".menu-btn-list .menu-btn-rooms").click(function(){
			if($(this).hasClass("active")){
				roomHide();
			}else{
				roomsShow();
				goodsHide();
			}
	});
	//音乐
	$(".menu-btn-list .menu-btn-music").click(function(){
		var krpano = document.getElementById("krpanoSWFObject");
		if($(this).hasClass("active")){
				$(this).removeClass("active");
				krpano.call("music_stop();");
			}else{
				$(this).addClass("active");
				krpano.call("music_play();");
				
			}
	});
	//户型导览
	$(".menu-btn-list .menu-btn-guide").click(function(){
		var krpano = document.getElementById("krpanoSWFObject");
		if($(this).hasClass("active")){
				$(this).removeClass("active");
				krpano.call("hide_map();");
			}else{
				$(this).addClass("active");
				krpano.call("show_map();");
				goodsHide();
			}
	});
	//扫二维码
	$(".menu-btn-list .menu-btn-qrcode").click(function(){
		if($(this).hasClass("active")){
				$(this).removeClass("active");
			}else{
				$(this).addClass("active");
				goodsHide();
			}
	});
	//空间介绍
	$(".menu-btn-list .menu-btn-profile").click(function(){
		if($(this).hasClass("active")){
				$(this).removeClass("active");
				$(".profile-modal").hide();
			}else{
				$(this).addClass("active");
				$(".profile-modal").show();
				roomHide();
			}
	});
	
	$(".profile-modal").click(function(e){
		cm.stopPropagation(e);
		$(".profile-modal").hide();
		$(".menu-btn-list .menu-btn-profile").removeClass("active");
	});
	//商品标签
	$(".menu-btn-list .menu-btn-prod").click(function(e){
		cm.stopPropagation(e);
		if($(this).hasClass("active")){
				goodsHide();
			}else{
				roomHide();
				goodsShow();
			}
			
	});
	
	//全屏切换
	$(".menu-btn-toggle").click(function(){
		if($(".pc").hasClass("simple-menu")){
			$(".pc").removeClass("simple-menu");
			cm.exitfullscreen();
		}else{
			$(".pc").addClass("simple-menu");
				cm.fullscreen();
		}
	})
	
	//全屏状态
	var fullscreenState = document.getElementById("fullscreen-state");
	if (fullscreenState) {
		document.addEventListener("fullscreenchange", function () {
			(document.fullscreenElement) ? $(".pc").addClass("simple-menu") : $(".pc").removeClass("simple-menu");
		}, false);

		document.addEventListener("msfullscreenchange", function () {
			(document.msFullscreenElement) ? $(".pc").addClass("simple-menu") : $(".pc").removeClass("simple-menu");
			
		}, false);

		document.addEventListener("mozfullscreenchange", function () {
			(document.mozFullScreen) ? $(".pc").addClass("simple-menu") : $(".pc").removeClass("simple-menu");
		}, false);

		document.addEventListener("webkitfullscreenchange", function () {
			(document.webkitIsFullScreen) ? $(".pc").addClass("simple-menu") : $(".pc").removeClass("simple-menu");
		}, false);
	}
	
});