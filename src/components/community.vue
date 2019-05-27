<template>
    <div class="community">
        <router-view></router-view>
		<div class="ui-header">
				<span class="user" @click="myself">
				</span>
            <span class="logo_top">篱笆社区</span>
		</div>
        <div class="ui-bar">
            <div class="ui-bar-head">
                <h2 class="ui-bar-head-title">首页</h2>
                <div class="ui-button ui-button-green" @click="post">发言</div>
            </div>
            <div class="ui-bar-content">
                <span v-for="item in contents">
                   <router-link :to="item.path">{{item.title}}</router-link>
                </span>
            </div>
        </div>
        <div class="ui-border-bottom">
            <div class="ui-border-head">
                <h2 class="ui-bar-head-title">常用版块</h2>
                <div class="ui-box-content" @click="allpostings()">全部帖子</div>
            </div>           
        </div>
        <div class="ui-border-body">
               <h2 class="ui-bar-head-title ui-bar-recommend">今日推荐</h2>
          <div class="post" v-for="item in datalist" @click="thistopic(item.postingsId)">
            <p>{{item.postingsTitle}}</p>
            <span class="user-name">{{item.userName}}</span>
            <span class="postdate">{{item.postingDate}}</span>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      datalist:[],
      contents: [
        {
          path: "/home",
          title: "房产"
        },
        {
          path: "/home",
          title: "装修"
        },
        {
          path: "/home",
          title: "结婚"
        },
        {
          path: "/home",
          title: "育儿"
        },
        {
          path: "/home",
          title: "旅游"
        },
        {
          path: "/home",
          title: "时尚丽人"
        },
        {
          path: "/home",
          title: "闲聊"
        },
        {
          path: "/home",
          title: "吃喝玩乐"
        },
        {
          path: "/home",
          title: "情感世界"
        },
        {
          path: "/home",
          title: "公益组织"
        },
        {
          path: "/home",
          title: "找装修"
        },
        {
          path: "/home",
          title: "找建材"
        }
      ]
    };
  },
  created:function(){
    this.showdata()
  },
  methods: {
    myself(){
			if(localStorage.getItem('userName')){
				 this.$router.push("/my");
			}
			else{
				this.$router.push("/login");
			}
		},
    post() {
      if(localStorage.getItem('userName')){
        this.$router.push("/newtopic")
      }else{
        this.$message({
                message:"请先登录",
                type: "warning"
        });
      }
    },
    showdata(){
      this.$axios({
          method: "get",
          url: "/liba/getPostingsInfoAll"   
    })
    .then(res=>{
      console.log(res.data)
      for(var i=0;i<res.data.length;i++){
      console.log('遍历',res.data[i].postingsTitle)
      this.datalist.push({
        postingsTitle:res.data[i].postingsTitle,
        postingsContent:res.data[i].postingsContent,
        userName:res.data[i].userName,
        postingsId:res.data[i].postingsId,
        postingDate:res.data[i].postingDate
        })
      }
    })
    .catch(function(error) {
      console.log(error);
    });    
  },
  thistopic(postingsId){
    this.$router.push({path:'/thistopic',query:{postingsId:postingsId}})
  },
  allpostings(){
    this.$router.push("/topic")
  }
}
}
</script>
<style>
.ui-bar,
.ui-border-bottom,
.ui-border-body {
  position: relative;
  z-index: 10;
  padding: 15px;
  background-color: #f3f3ff;
}
.ui-bar-head,
.ui-border-head,
.ui-border-body {
  text-align: left;
  margin-bottom: 8px;
  overflow: hidden;
}
.ui-bar-head-title {
  float: left;
  color: #444;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 15px 0;
}

.ui-button {
  float: right;
  line-height: 23px;
  border: 2px;
  cursor: pointer;
}

.ui-button-green {
  background: #82bb0f;
  padding: 0 18px;
  color: #fff;
  font-size: 16px;
}
.ui-bar-content,
.ui-border-body {
  overflow: hidden;
}
.ui-bar-content a,
.ui-box-content {
  margin-right: 15px;
  float: left;
  font-size: 16px;
  line-height: 1.56;
  color: #666;
}

.ui-border-bottom,
.ui-border-body {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}

.ui-box-content {
  clear: both;
}

.post{
  text-align: left;
  padding: 10px 5px 5px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  line-height: 1.56;
  color: #666;
  position: relative;
  height: 63px;
}

.post:nth-of-type(1){
  padding-top: 25px;
  
}
.user-name{
  position: absolute;
  width: 60px;
  float: right;
  font-size: 12px;
  bottom: 2px;
  right: 0px;
}
.postdate{
  position: absolute;
  width: 60px;
  font-size: 12px;
  bottom: 2px;
  left:5px;

}
</style>

