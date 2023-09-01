<template>
	<view class="foodItem">
		<view class="pic">
			<image :src="imgPath" mode="aspectFill"></image>
		</view>
		<view class="text">{{kind}}</view>
		<view class="calorie">{{calorie}}kcal/100g</view>
	</view>
</template>

<script>
	export default {
		name:"Food",
		props:['kind','calorie'],
		computed:{
			imgPath(){
				return `../../static/images/${this.kind}.png`
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	.foodItem{
		padding: 10rpx;
		display: flex;
		flex-direction: row;
		// justify-content: left;
		align-items: center;
		.pic{
			// border: 2px solid black;
			width: 100rpx;
			height: 100rpx;
			padding: 10rpx;
			margin-left: 30rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.text{
			flex: 1;
			width: 150rpx;
			// border: 2px solid black;
			font-size: 36rpx;
			margin-left: 80rpx;
			margin-right: 80rpx;
		}
		.calorie{
			// border: 2px solid black;
			font-size: 34rpx;
			margin-right: 30rpx;
		}
	}
</style>