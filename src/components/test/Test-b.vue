<template>
	<div>
		<h1>this is b child compontent!!!</h1>
		<h3>{{msg}}</h3>
		<button class="btn btn-default" @click="promiseTest">promiseTest</button>

		<div class="ur">
			<ul>
				<li v-for="item in data"><img v-bind:src="item.url" /> {{item.name}} age is {{item.age}}</li>
			</ul>
		</div>
	</div>
	
</template>
<script type="text/javascript">
	let Mock = require('mockjs');
	export default {
		data () {
			return {
				msg:"testb",
				data:{}
			}
		},
		mounted () {
			let self = this;
			this.axios.get('testb.json').then((res) => {
				// console.log(res.data.data);
				self.data = res.data.data;
			}).catch((error) => {console.log(error);})
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
					console.log("promiseall"+results);
				}).catch((reason) => {
					console.log(reason);
				});
			}
		}
	}
	Mock.mock('testb.json',{
		'data|1-3':[
			{
				"name|1-3":'yan',
				"age|1-60":27,
				"url":'@IMG(100x100,#50B347,#fff,YAN)'
			}
		]
	});
</script>