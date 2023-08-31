<template>
	<view class="container">
		<view class="picShow">
			<image src="../../static/images/chinese-food.png" mode="widthFix"></image>
		</view>
		<scroll-view class="resShow" scroll-y="">
			<view class="text">图中可能包含的高热量食物</view>
			<view class="foodList" v-for="item in 3">
				<Food></Food>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad() {
			
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		height: 100vh;
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
		.resShow{
			width: 100%;
			height: 60%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background: #efefef;
			z-index: 10;
			// visibility: hidden;
			.text{
				// position: fixed;
				text-align: center;
				width: 100%;
				font-size: 40rpx;
				padding: 25rpx;
				background: #efefef;
			}
			.foodList{
				width: 100%;
				background: #efefef;
				border-bottom: 2px dashed #d3d3d3;
				
			}
		}
	}
	
	
</style>
