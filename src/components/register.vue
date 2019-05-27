<template>
    <div id="register">
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
                        <div>
                            <input type="password" class="login-input line-top"  placeholder="请确认密码" name="passagain" v-model="passwordagain">
                        </div>
                    </div>
                    <div class="wrapper-button">
                        <input value="注册" class="login-btn" @click="register">
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
      password: "",
      passwordagain: ""
    };
  },
  methods: {
    register() {
      console.log(this.password);
      var myDate = new Date();
      var date=myDate.toLocaleDateString(); 
      if (this.username != "" && this.password != "") {
        if (this.password == this.passwordagain) {
          this.$axios({
            method: "post",
            url: "/liba/register",
            data: {
              userName: this.username,
              userPass: this.password,
              lastDate:date
            }
          })
            .then(res => {
              this.$message({
                message: "注册成功，请登录",
                type: "success"
              });
              this.$router.push("/login");
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          this.$message.error("两次密码不一致，请重新输入");
        }
      } else {
        this.$message({
          message: "用户名或密码不能为空",
          type: "warning"
        });
      }
    }
  }
};
</script>

