<template>
  <div>
     第二个组件接收的值为:<br/> <font>{{aMsg}}</font>
     <hr/>
     {{obj.name}}
  </div>
</template>
<script>
import {bus} from "../common/eventBus.js";
export default {
    data () {
        return {
            aMsg:"null",
            obj:{}
        }
    },
    mounted () {
			var self = this;
			bus.$on("userdefaultEvent",function(msg){
				console.log(msg);
				self.obj = msg;
			});
		},
}
</script>
