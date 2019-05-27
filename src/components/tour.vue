<template>
	<div id="container-wrap">
		<router-view></router-view>
		<header class="header">
			<div id="header-main">
				<a href="#" class="header-city">
					广州周边
					<span class="triangle"></span>
				</a>
					<i class="iconfont magnifier">&#xe637;</i>
				<input type="text" class="search" placeholder="搜索目的地/景点/酒店">
				<div>
					<i class="iconfont envelope">&#xe603;</i>
				</div>
			</div>
		</header>
		<div class="nav">
			<div class="nav-wrap">
				<ul>
					<li v-for="item in logos">
						<router-link :to="item.path">
							<img :src="item.url" />
							<h1>{{item.title}}</h1>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="pic">
			<router-link to="/home"><img src="../assets/image/index-bannerv2.jpg" alt=""></router-link>
		</div>
		<div class="circum-wrap1">

			<ul class="box-nav">
				<li v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)">
					<span id="">
							<i :class="item.class"></i>
							{{item.title}}
					</span>
				</li>
			</ul>
			<div class="circum-wrap-1">
				<div  v-for="item in tabblock" v-if="!num">
					<router-link :to="item.path">
						{{item.title}}
					</router-link>
				</div>
			</div>
			<div class="circum-wrap-1">
				<div  v-for="item in tabblock1" v-if="num">
					<router-link :to="item.path">
						{{item.title}}
					</router-link>
				</div>
			</div>
			
		</div>
	
		<div class="ticket">
			<mt-button size="small" class="ticket" @click.native.prevent="active = 'tab-container1'">景点门票</mt-button>
			<mt-button size="small" @click.native.prevent="active = 'tab-container2'">度假酒店</mt-button>
			<mt-button size="small" @click.native.prevent="active = 'tab-container3'">特价团购</mt-button> 	
		</div>	
 		<mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item  id="tab-container1">
        	<!-- cell组件 -->			  
				<div class="ticket-details" v-for="item in pics1">		
					
						<router-link :to="item.path">
							<img :src="item.url" alt="">
						</router-link>
						<div class="ticket-text">
							{{item.subtitle}}
							<span id="place">{{item.title}}</span>
						</div>
						<div class="price">
							<div class="price-old">
								原价
								<del>{{item.price}}</del>
							</div>
							<div class="price-new">
								<span id="pri">￥</span>
								<span id="sel">{{item.sel}}</span>
								起
							</div>
						</div>
									
				<div class="footer-more">
					<h3>{{item.place}}</h3>
					<p>{{item.details}}</p>
					<span class="tag-oriange">今日玩</span>
					<span class="tag-blue">导览图</span>
					<span class="tag-distance">距您{{item.distance}}km</span>
				</div>
				
			</div>
		  <!-- </mt-cell> -->
        </mt-tab-container-item>
		 <mt-tab-container-item id="tab-container2">
        	<!-- cell组件 -->			  
				<div class="ticket-details" v-for="item in pics2">		
					
						<router-link :to="item.path">
							<img :src="item.url" alt="">
						</router-link>
						<div class="ticket-text">
							{{item.subtitle}}
							<span id="place">{{item.title}}</span>
						</div>
						<div class="price">
							<div class="price-old">
								原价
								<del>{{item.price}}</del>
							</div>
							<div class="price-new">
								<span id="pri">￥</span>
								<span id="sel">{{item.sel}}</span>
								起
							</div>
						</div>
									
				<div class="footer-more">
					<h3>{{item.place}}</h3>
					<p>{{item.details}}</p>
					<span class="tag-oriange">今日玩</span>
					<span class="tag-blue">导览图</span>
					<span class="tag-distance">距您{{item.distance}}km</span>
				</div>
				
			</div>
		  <!-- </mt-cell> -->
        </mt-tab-container-item>
		 <mt-tab-container-item id="tab-container3">
        	<!-- cell组件 -->			  
				<div class="ticket-details" v-for="item in pics3">		
					
						<router-link :to="item.path">
							<img :src="item.url" alt="">
						</router-link>
						<div class="ticket-text">
							{{item.subtitle}}
							<span id="place">{{item.title}}</span>
						</div>
						<div class="price">
							<div class="price-old">
								原价
								<del>{{item.price}}</del>
							</div>
							<div class="price-new">
								<span id="pri">￥</span>
								<span id="sel">{{item.sel}}</span>
								起
							</div>
						</div>
									
				<div class="footer-more">
					<h3>{{item.place}}</h3>
					<p>{{item.details}}</p>
					<span class="tag-oriange">今日玩</span>
					<span class="tag-blue">导览图</span>
					<span class="tag-distance">距您{{item.distance}}km</span>
				</div>
				
			</div>
		  <!-- </mt-cell> -->
        </mt-tab-container-item>
      	</mt-tab-container>

		<div class="footer-more"></div>		
	</div>
	
</template>
<script>
import "../assets/css/tour.css";

export default {
  data() {
    return {
      active: "tab-container1",
      msg: "hh",
      logos: [
        {
          url: "http://localhost:8080/src/assets/image/logo1.png",
          title: "酒店预订",
          path: "/home"
        },
        {
          url: "http://localhost:8080/src/assets/image/logo2.png",
          title: "景点门票",
          path: "/home"
        },
        {
          url: "http://localhost:8080/src/assets/image/logo3.png",
          title: "巽寮湾",
          path: "/home"
        },
        {
          url: "http://localhost:8080/src/assets/image/logo4.png",
          title: "客栈民宿",
          path: "/home"
        },
        {
          url: "http://localhost:8080/src/assets/image/logo5.png",
          title: "机票预订",
          path: "/home"
        },
        {
          url: "http://localhost:8080/src/assets/image/logo6.png",
          title: "广州温泉",
          path: "/home"
        },
        {
          url: "http://localhost:8080/src/assets/image/logo7.png",
          title: "亲子",
          path: "/home"
        },
        {
          url: "http://localhost:8080/src/assets/image/logo8.png",
          title: "团购预约",
          path: "/home"
        }
      ],
      tabs: [{
		  title:'热门景区',
		  class:'scenery'
	  },
	 	{
			 title:'周边城市',
			 class:'city'
		 } 
	  ],
      tabblock: [
        {
          path: "/home",
          title: "广州长隆"
        },
        {
          path: "/home",
          title: "南昆山"
        },
        {
          path: "/home",
          title: "珠海长隆"
        },
        {
          path: "/home",
          title: "珠江夜游"
        },
        {
          path: "/home",
          title: "广州塔"
        },
        {
          path: "/home",
          title: "珠海长隆"
        },
        {
          path: "/home",
          title: "世界之窗"
        },
        {
          path: "/home",
          title: "岭南印象园"
        }
      ],
      tabblock1: [
        {
          path: "/home",
          title: "广州"
        },
        {
          path: "/home",
          title: "惠州"
        },
        {
          path: "/home",
          title: "深圳"
        },
        {
          path: "/home",
          title: "珠海"
        },
        {
          path: "/home",
          title: "清远"
        },
        {
          path: "/home",
          title: "阳江"
        },
        {
          path: "/home",
          title: "佛山"
        },
        {
          path: "/home",
          title: "更多"
        }
      ],

      num: 0,
      tab(index) {
        this.num = index;
      },
      tickets: ["景点门票", "度假酒店", "特价团购"],
      pics1: [
        {
          url: "http://localhost:8080/src/assets/image/pic1.jpg",
		  path: "/home",
		  subtitle:'门票',
          title: "广州",
          price: 100,
          sel: 95,
          place: "广州长隆旅游度假区",
          details: "世界级旅游王国",
          distance: 13.3
        },
        {
          url: "http://localhost:8080/src/assets/image/pic2.jpg",
		  path: "/home",
		  subtitle:'门票',
          title: "广州",
          price: 240,
          sel: 210,
          place: "广州长隆野生动物世界",
          details: "亚洲最大的野生动物主题公园",
          distance: 12.6
        },
        {
          url: "http://localhost:8080/src/assets/image/pic3.jpg",
		  path: "/home",
		  subtitle:'门票',
          title: "广州",
          price: 200,
          sel: 175,
          place: "广州长隆欢乐世界",
          details: "超大型世界顶尖主题游乐园",
          distance: 12.9
        },
        {
          url: "http://localhost:8080/src/assets/image/pic4.jpg",
		  path: "/home",
		  subtitle:'门票',
          title: "广州",
          price: 350,
          sel: 325,
          place: "广州长隆国际大马戏",
          details: "全球首创实景式马戏舞台",
          distance: 13.2
        },
        {
          url: "http://localhost:8080/src/assets/image/pic5.jpg",
		  path: "/home",
		  subtitle:'门票',
          title: "广州",
          price: 340,
          sel: 310,
          place: "广州长隆水上乐园",
          details: "全球水上游乐设备最多、最先进的水上乐园",
          distance: 13
        }
	  ],
	   pics2: [
        {
          url: "http://localhost:8080/src/assets/image/pic6.jpg",
		  path: "/home",
		  subtitle:'酒店',
          title: "广州",
          price: 100,
          sel: 95,
          place: "广州长隆旅游度假区",
          details: "世界级旅游王国",
          distance: 13.3
        },
        {
          url: "http://localhost:8080/src/assets/image/pic6.jpg",
		  path: "/home",
		  subtitle:'酒店',
          title: "广州",
          price: 240,
          sel: 210,
          place: "广州长隆野生动物世界",
          details: "亚洲最大的野生动物主题公园",
          distance: 12.6
        },
        {
          url: "http://localhost:8080/src/assets/image/pic6.jpg",
		  path: "/home",
		   subtitle:'酒店',
          title: "广州",
          price: 200,
          sel: 175,
          place: "广州长隆欢乐世界",
          details: "超大型世界顶尖主题游乐园",
          distance: 12.9
        },
        {
          url: "http://localhost:8080/src/assets/image/pic6.jpg",
		  path: "/home",
		   subtitle:'酒店',
          title: "广州",
          price: 350,
          sel: 325,
          place: "广州长隆国际大马戏",
          details: "全球首创实景式马戏舞台",
          distance: 13.2
        },
        {
          url: "http://localhost:8080/src/assets/image/pic6.jpg",
		  path: "/home",
		   subtitle:'酒店',
          title: "广州",
          price: 340,
          sel: 310,
          place: "广州长隆水上乐园",
          details: "全球水上游乐设备最多、最先进的水上乐园",
          distance: 13
        }
	  ],
	  pics3: [
        {
          url: "http://localhost:8080/src/assets/image/pic7.jpg",
		  path: "/home",
		   subtitle:'团购',
          title: "广州",
          price: 100,
          sel: 95,
          place: "广州长隆旅游度假区",
          details: "世界级旅游王国",
          distance: 13.3
        },
        {
          url: "http://localhost:8080/src/assets/image/pic7.jpg",
		  path: "/home",
		  subtitle:'团购',
          title: "广州",
          price: 240,
          sel: 210,
          place: "广州长隆野生动物世界",
          details: "亚洲最大的野生动物主题公园",
          distance: 12.6
        },
        {
          url: "http://localhost:8080/src/assets/image/pic7.jpg",
		  path: "/home",
		  subtitle:'团购',
          title: "广州",
          price: 200,
          sel: 175,
          place: "广州长隆欢乐世界",
          details: "超大型世界顶尖主题游乐园",
          distance: 12.9
        },
        {
          url: "http://localhost:8080/src/assets/image/pic7.jpg",
		  path: "/home",
		  subtitle:'团购',
          title: "广州",
          price: 350,
          sel: 325,
          place: "广州长隆国际大马戏",
          details: "全球首创实景式马戏舞台",
          distance: 13.2
        },
        {
          url: "http://localhost:8080/src/assets/image/pic7.jpg",
		  path: "/home",
		  subtitle:'团购',
          title: "广州",
          price: 340,
          sel: 310,
          place: "广州长隆水上乐园",
          details: "全球水上游乐设备最多、最先进的水上乐园",
          distance: 13
        }
      ]
      
    };
  }
};
</script>