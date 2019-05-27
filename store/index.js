import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

//初始化时用sesstionStorage.getItem('token')，这样刷新页面无需重新登录
const state={
    userId:window.sessionStorage.getItem('userId'),
    token:window.sessionStorage.getItem('token')
}

const mutations={
//将token保存到sesstionStirage里，token表示登录状态
    SET_TOKEN:(state,data)=>{
        state.token=data
        window.sessionStorage.setItem('token',data)
    },

//获取用户Id   
    GET_USER:(state,data)=>{
        state.userId=data
        window.sessionStorage.setItem('userId',data)
    },

//登出时要清除token    
    LOGOUT:(state)=>{
        state.token=null
        state.userId=null
        window.sessionStorage.removeItem('token')
        window.sessionStorage.removeItem('userId')
    }
}

const actions={}

export default new Vuex.Store({
    state,
    mutations,
    actions
})