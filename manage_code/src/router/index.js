	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import news from '@/views/news/list'
	import address from '@/views/address/list'
	import yonghu from '@/views/yonghu/list'
	import orders from '@/views/orders/list'
	import storeup from '@/views/storeup/list'
	import config from '@/views/config/list'
	import discusscaipinxinxi from '@/views/discusscaipinxinxi/list'
	import caipinxinxi from '@/views/caipinxinxi/list'
	import shangjia from '@/views/shangjia/list'
	import caipinfenlei from '@/views/caipinfenlei/list'
	import shangjiaRegister from '@/views/shangjia/register'
	import shangjiaCenter from '@/views/shangjia/center'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/shangjiaCenter',
			name: '商家个人中心',
			component: shangjiaCenter
		}
		,{
			path: '/news',
			name: '公告信息',
			component: news
		}
		,{
			path: '/address',
			name: '地址',
			component: address
		}
		,{
			path: '/yonghu',
			name: '用户',
			component: yonghu
		}
		,{
			path: '/orders',
			name: '订单管理',
			component: orders
		}
		,{
			path: '/storeup',
			name: '我的收藏',
			component: storeup
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/discusscaipinxinxi',
			name: '菜品信息评论评论',
			component: discusscaipinxinxi
		}
		,{
			path: '/caipinxinxi',
			name: '菜品信息',
			component: caipinxinxi
		}
		,{
			path: '/shangjia',
			name: '商家',
			component: shangjia
		}
		,{
			path: '/caipinfenlei',
			name: '菜品分类',
			component: caipinfenlei
		}
		]
	},
	{
		path: '/shangjiaRegister',
		name: '商家注册',
		component: shangjiaRegister
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
