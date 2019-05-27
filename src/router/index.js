import Vue from 'vue'
import Router from 'vue-router'
import store from '../../store/index.js'

import home from '../components/home.vue'
import tour from '../components/tour.vue'
import decoration from '../components/decoration.vue'
import building from '../components/building.vue'   
import sale from '../components/sale.vue'   
import community from '../components/community.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'
import my from '../components/my.vue'
import newtopic from '../components/newtopic.vue'
import topic from '../components/topic.vue'
import thistopic from '../components/thistopic.vue'
import mytopic from '../components/mytopic.vue'
Vue.use(Router)
   

import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

const router= new Router({
	routes:[
		{
			path:'/',
			component:home
		},
		{
		    path: '/home',
			component:home,
		},
		{
			path:'/tour',
			component:tour
		},
		{
			path:'/decoration',
			component:decoration
		},
		{
			path:'/building',
			component:building
		},
		{
			path:'/sale',
			component:sale
		},
		{
			path:'/community',
			component:community
		},
		{
			path:'/login',
			component:login
		},
		{
			path:'/register',
			component:register
		},
		{
			path:'/my',
			component:my,
			meta:{
			//添加该字段表示进入该路由需要登录
				requireAuth:true
			}
		},
		{
			path:'/newtopic',
			component:newtopic
		},{
			path:'/topic',
			component:topic
		},{
			path:'/thistopic',
			component:thistopic
		},
		{
			path:'/mytopic',
			component:mytopic
		}
	]
	
})



export default router