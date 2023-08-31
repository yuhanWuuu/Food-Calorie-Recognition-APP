<template>
	<scroll-view class="resShow" scroll-y="">
		<view class="text" v-if="kind.length">图中可能包含的高热量食物</view>
		<view class="foodList" v-for="i in kind.length" :key="calorie[i]">
			<Food :kind="kind[i]" :calorie="calorie[i]"></Food>
		</view>
		
		<button class="text" v-if="!kind.length" @click="selectPic">
			选择图片
		</button>
		<button class="text" v-if="!kind.length" @click="getData">
			CanCanNeed
		</button>
	</scroll-view>
</template>

<script>
	export default {
		name:"Foods",
		props:{
			kind:{
				type:Array,
				required:true
			},
			calorie:{
				type:Array,
				required:true
			},
		},
		methods:{
			selectPic(){
					this.$parent.takePhoto()
			},
			getData(){
				this.$parent.getData()
			}
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