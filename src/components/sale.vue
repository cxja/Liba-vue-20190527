<template>
    <div id="sale">
       <router-view></router-view>
		<div class="ui-header">
				<span class="user" @click="myself">
				</span>
            <span class="logo_top">篱笆建材</span>
		</div>
        <mt-swipe :auto="4000">
			<mt-swipe-item>
				<img src="../assets/image/spic1.png" alt="">
			</mt-swipe-item>
		</mt-swipe>
        <div class="tab">
            <ul>
                <router-link to='/home'>
                <li class="icon-build">
                    <img src="../assets/image/icon_building_sale.png" alt="">
                    <span>建材促销</span>    
                </li>
                </router-link>
                <router-link to="/home">
                    <li class="icon-decorate">
                    <img src="../assets/image/icon_decorate_sale.png" alt="">
                    <span>装修活动</span>
                </li>
                </router-link>
            </ul>
        </div>
        <div class="notice">
            <div class="notice-title" @click="change">
                <i></i>
                最新动态
            </div>
            <div class="notice-content">
                <ul>
                    <li v-for="item in content">
                    <span>{{item.num}}</span>
                    {{item.txt}}
                </li>
                </ul>
            </div>
        </div>
        <div class="limit">
            <div class="limt-title">
                <i class="icon-left">                  
                </i>
                <span>建材促销</span>
                <i class="icon-right"></i>
            </div>
        </div>
        <div class="classify-nav">
            <ul>
                <li v-for="item in limits">
                    {{item.pros}}
                </li>
            </ul>
        </div>
        <div class="show-content">
            <ul class="show-title">
                <li v-for="item in show">
                    <img :src="item.url" alt="">                    
                    <div class="sub-title">
                        {{item.title}}
                    </div>
                    <div class="show-time">
                        <div class="title">
                        </div>
                        <div class="time">
                            剩余时间
                            <!-- <span v-for="i in showtime"> -->
                                {{item.day}}天
                                {{item.hour}}时
                                {{item.min}}分
                                {{item.sec}}秒
                            <!-- </span> -->
                        </div>
                         <span>
                                已报名{{item.num}}人
                        </span>
                    </div>
                </li>
            </ul>
        </div>
         <div class="limit">
            <div class="limt-title">
                <i class="icon-left">                  
                </i>
                <span>装修活动</span>
                <i class="icon-right"></i>
            </div>
        </div>
        <div class="classify-nav">
            <ul>
                <li v-for="item in limits">
                    {{item.pros}}
                </li>
            </ul>
        </div>
        <div class="show-content">
            <ul class="show-title">
                <li v-for="item in show">
                    <img :src="item.url" alt="">                    
                    <div class="sub-title">
                        {{item.title}}
                    </div>
                    <div class="show-time">
                        <div class="title">
                        </div>
                        <div class="time">
                            剩余时间
                            <!-- <span v-for="i in showtime"> -->
                                {{item.day}}天
                                {{item.hour}}时
                                {{item.min}}分
                                {{item.sec}}秒
                            <!-- </span> -->
                        </div>
                         <span>
                                已报名{{item.num}}人
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        
        <div class="footer-more"></div>
    </div>
</template>

<script>
import "../assets/css/sale.css";

export default {
     methods:{
         myself(){
			if(localStorage.getItem('userName')){
				 this.$router.push("/my");
			}
			else{
				this.$router.push("/login");
			}
		},
            change:function(){
                console.log('hi')
            }
        },
  data() {
    
    return {
       
      content: [
        {
          num: "132*****183",
          txt: "11分钟前报名参加了橱柜的促销活动"
        },
        {
          num: "132*****183",
          txt: "11分钟前报名参加了橱柜的促销活动"
        },
        {
          num: "132*****183",
          txt: "11分钟前报名参加了橱柜的促销活动"
        },
        {
          num: "132*****183",
          txt: "11分钟前报名参加了橱柜的促销活动"
        },
        {
          num: "132*****183",
          txt: "11分钟前报名参加了橱柜的促销活动"
        }
      ],
      limits: [
        {
          pros: "中央空调"
        },
        {
          pros: "阳台窗"
        },
        {
          pros: "地暖"
        },
        {
          pros: "家具"
        },
        {
          pros: "橱柜"
        },
        {
          pros: "暖气片"
        },
        {
          pros: "更多>>"
        }
      ],
      show: [
        {
          url: "http://localhost:8080/src/assets/image/spic01.png",
          title: "梦想空间 定制卫浴",
          day: 16,
          hour: 1,
          min: 49,
          sec: 38,
          num:1
        },
        {
          url: "http://localhost:8080/src/assets/image/spic02.png",
          title: "梦想空间 定制卫浴",
          day: 16,
          hour: 1,
          min: 48,
          sec: 38,
          num:2
        },
        {
          url: "http://localhost:8080/src/assets/image/spic03.png",
          title: "梦想空间 定制卫浴",
          day: 16,
          hour: 1,
          min: 48,
          sec: 38,
          num:3
        },
        {
          url: "http://localhost:8080/src/assets/image/spic04.png",
          title: "梦想空间 定制卫浴",
          day: 16,
          hour: 1,
          min: 47,
          sec: 38,
          num:2
        }
      ]
    };
  }
};
</script>

