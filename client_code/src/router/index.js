import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views'
import home from '../views/pages/home.vue'
import login from '../views/pages/login.vue'
import yonghuList from '@/views/pages/yonghu/list'
import yonghuDetail from '@/views/pages/yonghu/formModel'
import yonghuAdd from '@/views/pages/yonghu/formAdd'
import yonghuRegister from '@/views/pages/yonghu/register'
import yonghuCenter from '@/views/pages/yonghu/center'
import caipinfenleiList from '@/views/pages/caipinfenlei/list'
import caipinfenleiDetail from '@/views/pages/caipinfenlei/formModel'
import caipinfenleiAdd from '@/views/pages/caipinfenlei/formAdd'
import caipinxinxiList from '@/views/pages/caipinxinxi/list'
import caipinxinxiDetail from '@/views/pages/caipinxinxi/formModel'
import caipinxinxiAdd from '@/views/pages/caipinxinxi/formAdd'
import storeupList from '@/views/pages/storeup/list'
import cartList from '@/views/pages/shop_order/cart'
import addressList from '@/views/pages/shop_address/list'
import newsList from '@/views/pages/news/list'
import shangjiaList from '@/views/pages/shangjia/list'
import shangjiaDetail from '@/views/pages/shangjia/formModel'
import shangjiaAdd from '@/views/pages/shangjia/formAdd'
import order_confirm from '@/views/pages/shop_order/confirm'
import ordersList from '@/views/pages/shop_order/list'

const routes = [{
		path: '/',
		redirect: '/index/home'
	},
	{
		path: '/index',
		component: index,
		children: [{
			path: 'home',
			component: home
		}
		, {
			path: 'yonghuList',
			component: yonghuList
		}, {
			path: 'yonghuDetail',
			component: yonghuDetail
		}, {
			path: 'yonghuAdd',
			component: yonghuAdd
		}
		, {
			path: 'yonghuCenter',
			component: yonghuCenter
		}
		, {
			path: 'caipinfenleiList',
			component: caipinfenleiList
		}, {
			path: 'caipinfenleiDetail',
			component: caipinfenleiDetail
		}, {
			path: 'caipinfenleiAdd',
			component: caipinfenleiAdd
		}
		, {
			path: 'caipinxinxiList',
			component: caipinxinxiList
		}, {
			path: 'caipinxinxiDetail',
			component: caipinxinxiDetail
		}, {
			path: 'caipinxinxiAdd',
			component: caipinxinxiAdd
		}
		, {
			path: 'storeupList',
			component: storeupList
		}
		, {
			path: 'cartList',
			component: cartList
		}
		, {
			path: 'addressList',
			component: addressList
		}
		, {
			path: 'newsList',
			component: newsList
		}
		, {
			path: 'shangjiaList',
			component: shangjiaList
		}, {
			path: 'shangjiaDetail',
			component: shangjiaDetail
		}, {
			path: 'shangjiaAdd',
			component: shangjiaAdd
		}
		, {
			path: 'order_confirm',
			component: order_confirm
		}
		, {
			path: 'ordersList',
			component: ordersList
		}
		]
	},
	{
		path: '/login',
		component: login
	}
	,{
		path: '/yonghuRegister',
		component: yonghuRegister
	}
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
