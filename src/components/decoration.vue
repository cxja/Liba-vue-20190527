<template>
   <div id="decoration">
       <router-view></router-view>
		<div class="ui-header">
				<span class="user" @click="myself">
				</span>
            <span class="logo_top">装修</span>
		</div>
        <mt-swipe :auto="4000">
			<mt-swipe-item>
				<img src="../assets/image/zpic1.png" alt="">
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../assets/image/zpic2.png" alt="">
			</mt-swipe-item>
		</mt-swipe>
		<div class="decoration-banner">
			<ul class="icons">
				<li v-for="item in icons">
					<i class="iconfont"><router-link :to='item.path'>{{item.url}}</router-link></i>
					<span><router-link :to='item.path'>{{item.title}}</router-link></span>
				</li>
			</ul>
		</div>
		<div class="decoration-pros">
			<ul>
				<li v-for="item in pros">
					<i><router-link :to='item.path'></router-link></i>
					<span>{{item.title}}</span>
				</li>
			</ul>
		</div>
		<div class="bidding-pic">
			<img src="../assets/image/bidding_banner2.png" alt="">
		</div>
		<div class="block-info line">
			<span class="block-title"><router-link to="/home">推荐商家</router-link></span>
		</div>
		<div class="tag-logo">
			<ul>
				<li v-for="item in tags">
					<img :src="item.url" alt="">
					<div>
						<span class="tag-title">{{item.title}}</span>
						<span class="num">一周热销指数:{{item.num}}</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="classify">
				<table style="border-collapse:separate; border-spacing:10px 10px;">
					<tbody>
						<tr>
							<td v-for="item in tabs">
								<router-link to="/home">{{item.tab1}}</router-link>
							</td>
						</tr>
						<tr>
							<td v-for="item in tabs">
								<router-link to="/home">{{item.tab2}}</router-link>
							</td>
						</tr>
						<tr>
							<td v-for="item in tabs">
								<router-link to="/home">{{item.tab3}}</router-link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="block-info line">
			<span class="block-title"><router-link to="/home">推荐作品</router-link></span>
		</div>
		<div class="block-show">
			<div class="block-show-left">
				<router-link to="/home">
					<img src="../assets/image/show-img1.png">
					<span>现代简约</span>
				</router-link>
			</div>
			<div class="block-show-right">
				<router-link to="/home">
					<img src="../assets/image/show-img2.png" alt="">
					<span>现代简约</span>
				</router-link>
				<router-link to="/home">
					<img src="../assets/image/show-img3.png" alt="">
					<span>美式</span>
				</router-link>
			</div>
		</div>
		<div class="classify">
				<table style="border-collapse:separate; border-spacing:10px 10px;">
					<tbody>
						<tr class="tabs">
							<td v-for="item in tabs">
								<router-link to="/home">{{item.tab1}}</router-link>
							</td>
						</tr>
					</tbody>
				</table>
				<a href="" id="showall">查看全部>></a>
		</div>
		<div class="block-info line">
			<span class="block-title"><router-link to="/home">网友案例</router-link></span>
		</div>
		<div class="content">
			<ul>
				<li v-for="item in contents">
					<div class="user-info">
						<div class="user-icon">
							<img :src="item.url" alt="">
						</div>
					</div>
					<span class="user-span">{{item.title}}</span>

					<div class="case-txt">
						<router-link to="/home">
							{{item.txt}}
							
						</router-link>						
					</div>
					<div class="case-tag">
						<span id="">
							浏览量：{{item.num}}
						</span>
						<span>
							回复数：{{item.num1}}
						</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="classify">
				<table style="border-collapse:separate; border-spacing:10px 10px;">
					<tbody>
						<tr class="tabs">
							<td v-for="item in tabs">
								<router-link to="/home">{{item.tab1}}</router-link>
							</td>
						</tr>
					</tbody>
				</table>
				<a href="" id="showall">查看全部>></a>
		</div>


		<div class="footer-more"></div>
   </div>
</template>
<script>
import "../assets/css/index.css";
import "../assets/css/decoration.css"
export default {
    data(){
		return{
			icons:[
				{
					url:'\ue62d',
					path:'/home',
					title:'装修设计'
				},
				{
					url:'\ue60d',
					path:'/home',
					title:'二手房精装'
				},
				{
						url:'\ue602',
					path:'/home',
					title:'高端设计'
				},
				{
						url:'\ue656',
					path:'/home',
					title:'装修公司'
				},
				{
						url:'\ue604',
					path:'/home',
					title:'局部装修'
				},
				{
						url:'\ue64a',
					path:'/home',
					title:'敲墙/拆旧'
				},
				{
						url:'\ue625',
					path:'/home',
					title:'监理'
				},
				{
						url:'\ue66e',
					path:'/home',
					title:'风水园丁'
				}
		
			],
			pros:[
				{
					path:'/hoem',
					title:'风水园丁'
				},
				{
					path:'/hoem',
					title:'风水园丁'
				},
				{
					path:'/hoem',
					title:'风水园丁'
				},
				{
					path:'/hoem',
					title:'风水园丁'
				}
			],
			tags:[
				{
						url: 'http://localhost:8080/src/assets/image/tag-logo4.png',
						title:'ID城市空间',
						num:121
				},
				{
						url: 'http://localhost:8080/src/assets/image/tag-logo3.png',
						title:'桂隆快乐空间',
						num:123
				},
				{
						url: 'http://localhost:8080/src/assets/image/tag-logo.png',
						title:'亿淘装饰',
						num:101
				},
				{
						url: 'http://localhost:8080/src/assets/image/tag-logo5.png',
						title:'至纯设计&装饰',
						num:97
				},
				{
						url: 'http://localhost:8080/src/assets/image/tag-logo2.png',
						title:'欧堡・空间设计',
						num:84
				},
				{
						url: 'http://localhost:8080/src/assets/image/tag-logo6.png',
						title:'上海映象设计',
						num:19
				}
			],
			tabs: [{
						tab1: '更多商家:',
						tab2: '高端设计',
						tab3:'软装设计'
					},
					{
						tab1: '装修设计',
						tab2: '局部装修',
						tab3:'园艺景观'

					},
					{
						tab1: '装修公司',
						tab2: '监理',
						tab3:'墙面翻新'

					},
					{
						tab1: '二手房精装',
						tab2: '橱柜',
						tab3:'敲墙/拆旧'
						
					},
				],
				contents:[
					{
						url: 'http://localhost:8081/src/assets/image/pic1.gif',
						title:'半月仙',
						num:246250,
						num1:4527,
						txt:'第一次打造梦想之家ღღღ在简欧与美式之间游走 ｡◕‿◕｡'
					},
					{
						url: 'http://localhost:8081/src/assets/image/pic1.gif',
						title:'半月仙',
						num:5064,
						num1:1848,
						txt:'双宝妈的装修记录帖-与境远牵手，设计师雷苗'
					},
					{
						url: 'http://localhost:8081/src/assets/image/pic1.gif',
						title:'半月仙',
						num:6215,
						num1:778,
						txt:'【日记】   3房2厅   简美风格'
					}
				]
				
				
			
		}
	},
	methods:{
		myself(){
			if(localStorage.getItem('userName')){
				 this.$router.push("/my");
			}
			else{
				this.$router.push("/login");
			}
		}
	}
}
</script>
