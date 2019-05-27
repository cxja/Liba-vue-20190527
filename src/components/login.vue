<template>
    <div id="login">
        <router-view></router-view>
        <div class="logo">
            <h1>
                <img src="../assets/image/liba_logo.png" alt="">
            </h1>
        </div>
        <div class="wrapper">
            <div class="wrapper-main">
                <form action="login" method="post" onsubmit="return check()">
                    <div  class="login-form">
                        <div class="login-user">
                            <input type="text" class="login-input" placeholder="用户名" name="user" v-model="username">
                        </div>
                        <div class="login-pass">
                            <input type="password" class="login-input"  placeholder="密码" name="pass" v-model="password">
                        </div>
                    </div>
                    <div class="wrapper-button">
                        <input value="登录" class="login-btn" @click="login">
                    </div>
                    <div class="wrapper-after">
                        <router-link to='/register' class="register">立即注册</router-link>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
    
</template>
<script>
import "../assets/css/login.css";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    con(value) {
      console.log(value);
    },
    login() {
      if(localStorage.getItem('userName')){
           this.$message({
          message: "您已是登录状态，请勿重复登陆",
          type: "warning"
        });
      } 
      else if (this.username != "" && this.password != "") {
        this.$axios({
          method: "post",
          url: "/liba/login",
          data: {
            userName: this.username,
            // userPass: this.password
          }
        })
          .then(res => {
            console.log(res.data);
            if (res.data != ""&&res.data.userName==this.username&&res.data.userPass==this.password) {
              this.$store.commit("GET_USER", res.data.userId);
              this.$message({
                message: "登录成功",
                type: "success"
              });
              localStorage.setItem('userName', res.data.userName)
              localStorage.setItem('userId', res.data.userId)
              this.$router.push("/my");
            }
            else if(res.data.userName!=this.username||res.data.userPass!=this.password){
              this.$message({
                message:"账号或密码不正确",
                type:"warning"
              })
            }
            else if (res.data == "") {
              this.$message({
                message: "该用户不存在，请先进行注册",
                type: "warning"
              });
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      else {
        this.$message({
          message: "用户名或密码不能为空",
          type: "warning"
        });
      }
    }
  }
};
</script>

<style>
.login{
  height: 800px;
}
</style>
