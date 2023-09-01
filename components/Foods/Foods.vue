<template>
	<scroll-view class="resShow" scroll-y="">
		<view class="text" v-if="foodData.length">图中可能包含的高热量食物</view>
		<view class="foodList" v-for="item in foodData" :key="Object.values(item)[0]">
			<Food :kind="Object.keys(item)[0]" :calorie="Object.values(item)[0]"></Food>
		</view>
		
		<button class="text" v-if="!foodData.length && !isSearching" @click="selectPic">
			选择图片
		</button>
		<button class="text" v-if="!foodData.length && !isSearching" @click="getData"">
			CanCanNeed
		</button>
		<view class="text" v-if="isSearching && !foodData.length">
			加载中......
		</view>
	</scroll-view>
</template>

<script>
	export default {
		name:"Foods",
		data(){
			return{
				isSearching:false
			}
		},
		props:{
			foodData:{
				type:Array,
				required:true
			},
			
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
</style>