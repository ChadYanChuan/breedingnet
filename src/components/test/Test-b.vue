<template>
	<div>
		<h1>this is b child compontent!!!</h1>
		<h3>{{msg}}</h3>
		<button class="btn btn-default" @click="promiseTest">promiseTest</button>
	</div>
	
</template>
<script type="text/javascript">
	
	export default {
		data () {
			return {
				msg:"testb"
			}
		},
		methods:{
			promiseTest:function (){
				var num = Math.ceil(Math.random()*10),
					istrue = false,
					self = this;
				num < 5 ? istrue = true : istrue = false;
				let promise = this.promiseFn(istrue);
				promise.then((value) => {

					console.log(value+",,,"+789);
				},(error) => {
					console.log(error+",,,"+852);
				}).catch((reason) => {
					console.log("reson catch"+reason);
				})

				//-------------
				this.promiseAll();

			},
			promiseFn:function(istrue){
				var promise = new Promise((resolve,reject) => {
					
					if(istrue){
						resolve("good for you !");
					}else{
						reject("fail to you !");
					}
				});
				return promise;
			},
			promiseAll:function(){
				const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
				  return setTimeout(() => {
				  	console.log(id);
				  },1000);
				});
				Promise.all(promises).then((results) => {
					console.log(results);
				}).catch((reason) => {
					console.log(reason);
				});
			}
		}
	}
</script>