<template>
	<view class="container">
		<!-- 识别的图片 -->
		<Photo :img="imgPath"></Photo>
		<!-- 识别结果 -->
		<Foods :foodData="foodData"></Foods>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 默认图片
				imgPath: "../../static/images/chinese-food.png",
				// api返回的数据
				foodData:[]
			}
		},
		methods: {
			/* 拍照 */
			takePhoto(){
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album','camera'],
					success: res => {
						this.imgPath = res.tempFilePaths[0]
						// console.log(this.imgPath);
					}
				});
			},
			/* 请求api获取数据 */
			getData(){
				uni.uploadFile({
					url: "http://192.168.1.102:5000/predict",
					name: 'image',
					filePath: this.imgPath,
					// formData: { },//传参，数据+随机码
					success:(res)=>{
						const obj = JSON.parse(res.data)
						console.log(obj);
						this.foodData = obj
						uni.setNavigationBarTitle({
							title:'识别结果'
						})
					}
					
				})
				
			}
		},
		onLoad() {
			this.takePhoto()
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		height: 100vh;
	}
	
</style>
