<template>
	<div id="app">
		<router-view></router-view>
		<div class="ui-header">
				<span class="user" @click="myself">
				</span>
			<a href="#" class="liba-logo"></a>
		</div>

		<!-- 轮播图 -->
		<mt-swipe :auto="4000">
			<mt-swipe-item>
				<img src="../assets/image/0_3.png" alt="">
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../assets/image/11736_2.jpg" alt="">
			</mt-swipe-item>
		</mt-swipe>
		<div class="block">
			<div class="block-info">
				<span class="block-title"><router-link to="/home">篱笆社区</router-link></span>
				<span class="block-in"><router-link to="/home">点击进入</router-link></span>
			</div>
			<div class="block-icon">
				<ul>
					<li v-for="item in block">
						<router-link :to='item.url'><i></i>{{item.title}}</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="block">
			<div class="block-info">
				<span class="block-title"><router-link to="/home">篱笆装修</router-link></span>
				<span class="block-in"><router-link to="/home">点击进入</router-link></span>
			</div>
			<div class="block-icon block-img">
				<ul>
					<li v-for="item in blockimg">
						<router-link :to='item.url'><i></i>{{item.title}}</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="block-info">
			<span>推荐作品</span>
		</div>
		<div class="block-show">
			<div class="block-show-left">
				<router-link to="/home">
					<img src="../assets/image/pic1.png">
					<span>现代简约</span>
				</router-link>
			</div>
			<div class="block-show-right">
				<router-link to="/home">
					<img src="../assets/image/pic2.png" alt="">
					<span>现代简约</span>
				</router-link>
				<router-link to="/home">
					<img src="../assets/image/pic3.png" alt="">
					<span>美式</span>
				</router-link>
				<div class="block-info">
					<a href="" class="block-in all">查看全部</a>
				</div>
			</div>
		</div>
		<div class="block">
			<div class="block-info">
				<span class="block-title"><router-link to="/home">篱笆建材</router-link></span>
				<span class="block-in"><router-link to="/home">点击进入</router-link></span>
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
					</tbody>
				</table>
			</div>
			<div class="block-info">
				<span>推荐商品</span>
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
			<div class="footer-more"></div>
		</div>
	</div>
	

</template>

<script>
import "../assets/css/index.css";
export default {
  data() {
    return {
      msg: "hh",
      block: [
        {
          title: "上海闲聊",
          url: "/home"
        },
        {
          title: "看房买房",
          url: "/home"
        },
        {
          title: "装修日记",
          url: "/home"
        },
        {
          title: "旅游天地",
          url: "/tour"
        }
      ],
      blockimg: [
        {
          title: "高品位设计",
          url: "/home"
        },
        {
          title: "高质量施工",
          url: "/home"
        },
        {
          title: "口碑装修公司",
          url: "/home"
        }
      ],
      tabs: [
        {
          tab1: "热门分类",
          tab2: "阳台窗"
        },
        {
          tab1: "中央空调",
          tab2: "暖气片"
        },
        {
          tab1: "地暖",
          tab2: "楼梯"
        },
        {
          tab1: "家具",
          tab2: "橱柜"
        }
      ],
      items: [
        {
          msg: "首页"
        },
        {
          msg: "装修"
        },
        {
          msg: "建材"
        },
        {
          msg: "促销"
        },
        {
          msg: "社区"
        }
      ],
      imgs: [
        {
          url: "http://localhost:8080/src/assets/image/spic_01.png",
          title: "明窗80断桥隔热铝合金推拉门",
          price: "篱笆价",
          priceNum: 2917
        },
        {
          url: "http://localhost:8080/src/assets/image/spic_02.png",
          title: "日立中央空调EX-PRO系列家用变频多联机 一拖四",
          price: "篱笆价",
          priceNum: 2300
        },
        {
          url: "http://localhost:8080/src/assets/image/spic_03.png",
          title: "德国爱格原装进口地板-082",
          price: "篱笆价",
          priceNum: 17000
        },
        {
          url: "http://localhost:8080/src/assets/image/spic_04.png",
          title: "日立中央空调EX-PRO系列家用变频多联机 一拖三",
          price: "篱笆价",
          priceNum: 26500
        }
      ]
    };
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
};
</script>

<style>
</style>