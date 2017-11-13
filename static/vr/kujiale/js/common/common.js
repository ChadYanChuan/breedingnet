define(["jquery"], function($) {
	return {

		ajaxPost: function(url, data, fn, fail) {
			$.ajax({
				url: url,
				type: "POST",
				dataType: 'json',
				data: data
			}).done(function(data) {
				if(data.code == "10000") {
					fn && fn(data);
				} else {
					fail && fail(data);
				}

			}).fail(function(data) {
				console.log("error");
			})
		},
		ajaxGet: function(url, data, fn, fail) {
			var obj = "";
			$.ajax({
				url: url,
				type: "GET",
				dataType: 'json',
				data: data
			}).done(function(data) {
				if(data.code == "10000") {
					fn && fn(data);
				} else {
					fail && fail(data);
				}
				obj = data;
			}).fail(function(data) {
				console.log("error");
			})

			return obj;
		},
		ajaxBackObj: function(url, dataObj) {
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
				$(".search-null").show();
			})
			return Data;
		},
		test: function(name){
			console.log(name);
		},
		fullscreen:function(){

			var docElm = document.documentElement;
			if (docElm.requestFullscreen) {
				docElm.requestFullscreen();
			}
			else if (docElm.msRequestFullscreen) {
				docElm = document.body;
				docElm.msRequestFullscreen();
			}
			else if (docElm.mozRequestFullScreen) {
				docElm.mozRequestFullScreen();
			}
			else if (docElm.webkitRequestFullScreen) {
				docElm.webkitRequestFullScreen();
			}
		},
		exitfullscreen:function(){
			
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}
			else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
			else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			}
			else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}
		},
		addqrcode:function(id){
			var toUtf8 = function(str) {   
			    var out, i, len, c;   
			    out = "";   
			    len = str.length;   
			    for(i = 0; i < len; i++) {   
			    	c = str.charCodeAt(i);   
			    	if ((c >= 0x0001) && (c <= 0x007F)) {   
			        	out += str.charAt(i);   
			    	} else if (c > 0x07FF) {   
			        	out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));   
			        	out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));   
			        	out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));   
			    	} else {   
			        	out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));   
			        	out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));   
			    	}   
			    }   
			    return out;   
			}
			
			$("#"+id).qrcode({
				render: "canvas",
				width: 180,
				height:180,
				text: toUtf8(window.location.href)
			});
			
		},
		stopPropagation:function(e) {
			if (e.stopPropagation) 
			e.stopPropagation(); 
			else 
			e.cancelBubble = true; 
		}

	}

});