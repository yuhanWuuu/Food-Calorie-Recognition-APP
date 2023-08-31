<template>
	<view class="container">
		<Photo :img="imgPath"></Photo>
		<Foods :kind="foodData.kind" :calorie="foodData.calorie"></Foods>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgPath: "../../static/images/chinese-food.png",
				// api返回的数据
				foodData:{}
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
					url: "http://127.0.0.1:5000/predict",
					name: 'image',
					filePath: this.imgPath,
					// formData: { },//传参，数据+随机码
					success:(res)=>{
						const obj = JSON.parse(res.data)
						// console.log(obj);
						delete obj.img;
						this.foodData = obj
						
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
