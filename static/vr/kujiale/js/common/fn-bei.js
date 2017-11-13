	
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
	function roomsShow(){
		var krpano = document.getElementById("krpanoSWFObject");
		$(".cm-list-wp").removeClass("show");
		$(".menu-btn-list .menu-btn-rooms").addClass("active");
		krpano.call("show_win()");
	}
	function roomHide(){
		var krpano = document.getElementById("krpanoSWFObject");
		$(".cm-list-wp").removeClass("show");
		$(".menu-btn-list .menu-btn-rooms").removeClass("active");
		$(".menu-btn-list .menu-btn-guide").removeClass("active");
		krpano.call("hide_win();hide_map();");
	}
	function goodsShow(){
		var krpano = document.getElementById("krpanoSWFObject");
		krpano.call("show_hot_goods();");
		$(".menu-btn-list .menu-btn-qrcode").removeClass("active");
		$(".cm-list-wp").addClass("show");
		$(".menu-btn-list .menu-btn-prod").addClass("active");
	}
	function goodsHide(){
		var krpano = document.getElementById("krpanoSWFObject");
		krpano.call("hide_hot_goods();");
		$(".cm-list-wp").removeClass("show");
		$(".menu-btn-list .menu-btn-prod").removeClass("active");
	}
	function roomHideBtn(){
		$(".menu-btn-list .menu-btn-rooms").removeClass("active");
	}
	function goodsScrollDestory(){
		$(".profile-modal").hide();
		$(".menu-btn-list .menu-btn-profile").removeClass("active");
		$(".scroll-wrap").hide();
	}
	function test(name){
		console.log(name);
	}
	function goodStart(dataId){
		var startIndex = 0;
		$(".cm-list .goods").each(function(index,value){
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
		
		var startIndex = 0;
		$("#swiper-container").empty();
		$(".scroll-wrap").show();
		var listLen = $(".cm-list .goods").length;
		//列表当前图片显示索引
		startIndex = this.goodStart(dataId);
		var prevIndex = startIndex - 1;
		var nextIndex = startIndex + 1;
		if(prevIndex == -1){
			prevIndex = listLen - 1;
		}
		if(nextIndex == listLen){
			nextIndex = 0;
		}
		var PrevKey = $(".cm-list .goods").eq(prevIndex).attr("data-id");
		var NextKey = $(".cm-list .goods").eq(nextIndex).attr("data-id");
		
		goodsObj.goodsArr.length = listLen;
		function isfirst(index,no){
			var obj = {};
			if(goodsObj.goodsArr[index] == undefined){
				var url = 'http://yun.jiandanhome.com/deco/item/detail/?t=1506667175139&no='+no;
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
				var no = $(".cm-list .goods").eq(index).attr("data-id");
				var obj = isfirst(index,no);
        		if(obj.add){
        			
        			goodsObj.goodsArr[index] = obj;
        			//非循环时
					$("#swiper-wrapper .swiper-slide").eq(index).empty();
					var afterTemplate = template('swiper-slide-tem',goodsObj.goodsArr[index]);
					$("#swiper-wrapper .swiper-slide").eq(index).attr("added",goodsObj.goodsArr[index].data.record.no);
					$("#swiper-wrapper .swiper-slide").eq(index).removeClass("loading");
					$("#swiper-wrapper .swiper-slide").eq(index).html(afterTemplate);
        		}
			}
		}
		function sliderAfter(swiper,isAdd){
			var index = swiper.realIndex;
			var nindex = 0;
			var added = $("#swiper-wrapper .swiper-slide").eq(index).attr("added");
			
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
					$("#swiper-wrapper .swiper-slide").eq(index).empty();
					var afterTemplate = template('swiper-slide-tem',goodsObj.goodsArr[index]);
					$("#swiper-wrapper .swiper-slide").eq(index).attr("added",goodsObj.goodsArr[index].data.record.no);
					$("#swiper-wrapper .swiper-slide").eq(index).removeClass("loading");
					$("#swiper-wrapper .swiper-slide").eq(index).html(afterTemplate);
				}
				
			}
			sliderTemplate(nindex);
//      		//循环时
////				$("#swiper-wrapper .swiper-slide").each(function(index,key){
////					if($(this).attr("data-swiper-slide-index") == nindex){
////						var afterTemplate = template('swiper-slide-tem',goodsObj.goodsArr[nindex]);
////						$(this).html(afterTemplate);
////						swiper.update();
////					}
////				});
//      		
//      	}
        	swiper.update();
		}
		getdata(0,function(){
			//轮播
			swiper = new Swiper('.modal-slider-wrap .swiper-container', {
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
	goodsScroll.prototype.goodStart = function(dataId){
		var startIndex = 0;
		$(".cm-list .goods").each(function(index,value){
		    if($(this).attr("data-id") == dataId){
		    	startIndex = index;
		    	return false;
		    }		    
		});
		return startIndex;
	}
	
	$(".swiper-button-next").click(function(){
		swiper.slideNext();
	});
	$(".swiper-button-prev").click(function(){
		swiper.slidePrev();
	});
	//关闭
	$(".modal-close").click(function(e){
		startIndex = 0;
		window.goodsScrollDestory();
	});
	function loadingHide(){
		var load = document.getElementById("loading");
		load.style.display = "none";
	}
	
	function goodsList(render_no,scenceInfo){
		
		goodsObj.goodsArr = new Array();
		$(".room span").html(scenceInfo);
		$("#goodsList").empty();
		var url = 'http://yun.jiandanhome.com/deco/item/pano/list/?render_no='+render_no;
		var obj = ajaxBackObj(url,{});
		if(obj.data.records.length > 0){
			var goodsTemplate = template('goods-list',obj.data);
			$("#goodsList").html(goodsTemplate);
		}else{
			$(".menu-btn-list .menu-btn-prod").hide();
		}
		//商品列表 点击
		$(".cm-list").on('click','dd',function(){
			var dataId = $(this).attr("data-id");
			goodsScroll(dataId);
		});
	}
	