<!-- 识别的图片 -->
<template>
	<view class="picShow">
		<image :src="img" mode="aspectFit" ></image>
		<!-- <image :src="'data:image/png;base64,' + imgData" mode="aspectFit"></image> -->
	</view>
</template>

<script>
	export default {
		name:"Photo",
		props:{
			// 用户上传的图片暂存地址
			// 用户上传的图片字节形式
			img: { 
				type: String,
				required:true
				
			}
		},
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