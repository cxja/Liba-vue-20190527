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
                <span class="logo_top logo_top_2">个人中心</span>
		</div>
        <div class="ui-body">
            <span class="ui-body-head">个人中心</span>
            <div class="ui-body-content">
                <span class="ui-body-toux">
                    <!-- <img src="../assets/image/d_head.png" alt=""> -->
                </span>
                <div class="username">
                    {{username}}
                    <div class="state">状态:已登录</div>
                </div>              
            </div>
        </div>
        <div class="mypost" @click="mytopic">
            我的发言
        </div>
        <div>
            <el-button type="info" class="pass">修改密码</el-button>

        </div>
        <div>
            <el-button type="info" @click="loginout">退出登录</el-button>
        </div>
     </div>
</template>
<script>
export default {
    data(){
        return{
            username:localStorage.getItem('userName')
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
        },
        mytopic(){
            this.$router.push("/mytopic")
        },
        loginout(){
            localStorage.clear('userName')
            this.$router.push("/login")
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
.ui-body{
    text-align: left;
    padding:15px;
}
.newyopic{
    text-align: left;
}
.ui-body-head{
    display: block;
    margin-bottom: 15px;
    line-height: 17px;
    color: #333;
    font-size: 17px;
    font-weight: 700;
}
.username{
    float: left;
    font-size: 17px;
    line-height: 17px;
    font-weight: 300;
    margin-left: 10px;
}
.mypost{
    margin-top: 10px;
    margin-bottom: 30px;
    clear: both;
    padding: 15px 0;
    color: #66B;
    background: #E9E9FF;
    font-size: 16px;
}
.state{
    margin-top: 19px;
    margin-bottom: 30px;
    color: #999;
    font-size: 14px;
}
.ui-body-toux{
    display: block;
    float: left;
    background: url('../assets/image/d_head.png') 0 0;
    background-size: 100%;
    width: 55px;
    height: 55px;
}
.el-button--info {
    color: #FFF;
    background-color: #ccc;
    border-color: #909399;
}

.pass{
    margin-bottom: 10px;
}
</style>


