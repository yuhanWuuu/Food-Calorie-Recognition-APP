<!-- 识别结果 -->
<template>
	<scroll-view class="resShow" scroll-y="">
		<!-- 固定标题 -->
		<view class="text info" v-if="foodData.length">识别到以下食物...</view>
		<!-- 占位符，固定标题以后的margin -->
		<view class="placeholder" v-if="foodData.length"></view>
		<!-- 图中所含的食物 -->
		<view class="foodList" v-for="item in foodData" :key="Object.values(item)[0]">
			<Food :kind="Object.keys(item)[0]" :calorie="Object.values(item)[0][0]" :heat="Object.values(item)[0][1]"></Food>
		</view>
		
		<!-- 一些提示信息 -->
		<button class="text" v-if="!foodData.length && !isSearching" @click="selectPic">
			选择图片
		</button>
		<button class="text" v-if="!foodData.length && !isSearching" @click="getData">
			CanCanNeed
		</button>
		<view class="text" v-if="isSearching && !foodData.length && !isNone">
			加载中......
		</view>
		<view class="text" v-if="isNone">
			啥也妹有！
		</view>
	</scroll-view>
</template>

<script>
	export default {
		name:"Foods",
		data(){
			return{
				isSearching: false,
			} 
		},
		props:{
			foodData:{
				type: Array,
				required: true
			},
			isNone:{
				type: Boolean,
				required: true,
				default: false
			}
			
		},
		methods:{
			selectPic(){
					this.$parent.takePhoto()
			},
			getData(){
				this.isSearching = true
				this.$parent.getData()
			}
		},
		onShow() {
			this.isSearching = false
		}
		
	}
</script>

<style lang="scss">
	.resShow{
		width: 100%;
		height: 60%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #efefef;
		z-index: 10;
		.text{
			text-align: center;
			width: 100%;
			font-size: 40rpx;
			padding: 25rpx;
			background: #efefef;
			&.info{
				position: fixed;
				// visibility: hidden;
			}
		}
		.placeholder{
			height: 100rpx;
			// border: 2px solid red;
		}
		.foodList{
			width: 100%;
			background: #efefef;
			border-bottom: 2px dashed #d3d3d3;
			
		}
	}
</style>