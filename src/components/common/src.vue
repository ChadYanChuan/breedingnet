<script type="text/javascript">
	export default {
		props:["loadsrc","loadpano"],
		render: function(createElement,context){
			var self = this;
			var promise;
			if(self._props.loadsrc){
				var newDiv;
				promise = new Promise(function(resolve,reject){
					console.log("99999");
				});
				promise.then(function(){
					console.log("opopopop");
				});

				return createElement("div",[
					
					createElement("script",{
								"attrs":{
									src:self._props.loadsrc
								}
							})

					]);
			}

			// if(self._props.loadpano){
			// 	var newDiv;
			// 	p().then(function(){
			// 		newDiv = createElement("div",[
					
			// 		createElement("script",{
			// 			"domProps":{
			// 				innerHTML:self._props.loadpano
			// 			}
			// 		})

			// 	]);

			// 	});
			// 	return newDiv;
			// }
		}

	}

</script>