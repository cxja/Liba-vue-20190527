<template>
  <div class="newtopic">
        <router-view></router-view>
		<div class="ui-header">
				<span class="user" @click="myself">
				</span>
      <router-link to='/home'>
        <span class="logo_top">首页</span>
    </router-link>
    <span class="logo_top logo_top_1"> > </span>

		</div>
  <div class="ui-body">
      <div class="ui-body-content">
        <form action="newtopic" method="post">
         <span>发言</span>
         <div class="ui-operate">
           <input id="topic-theme" type="text" placeholder="请输入主题" v-model="postingsTitle">    
           <div id="topic-title"></div>
           <div id="topic-content">
              <p v-model="postingsContent"></p>
           </div>
         </div>
         <el-button id="success-button" type="success" @click="post">发布</el-button>
        </form>
    </div>
  </div>
  </div>
</template>
<script>
import "../assets/css/index.css";
import E from 'wangeditor';
export default {
  data() {
   return{
     postingsTitle:'',
     postingsContent:'',
     userId:localStorage.getItem('userId')
   }
  },
  mounted(){
    var editor=new E('#topic-title','#topic-content')
    editor.customConfig.onchange = (text) => {
      this.postingsContent = editor.txt.text()
    }
    editor.customConfig.menus = [
        'head',
        'bold',
        'italic',
        'underline',
        'fontSize',
        'emoticon'
    ]
    editor.create()
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
    post(){
      var myDate = new Date();
      var date=myDate.toLocaleDateString(); 
      console.log(date)
      if(this. postingsTitle!=""&&this.postingsContent!=""){
      this.$axios({
            method: "post",
            url: "/liba/insertPost",
            data: {
              postingsTitle: this.postingsTitle,
              postingsContent: this.postingsContent,
              userId:this.userId,
              postingDate: date
            }
          }).then(res => {
              this.$message({
                message: "发布成功",
                type: "success"
              });
              this.$router.push("/community");
                  console.log(this.editor.txt.text())

            })
            .catch(function(error) {
              console.log(error);
            });
    }else{
      this.$message({
          message: "帖子主题或帖子内容不能为空",
          type: "warning"
        });
    }
    }
  }
};
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

.ui-body{
  padding: 15px;
}

#form_title{
  margin-bottom: 10px;
    color: #444;
    font-weight: 700;
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word;
}

form{
  text-align: left;
  font-weight: bolder;
  color: #444;
}

.el-dropdown-link {
    cursor: pointer;
    color: #444;
    padding-top:15px;
  }
.el-icon-arrow-down {
    font-size: 12px;
  }
#topic-theme{
    width: 100%;
    height: 35px;
    border: 1px solid #ccc;
    border-radius: 2px;
    margin-top: 10px;
  }
#topic-content{
    width: 100%;
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 2px;
    margin-top: 10px;

  }

#success-button{
  margin-top: 10px;
  text-align: center;
}

.logo_top_2{
    margin-left: 77px;
}

.w-e-text{
  background: #fff;
}
</style>

