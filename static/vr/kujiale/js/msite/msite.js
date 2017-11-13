function roomHideBtn(){
		$(".shop-list").removeClass("show");
		$(".fang-jie").removeClass("show");
		$(".mobile").removeClass("showing-room");
		$(".mobile").removeClass("fullscreen");
		$(".menu-bar .menu-btn-guide").removeClass("active");
	}
function ajaxBackObj(url, dataObj) {
		var Data = "";
		$.ajax({
			url: url,
			type: "GET",
			dataType: 'json',
			async: false,
			data: dataObj
		}).done(function(data) {
			Data = data;
		}).fail(function() {
			console.log('error');
		})
		return Data;
	}
function goodStart(dataId){
		var startIndex = 0;
		$(".shop-list .swiper-wrapper .swiper-slide").each(function(index,value){
		    if($(this).attr("data-id") == dataId){
		    	startIndex = index;
		    	return false;
		    }		    
		});
		return startIndex;
	}
window.goodsObj = {};
goodsObj.goodsArr = [];
var swiper;
function goodsScroll(dataId){
	
	$("#swiper-container").empty();
	$(".shop-details-scroll").show();
	var listLen = $(".shop-list .swiper-wrapper .swiper-slide").length;
	//列表当前图片显示索引
	var startIndex = goodStart(dataId);
	var prevIndex = startIndex - 1;
	var nextIndex = startIndex + 1;
	
	if(nextIndex == listLen){
		nextIndex = 0;
	}
	if(prevIndex == -1){
		prevIndex = listLen - 1;
	}
	var PrevKey = $(".shop-list .swiper-wrapper .swiper-slide").eq(prevIndex).attr("data-id");
	var NextKey = $(".shop-list .swiper-wrapper .swiper-slide").eq(nextIndex).attr("data-id");
	
	goodsObj.goodsArr.length = listLen;
	function isfirst(index,no){
		var obj = {};
		if(goodsObj.goodsArr[index] == undefined){
			var url = 'js/details.json';//'http://yun.jiandanhome.com/deco/item/detail/?t=1506667175139&no='+no;
			obj = ajaxBackObj(url,{});
			obj.add = true;
		}else{
			obj.add = false;
		}
		return obj;
	}
	function getdata(dex,fn){
		//数据请求完成后 进行
		$.when(isfirst(startIndex,dataId), isfirst(prevIndex,PrevKey),isfirst(nextIndex,NextKey)).done(function(obja,  objb, objc){
			if(obja.add){
				goodsObj.goodsArr[startIndex] = obja;
			}
			if(objb.add){
				goodsObj.goodsArr[prevIndex] = objb;
			}
			if(objc.add){
				goodsObj.goodsArr[nextIndex] = objc;
			}
		
			var scrollTemplate = "";
			for(var i = 0;i < goodsObj.goodsArr.length;i++){
				var html = "";
				if(goodsObj.goodsArr[i] == undefined){
					html = '<div class="swiper-slide loading" added="0" ></div>';
				}else{
					html = '<div class="swiper-slide" added="'+goodsObj.goodsArr[i].data.record.no+'">'+template('swiper-slide-tem',goodsObj.goodsArr[i]) +'</div>';
				}
				scrollTemplate += html;
			}
			var wraper = '<div class="swiper-wrapper" id="swiper-wrapper">'+scrollTemplate+'</div>';
			$("#swiper-container").html(wraper);
		}).then(function(){
			fn&&fn();
		});
		
	}
	function sliderTemplate(index){
		if(goodsObj.goodsArr[index] == undefined){
			var no = $(".shop-list .swiper-wrapper .swiper-slide").eq(index).attr("data-id");
			var obj = isfirst(index,no);
    		if(obj.add){
    			
    			goodsObj.goodsArr[index] = obj;
    			//非循环时
				$(".shop-details-scroll .swiper-slide").eq(index).empty();
				var afterTemplate = template('swiper-slide-tem',goodsObj.goodsArr[index]);
				$(".shop-details-scroll .swiper-slide").eq(index).attr("added",goodsObj.goodsArr[index].data.record.no);
				$(".shop-details-scroll .swiper-slide").eq(index).removeClass("loading");
				$(".shop-details-scroll .swiper-slide").eq(index).html(afterTemplate);
    		}
		}
		
	}
	function sliderAfter(swiper,isAdd){
		var index = swiper.realIndex;
		var nindex = 0;
		var added = $(".shop-details-scroll .swiper-slide").eq(index).attr("added");
		if(isAdd){
        	nindex = index + 1;
        	if(nindex == listLen){
        		nindex = 0;
        	}
		}else{
    		nindex = index - 1;
			if(nindex == -1){
        		nindex = listLen - 1;
        	}
		}
    	if(added == 0){
    		if(goodsObj.goodsArr[index] == undefined){
    			sliderTemplate(index);
    		}else{
    			$(".shop-details-scroll .swiper-slide").eq(index).empty();
				var afterTemplate = template('swiper-slide-tem',goodsObj.goodsArr[index]);
				$(".shop-details-scroll .swiper-slide").eq(index).attr("added",goodsObj.goodsArr[index].data.record.no);
				$(".shop-details-scroll .swiper-slide").eq(index).removeClass("loading");
				$(".shop-details-scroll .swiper-slide").eq(index).html(afterTemplate);
    		}
			
		}
		sliderTemplate(nindex);
	}
	getdata(0,function(){
		//轮播
		swiper = new Swiper('.shop-details-scroll .swiper-container', {
	        initialSlide :startIndex,
	        spaceBetween: 0,
	        loop:false,
	        observer:true,
	        observeParents:true,
	        onInit:function(swiper){
	        	
	        },
	        onSlidePrevEnd:function(swiper){
	        	sliderAfter(swiper,false);
	        },
	        onSlideNextEnd:function(swiper){
	        	sliderAfter(swiper,true);
	        }
	    });
		
	})
	        	
}
$(".swiper-button-next").click(function(){
	swiper.slideNext();
});
$(".swiper-button-prev").click(function(){
	swiper.slidePrev();
});
//关闭
$(".close-btn").click(function(e){
	startIndex = 0;
	$(".shop-details-scroll").hide();
});
function goodsListEvents(){
	var swiperShop = new Swiper('.shop-list .swiper-container', {
        pagination: '',
        slidesPerView: "auto",
        observer:true,
		observeParents:true,
        spaceBetween: 20
    });
    
	//商品小列表
	$(".shop-list .swiper-wrapper .swiper-slide").click(function(){
		var dataId = $(this).attr("data-id")
		goodsScroll(dataId);
	});
}
function goodsList(render_no,scenceInfo){
	goodsObj.goodsArr = new Array();
	
	$(".current-room .room-name").html(scenceInfo);
	$("#swiperGoodsList").empty();
	var url = 'js/shoplist.json';//'http://yun.jiandanhome.com/deco/item/pano/list/?render_no='+render_no;
	var obj = ajaxBackObj(url,{});
	if(obj.data.records.length > 0){
		var goodsTemplate = template('goods-list',obj.data);
		$("#swiperGoodsList").html(goodsTemplate);
	}else{
		$(".btn-list .menu-btn-prod").hide();
	}
	
	goodsListEvents();
}
function autoFullscreen(){
	var st = setTimeout(function(){
		$(".mobile").addClass("fullscreen");
		clearTimeout(st);
	},5000);
}
function fullscreen(){
    	$(".mobile").addClass("fullscreen");
    }
function exitfullscreen(){
	$(".mobile").removeClass("fullscreen");
//	autoFullscreen();
}

$(function(){
    function stopPropagation(e) {
		if (e.stopPropagation) 
		e.stopPropagation(); 
		else 
		e.cancelBubble = true; 
	}
    
    
    var swiperTab = new Swiper('.swip .swiper-container',{
    	onSlideChangeEnd: function(swiper){
    		$(".tab .tab-li").eq(swiper.activeIndex).addClass("active").siblings().removeClass("active");
	    }
    });
    
    
    $(".tab .tab-li").click(function(e){
    	var index = $(this).index();
    	if($(this).hasClass("active")){
    		
    	}else{
    		$(this).addClass("active").siblings().removeClass("active");
    		swiperTab.slideTo(index, 300, false);
    	}
    	
    });
    
	$(".side-menu .menu-btn-vr").click(function(){
		var krpano = document.getElementById("krpanoSWFObject");
		krpano.call("webvr.enterVR();");
		$(".mobile").addClass("showing-room");
	})
	
	$(".side-menu .menu-btn-music").click(function(){
		var krpano = document.getElementById("krpanoSWFObject");
		if($(this).hasClass("active")){
				$(this).removeClass("active");
				krpano.call("music_stop();");
			}else{
				$(this).addClass("active");
				krpano.call("music_play();");
				
			}
	})
	
	$(".menu-btn-profile-with-setting").click(function(){
		$(".fang-jie").addClass("show");
	});
	//户型导览
	$(".menu-bar .menu-btn-guide").click(function(){
		var krpano = document.getElementById("krpanoSWFObject");
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			krpano.call("hide_map();");
		}else{
			$(this).addClass("active");
			$(".mobile").addClass("showing-room");
			krpano.call("show_map();");
		}
	});
	//房间
	$(".btn-list .menu-btn-rooms").click(function(){
		var krpano = document.getElementById("krpanoSWFObject");
		krpano.call("show_win();");
		$(".mobile").addClass("showing-room");
//		fullscreen();
	});
	//商品
	$(".btn-list .menu-btn-prod").click(function(e){
		stopPropagation(e);
		$(".shop-list").addClass("show");
		$(".mobile").addClass("showing-room");
//		fullscreen();
	});
	
	//陀螺仪
	$(".gyro-setting .switch-wp .switch").click(function(){
		var krpano = document.getElementById("krpanoSWFObject");
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			krpano.call("switch_gyro();");
		}else{
			$(this).addClass("on");
			krpano.call("switch_gyro();");
		}
	});
	//商品热点
	$(".commodity-hotspot-setting .switch-wp .switch").click(function(){
		var krpano = document.getElementById("krpanoSWFObject");
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			krpano.call("hide_hot_goods();");
		}else{
			$(this).addClass("on");
			krpano.call("show_hot_goods();");
		}
	});
	//文本热点
	$(".text-hotspot-setting .switch-wp .switch").click(function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
		}else{
			$(this).addClass("on");
		}
	});
	
	//退出全屏
	$(".exit-fullscreen").click(function(){
		exitfullscreen();
	})
	//5秒后自动全屏
	autoFullscreen();

//	$(document).bind('click',function(e){
//		stopPropagation(e);
//		$(".shop-list").removeClass("show");
//	});
		
});
