<template>

	<div class="sky">
		<div class="clouds_one"></div>
		<div class="clouds_two"></div>
		<div class="clouds_three"></div>
		<div class="sky_body">{{msg}}</div>
	</div>

</template>

<script>
	import './css/style.css';

	export default {
		data () {
			return {
				skyName:'天空',
				msg: '勇往直前，学无止境!!!'
			}
		}
	}
</script>