<template>
<div id="building">
       <router-view></router-view>
		<div class="ui-header">
				<span class="user" @click="myself">
				</span>
            <span class="logo_top">建材</span>
		</div>
        <mt-swipe :auto="4000">
			<mt-swipe-item>
				<img src="../assets/image/bpic1.png" alt="">
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../assets/image/bpic2.png" alt="">
			</mt-swipe-item>
		</mt-swipe>
        <div class="block-info">
			<span class="block-title"><router-link to="/home">推荐商家</router-link></span>
		</div>
        <div class="tag-logo">
			<ul>
				<li v-for="item in tags">
					<img :src="item.url" alt="">
					<div>
						<span class="tag-title">{{item.title}}</span>
						<span class="num">口碑值:{{item.num}}</span>
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
				
		</div>
        <div class="block-info">
					<a href="" class="block-in all">查看全部</a>
				</div>
        <div class="block-info">
				<span class="block-title"><router-link to="/home">推荐商品</router-link></span>
				<span class="block-in"><router-link to="/home">更多分类</router-link></span>
		</div>
			<ul class="block-info-show">
				<li v-for="item in imgs">
					<a href="">
						<div class="img">
							<img :src="item.url">
						</div>
						<div class="info">
							<div class="title">
								{{item.title}}
							</div>
							<div class="price1">
								{{item.price}}
								<span id="price">￥{{item.priceNum}}</span>/套
							</div>
						</div>
					</a>
				</li>
			</ul>
		<div class="block-info">
			<span class="block-title"><router-link to="/home">推荐案例</router-link></span>
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
        <div class="footer-more"></div>
</div>

</template>

<script>
import '../assets/css/building.css'
export default {
    data(){
        return{
            tags:[
                {
                    url:'http://localhost:8080/src/assets/image/tag-logo4.png',
                    title:'格琳橱柜',
                    num:363
                },
                 {
                    url:'http://localhost:8080/src/assets/image/tag-logo4.png',
                    title:'格琳橱柜',
                    num:363
                   
                },
                 {
                    url:'http://localhost:8080/src/assets/image/tag-logo4.png',
                    title:'格琳橱柜',
                    num:363
                },
                 {
                    url:'http://localhost:8080/src/assets/image/tag-logo4.png',
                    title:'格琳橱柜',
                    num:363
                },
                 {
                    url:'http://localhost:8080/src/assets/image/tag-logo4.png',
                    title:'格琳橱柜',
                    num:363
                },
                 {
                    url:'http://localhost:8080/src/assets/image/tag-logo4.png',
                    title:'格琳橱柜',
                    num:363
                }
            ],
            tabs:[
                {
                    tab1:'中央空调'
                },
                {
                    tab1:'地暖'
                },
                {
                    tab1:'橱柜'
                },
                {
                    tab1:'家具'
                }
            ],
            imgs: [{
						url: 'http://localhost:8081/src/assets/image/spic_01.png',
						title: '明窗80断桥隔热铝合金推拉门',
						price: '篱笆价',
						priceNum: '6,500.00'
					},
					{
						url: 'http://localhost:8081/src/assets/image/spic_02.png',
						title: '日立中央空调EX-PRO系列家用变频多联机 一拖四',
						price: '篱笆价',
						priceNum: '6,500.00'
					},
					{
						url: 'http://localhost:8081/src/assets/image/spic_03.png',
						title: '德国爱格原装进口地板-082',
						price: '篱笆价',
						priceNum:'6,500.00'
					},
					{
						url: 'http://localhost:8081/src/assets/image/spic_04.png',
						title: '日立中央空调EX-PRO系列家用变频多联机 一拖三',
						price: '篱笆价',
						priceNum: '6,500.00'
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
						txt:'仁恒东郊花园毕业照——金碧辉煌美式风格，为自己疯狂打CALL！'
                    },
                    {
						url: 'http://localhost:8081/src/assets/image/pic1.gif',
						title:'半月仙',
						num:6215,
						num1:778,
						txt:'收尾Ing....（装小蜜）【携手至纯】【设计师方俊钦】【队长孙欣荣】【格林贝诗橱柜】【浩念门窗】【美的中央空调】【高怡'
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

