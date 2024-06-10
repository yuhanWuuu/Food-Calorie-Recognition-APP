<!-- 每条食物 -->
<template>
	<view class="foodItem">
		<!-- 图标 -->
		<view class="pic">
			<image :src="imgPath" mode="aspectFill"></image>
		</view>
		
		<view class="container">
		    <view class="box text">{{kind}}</view>
		    <view class="box text">估计热量</view>
		    <view class="box">{{calorie}}kcal/100g</view>
			<view class="box" v-if="heat!=NaN">{{heat}}kcal</view>
		    <view class="box" v-if="heat==NaN">未识别到拇指</view>
		</view>
		
		
		<!-- 名称 -->
		<!-- <view class="text">{{kind}}</view> -->
		<!-- <view class="estimate">估计热量</view> -->
		<!-- 卡路里 -->
		<!-- <view class="calorie">{{calorie}}kcal/100g</view> -->
		<!-- <view class="heat">-66kcal</view> -->
	</view>
</template>

<script>
	export default {
		name:"Food",
		props:['kind','calorie','heat'],
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
		align-items: center;
		.pic{
			// border: 2px solid black;
			width: 130rpx;
			height: 110rpx;
			padding: 10rpx;
			margin-left: 30rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		
		.container {
		      display: flex;
		      justify-content: space-between;
		      flex-wrap: wrap;
		    }
		
		.box {
		  padding: 5px;
		  width: 48%; /* 设置元素宽度，可以调整以适应你的需要 */
		  box-sizing: border-box; /* 防止边框加宽撑破容器 */
		  text-align: center;
		}
		.text{
			font-size: 35rpx;
		}
		
		
		// .text{
		// 	flex: 1;
		// 	width: 150rpx;
		// 	// border: 2px solid black;
		// 	font-size: 36rpx;
		// 	margin-left: 80rpx;
		// 	margin-right: 80rpx;
		// }
		// .calorie{
		// 	// border: 2px solid black;
		// 	font-size: 34rpx;
		// 	margin-right: 30rpx;
		// }
	}
</style>