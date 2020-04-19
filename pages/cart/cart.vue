<template>
	<view class="box">
		<view style="width: 100%;display: flex;">
			<view class="box_left">
				<view :class="{green:coundIndex==index}" @click="getcound(index)" v-for="(item,index) in footList" :key="index">
					{{item.title}}
				</view>
			</view>
			<view class="box_right">
				<scroll-view scroll-y @scroll="scrollTop" @scrolltolower="scrolltolower" scroll-with-animation :scroll-into-view="cound" class="scroll_item">
					<view>
						<view :id="cp+index" class="cpSel" v-for="(item,index) in footList" :key="index">
							<view class="box_ft">{{item.title}}</view>
							<view v-for="(items,index) in item.list" :key="index">
								{{items}}
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<uni-rate value="2"></uni-rate>
		<view class="">
			Vuex测试
		</view>
		<view>数量: {{number}}</view>
		<view>价格: {{priceAll}}</view>
		<button type="primary" @click="addCount">Add</button>
	</view>
</template>

<script>
	import {uniRate} from '../../components/uni-rate/uni-rate.vue'

	export default {
		data() {
			return {
				title: 'Hello',
				footList: [{
						title: '早餐',
						list: ['鸡肉', '鸭肉', '鹅肉', '鸡蛋']
					},
					{
						title: '午餐',
						list: ['盖饭', '手扒饭', '咖喱饭', '鸡排饭']
					},
					{
						title: '晚餐',
						list: ['辣子鸡丁', '红烧肉', '回锅肉', '水煮肉片']
					},
					{
						title: '夜宵',
						list: ['烤茄子', '考韭菜', '烤小鱼', '烤生蚝']
					}
				],
				cp: 'cp',
				cound: 'cp0',
				coundIndex: 0,
				topArr: [],
				
			}
		},
		components: {
			uniRate
		},
		// 计算属性
		computed: {
			number(){
				return this.$store.state.count
			},
			priceAll(){
				return this.$store.getters.getCount
			},
			
		},
		onLoad(){
			this.getListTop()
		},
		methods: {
			addCount(){
				this.$store.commit('addNum')
			},
			
			getcound(index){
				this.coundIndex = index
				this.cound = `cp${index}`
				console.log(this.coundIndex)
			},
			// 滚动到顶部
			scrolltolower(){
				setTimeout(()=>{
					this.coundIndex = 3
				}, 80);
			},
			// 滚动触发
			scrollTop(e){
				let scrollTop = e.target.scrollTop;
				for(let i=0;i<this.topArr.length;i++){
					let a = this.topArr[i]
					let b = this.topArr[i+1]
					if(scrollTop>=a && scrollTop<=b){
						this.coundIndex = i
					}
				}
			},
			// 获取到标签到顶部的高度
			getListTop (){
				let topArr = []
				const query = uni.createSelectorQuery().in(this)
				query.selectAll('.cpSel').boundingClientRect(data => {
					data.forEach((item,index) =>{
						topArr.push(item.top)
					})
					this.topArr = topArr
				}).exec();
			}
		}
	}
</script>

<style lang="less">
	.box {
		width: 100%;

		.box_left {
			width: 50%;
			display: inline-block;
		}

		.box_right {
			width: 50%;
			display: inline-block;
		}

		.scroll_item {
			height: 300rpx;
			overflow: hidden;

			.box_ft {
				font-weight: 600;
				background-color: pink;
				height: 50rpx;
			}
		}
	}
	
	.green {
		background-color: #808080;
	}
</style>
