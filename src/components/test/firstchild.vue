<template>
    <div>
        <input type="text" v-model="firstMsg" />
        <button v-on:click="sendMsg(firstMsg)">向b组件传值</button>
    </div>
</template>
<script>
    import {bus} from "../common/eventBus.js";
    export default {
        data () {
            return {
                firstMsg:"默认值"
            }
        },
        methods:{
            sendMsg:function(msg){
                let obj = {
                    name:"yan",
                    age:27,
                    sex:"boy"
                }
				bus.$emit("userdefaultEvent",obj);
			}
        }
    }
</script>