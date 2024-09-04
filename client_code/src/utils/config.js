const config = {
    get() {
        return {
            url : process.env.VUE_APP_BASE_API_URL + process.env.VUE_APP_BASE_API + '/',
            name: process.env.VUE_APP_BASE_API,
			menuList:[
				{
					name: '新闻资讯管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'公告信息',
							url:'/index/newsList'
						},
					]
				},
				{
					name: '购物车管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'购物车',
							url:'/index/cartList'
						},
					]
				},
				{
					name: '菜品信息管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'菜品信息',
							url:'/index/caipinxinxiList'
						},
					]
				},
			]
        }
    },
    getProjectName(){
        return {
            projectName: "网上订餐系统"
        } 
    }
}
export default config
