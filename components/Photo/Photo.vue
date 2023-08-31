<template>
	<view class="picShow">
		<image :src="img" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		name:"Photo",
		props:{
			// 用户上传的图片暂存地址
			img:{
				type: String,
				required:true
				
			}
		},
		
		onLoad() {
			console.log('@@@', this.img);
		}
	}
</script>

<style lang="scss" scoped>
	.picShow{
		width: 100%;
		height: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
		// background: aqua;
		image{
			width: 100%;
			// height: 100%;
			opacity: 0.8;
		}
		
	}
</style>