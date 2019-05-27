<template>
    <div class="thistopic">
        <router-view></router-view>
		<div class="ui-header">
				<span class="user" @click="myself">
				</span>
            <router-link to='/home'>
            <span class="logo_top">首页</span>
                </router-link>
                <span class="logo_top logo_top_1"> > </span>
                <span class="logo_top logo_top_2">装修讨论</span>
		</div>
        <div class="ui-content">
            <div class="ui-bar" @click="back"> < 返回</div>
        </div>
        <div class="topic_title"  v-for="item in datalist">
            <h2 class="thistopic_title">
                {{item.postingsTitle}}
            </h2>
        </div>
        <div class="topic_content" v-for="item in datalist">
            <span class="thistopic_username">
                楼主：{{item.userName}}
            </span>
            <span class="thistopic_time">
                发帖时间：{{item.postingDate}}
            </span>
            <div class="thistopic_context">
                {{item.postingsContent}}
            </div>
        </div>
        <div class="postcomment">
            <textarea class="comment_content" placeholder="说点什么吧.." v-model="comment"></textarea>
            <el-button type="success" @click="postcomment">发表评论</el-button>
        </div>
        <div class="topic_comment" v-for="item in comlist">
            <div class="thistopic_comment">
                <span class="floor">{{item.floor}}楼</span>
                <span class="thiscomment_user">{{item.userName}}</span>
                <span class="postdate">{{item.commentDate}}</span>
                <p class="commentContent">{{item.commentContent}}
                    <span class="delete" v-if="item.userId==userId"@click="deletecomment(item.commentId,userId)">删除</span>
                </p>
            </div>
        </div>
		<div class="footer-more"></div>
     </div>
</template>
<script>
import "../assets/css/index.css";
export default {
    data(){
        return{
           datalist:[],
           comlist:[],
           comment:'',
           postingsId:this.$route.query.postingsId,
           userName:localStorage.getItem('userName'),
           userId:localStorage.getItem('userId'),
           postingsTitle:''
        } 
    },
    created:function(){
        console.log(localStorage.getItem('userId'))
         this.postingdata()
         this.comdata()
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
            this.$router.push("/community");
        },
        postingdata(){
             this.$axios({
            method: "get",
            url: `/liba/getPostingsInfoOne?postingsId=${this.$route.query.postingsId}`
        })
        .then(res=>{
            this.datalist.push({
                postingsTitle:res.data[0].postingsTitle,
                postingsContent:res.data[0].postingsContent,
                userName:res.data[0].userName,
                postingsId:res.data[0].postingsId,
                postingDate:res.data[0].postingDate
                })
                    
        })
        .catch(function(error) {
        console.log(error);
        }); 
        },
        comdata(){
            this.$axios({
            method: "get",
            url:`/liba/getComment?postingsId=${this.$route.query.postingsId}`
        })
        .then(res=>{
            for(var i=0;i<res.data.length;i++){
            console.log('遍历',res.data[i].commentId)
            this.comlist.push({
                commentContent:res.data[i].commentContent,
                userName:res.data[i].userName,
                commentDate:res.data[i].commentDate,
                commentId:res.data[i].commentId,
                userId:res.data[i].userId,
                floor:i+1
                })
         }
                    
        })
        .catch(function(error) {
        console.log(error);
        }); 
        },
        postcomment(){
            var myDate = new Date();
            var date=myDate.toLocaleDateString(); 
            console.log(this.datalist[0])
            if(this.comment !=""){
            this.$axios({
                    method: "post",
                    url: "/liba/insertComment",
                    data: {
                    postingsId:this.postingsId,
                    commentContent: this.comment,
                    userName: this.userName,
                    userId:this.userId,
                    commentDate: date,
                    postingsTitle:this.datalist[0].postingsTitle
                    }
                }).then(res => {
                    this.$message({
                        message: "发布成功",
                        type: "success"
                        
                    });
                    this.datalist=[]
                    this.comlist=[]
                    this.comment=''
                    this.postingdata()
                    this.comdata()

                    })
                    .catch(function(error) {
                    console.log(error);
                    });
                }else if(this.userId!=''){
                    this.$message({
                        message:"请先登录",
                        type:"warning"
                    })
                }
               
        
        },
        deletecomment(commentId,userId){
            this.$axios({
                method: "post",
                    url: "/liba/deleteComment",
                    data:{
                        commentId:commentId,
                        userId:userId
                    }
            })
            .then(res => {
                    this.$message({
                        message: "删除成功",
                        type: "success"                       
                    });
                    this.datalist=[]
                    this.comlist=[]
                    this.comment=''
                    this.postingdata()
                    this.comdata()
            })
            .catch(function(error) {
                    console.log(error);
                    })
            
        }
    }
}
</script>
<style>
body{
    background: #fff;
}
.ui-content{
    width: 100%;
    text-align: left;
}
.ui-bar{
    color:#66b;
}
.logo_top_1{
    margin-left: 54px;
}
.logo_top_2{
    margin-left: 77px;
}
.topic_title{
    padding:15px;
}
.thistopic_title{
    text-align: left;
    color: #333;
    font-weight: bolder;
    font-size: 14px;
    border-bottom: 1px solid #333;
    padding-bottom: 15px;
}

.topic_content{
    padding: 0 15px 60px;
    text-align: left;
    line-height: 1.5em;
    border-bottom: 1px solid #333;

}
.thistopic_username{
    color: #aaa;
}
.thistopic_time{
    float:right;
    color: #aaa;
}
.thistopic_context{
    margin-top: 15px;
}
.topic_comment{
    padding: 20px 15px;
    text-align: left;
    color: #aaa;
}
.comment_content{
    width:100%;
    height: 66px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
}
.commentContent{
    color: #333;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
}
.postdate{
    float: right;
}
.postcomment{
    padding: 15px;
    text-align: left;
}
.delete{
    float: right;
}
</style>

