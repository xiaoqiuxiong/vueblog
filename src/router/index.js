import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import NewsDetail from '@/components/NewsDetail'
import Me from '@/components/me'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		redirect: '/index'
	},
	{
		path: '/index',
		name: 'index',
		component: Index
	},
	{
		path: '/news_detail',
		name: 'newsDetail',
		component: NewsDetail
	},
	{
		path: '/me',
		name: 'me',
		component: Me
	}
	]
})
