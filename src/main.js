// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/styles.css'
import './filter'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import Pagination from 'vue-pagination-2';
Vue.component('pagination', Pagination);
Vue.use(VueAxios, axios)

if( window.location.hostname=="www.xiaoqiuxiong.cn"){
	var baseUrl="http://www.xiaoqiuxiong.cn/apis_api_main"
}else{
	var baseUrl=""
}
axios.defaults.baseURL = baseUrl;
Vue.use(Vuex)
Vue.config.productionTip = false
import store from './store/store'

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	components: { App },
	template: '<App/>'
})
