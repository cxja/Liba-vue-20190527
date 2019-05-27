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
</template>
<script>
import "../assets/css/index.css";
export default {
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
}
</script>
