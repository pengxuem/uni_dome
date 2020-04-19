import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	// 全局属性
	state: {
		count: 1,
		price: 10,
	},
	
	// 全局方法 (同步方法)
	mutations: {
		addNum(state) {
			state.count++
		}
	},
	
	// 属性计算  只要属性发生改变就会触发
	getters:{
		getCount: state => {
			return state.count * state.price
		},
	},
	
	// 全局方法 (异步方法)
	actions: {
		
	},
	
	
})

export default store