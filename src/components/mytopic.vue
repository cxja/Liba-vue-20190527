<template>
    <div class="mytopic">
        <router-view></router-view>
		<div class="ui-header">
				<span class="user" @click="myself">
				</span>
            <router-link to='/home'>
            <span class="logo_top">首页</span>
                </router-link>
                <span class="logo_top logo_top_1"> > </span>
                <span class="logo_top logo_top_2">我的发言</span>
		</div>
        <div class="ui-content">
            <div class="ui-bar" @click="back"> < 返回</div>
        </div>
        <div class="post" v-for="item in datalist" @click="thistopic(item.postingsId)">
            <p>{{item.postingsTitle}}</p>
            <span class="user-name">{{item.userName}}</span>
            <span class="postdate">{{item.postingDate}}</span>
        </div>
        <div class="footer-more"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            datalist:[]
        }
    },
    mounted(){
        this.$axios({
          method: "post",
          url: "/liba/getMyPostings",
          data:{
              userId:localStorage.getItem("userId")
          }   
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
    methods:{
         myself(){
			if(localStorage.getItem('userName')){
				 this.$router.push("/my");
			}
			else{
				this.$router.push("/login");
			}
        },
        back(){
            this.$router.push("/newtopic");
        },
        thistopic(postingsId){
        this.$router.push({path:'/thistopic',query:{postingsId:postingsId}})
        }
    }
    
}
</script>
<style>
.logo_top_1{
    margin-left: 54px;
}
.logo_top_2{
    margin-left: 77px;
}
.ui-content{
    width: 100%;
    text-align: left;
}
.ui-bar{
    color:#66b;
    position: relative;
    z-index: 10;
    padding: 15px;
    background-color: #f3f3ff;
}
.post{
  text-align: left;
    padding: 10px 15px 17px;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    line-height: 1.3em;
    position: relative;
    height: 63px;
    background: #fff;
}
.postdate{
  position: absolute;
  width: 60px;
  font-size: 12px;
  bottom: 2px;
  left:5px;

}
</style>
