<template>
	<view class="container">
		<!-- 识别的图片 -->
		<Photo :img="imgPath"></Photo>
		<!-- 识别结果 -->
		<Foods :foodData="foodData" :isNone="isNone"></Foods>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 默认图片
				imgPath: "../../static/images/chinese-food.png",
				// api返回的数据
				foodData:[],
				isNone: false
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
				// 需要选择图片
				// if(this.imgPath == "../../static/images/chinese-food.png"){
				// 	console.log('请选择图片');
				// 	// return;
				// 	this.$refs.uToast.show({
				// 		type: 'error',
				// 		message: '请选择图片'
				// 	});
				// 	throw Error();
				// }
				uni.uploadFile({
					url: "https://han-whye.top/api/predict/",
					name: 'image',
					filePath: this.imgPath,
					success:(res)=>{
						// console.log(res.data) //string
						const obj = JSON.parse(res.data)
						
						var food_dict = obj.dict_res
						console.log(food_dict)
						var tmpfoodData = []
						for (let food in food_dict) {
						    let name = food;
							// console.log('name',name);
						    let calory = parseFloat(food_dict[food][0].calory);
							// console.log('calory',calory);
						    let heat = food_dict[food][1];
							console.log('heat',heat);
						    let entry = { [name]: [calory,heat] };
						    tmpfoodData.push(entry);
						}
						if(!tmpfoodData.length){
							this.isNone = true
						}
						console.log('tmpfoodData',tmpfoodData);
						this.foodData = tmpfoodData
						this.imgPath = "data:image/png;base64," + obj.image
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

