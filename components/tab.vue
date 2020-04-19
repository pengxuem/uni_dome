<template>
	<view>
		<text>你好!{{massage}}</text>
		<button type="primary" @click="prents">点击</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: ['massage'],
		methods: {
			prents(){
				let dat = {
					pr: '你爹我',
					er: '儿砸'
				}
				this.$emit("prent",dat)
			}
			
		}
	}
</script>

<style>

</style>
