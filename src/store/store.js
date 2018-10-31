import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		userInfo:'',
		classData:'',
		activeNav:0,
		activeNavId:'',
		reader: ''
	},
	mutations:{
		userInfoVuex (state,data){
			state.userInfo = data
		} ,
		classDataVuex (state,data){
			state.classData = data
		} ,
		activeNavVuex (state,data){
			state.activeNav = data
		} ,
		activeNavIdVuex (state,data){
			state.activeNavId = data
		},
		readerVuex (state,data){
			state.reader = data
		}
	}
})