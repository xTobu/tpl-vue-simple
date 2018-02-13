import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './components/Index';
import About from './components/About';
import Count from './components/Count';
import Post from './components/Post';
//https://ithelp.ithome.com.tw/articles/10185164
// init

Vue.use(VueRouter);
export default new VueRouter({
	//https://router.vuejs.org/zh-cn/api/options.html
	// 使用 HTML 5 模式
	// mode: 'history',
	// base: __dirname,
	// routre 表
	routes: [
		{
			path: '/',
			name: 'index',
			component: Index,
		},
		{
			path: '/about/:id',
			name: 'about',
			component: About,
			children: [
				{
					// 当 /user/:id/profile 匹配成功，
					// UserProfile 会被渲染在 User 的 <router-view> 中
					path: 'post',
					component: Post,
				},
				
			],
		},
		// router 轉址
		{ path: '/about', redirect: '/about/0' },
		{
			path: '/post/',
			name: 'post',
			component: Post,
			
		},
		{
			path: '/count',
			name: 'count',
			component: Count,
		},
		// router 轉址
		{ path: '/*', redirect: '/' },
	],
});
