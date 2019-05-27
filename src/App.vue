<template>
  <div id="app">
  	<router-view></router-view>
  <ul class="footer">
  <li v-for="(item,index) in icons" :key="index">
  	<i class="iconfont"><router-link :to='item.path'>{{item.url}}</router-link></i>
  	<span><router-link :to='item.path'>{{item.title}}</router-link></span>
  </li>
  </ul>
   
  
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      icons:[
      	{url:'\ue677',
      	title:'首页',
      	path:'/home'},
      	{url:'\ue621',title:'装修',
      	path:'/decoration'},
      	{url:'\ue641',title:'建材',
      	path:'/building'
      	},
      	{url:'\ue63d',title:'促销',
      	path:'/sale'
      	},
      	{url:'\ue601',title:'社区',
      	path:'/community'
      	}
      ]
      
      
    };
  }
};
</script>

