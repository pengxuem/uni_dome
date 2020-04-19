<template>
	<txt :massage="mag" @prent="prents"></txt>
</template>


<script>
	import txt from '../../components/tab.vue'
	
	export default {
		data (){
			return {
				mag: "弟弟..."
			}
		},
		components: {
			txt
		},
		methods:{
			prents(data){
				console.log(data)
				this.mag = `${data.er}--${data.pr}`
			}
		}
	}
	
</script>

<style lang="less">
</style>
