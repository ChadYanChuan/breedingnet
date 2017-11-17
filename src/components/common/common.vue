<script type="text/javascript">
	
	export default{
		props:["childmsg"],
		render:function(createElement,context){
			var self = this;
			return createElement(
					'div',
					[	
						createElement("ul",self.lists.map(function(value,index){
							return createElement("li",{
								"domProps":{
									innerHTML:value.name+",,,index is "+index
								},
								"attrs":{
									id:"li"+index
								},
								"class":{
									foo:self.blur,
									bar:!self.blur
								},
								"style":{
									color:"#999999",
									fontSize:"20px",
									fontWeight:"bold",
									textAlign:"center",
									padding:"5px 0"
								},
								"on":{
									click:function(event){
										console.log(event.currentTarget.className+",,,,own event!!!"+event.currentTarget.innerText);
									}
								},
								"nativeOn":{
									click:function(event){
										console.log("原生事件");
									}
								},
								"slot": 'ul-of-slot',
								"key": 'myKey',
  								"ref": 'myRef'
							});
						})),
						createElement("input",{
							"attrs":{
								placeholder:self.value
							},
							"on":{
								input:function(event){
									self.value = event.target.value;
									//子向父 
									self.$emit("listenChild",self.value);
								}
							}
						}),
						createElement("p","我是子组件，我的值改变了，我传给父组件的值为"+self.value),
						createElement("p","父组件传来的值为"+self._props.childmsg)
					]
                    
				);
		},
		data(){
			return {
				lists:[{
					"name":"yan"
				},{
					"name":"chuan"
				}],
				value:"子父组件间传值",
				blur:false
			}
		}
	}

	// export {cmm}
</script>