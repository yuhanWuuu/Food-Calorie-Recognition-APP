<template>
	<view class="foodItem">
		<view class="pic">
			<image src="../../static/images/啤酒.png" mode="widthFix"></image>
		</view>
		<view class="text">啤酒</view>
		<view class="calorie">43.4kcal/100g</view>
	</view>
</template>

<script>
	export default {
		name:"Food",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.foodItem{
	padding: 10rpx;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	.pic{
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
		font-size: 36rpx;
		margin-left: 60rpx;
		margin-right: 120rpx;
	}
	.calorie{
		font-size: 34rpx;
		margin-right: 30rpx;
	}
}
</style>