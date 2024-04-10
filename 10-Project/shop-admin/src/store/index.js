import { defineStore} from 'pinia'
import { getinfo } from '../api/manager'
import { removeToken, setToken } from '../conposables/auth';
import { login } from '../api/manager';

const myStore = defineStore('myStore',{
  state(){
    return {
        user:{}
    }
  },
  getters:{},
  actions:{
    // 登录
    async user_login(username,password){
        try {
            const res = await login(username, password)
            // 存储token
            setToken(res.token)
            return Promise.resolve('ok')
        }
        catch (err) {
            return Promise.reject(err)
         }
    },

    // 根据token获取用户信息
    async get_userinfo(){
        try {
            const userdata = await getinfo()
            this.user = userdata
        }
        catch (err) { console.log(err);}
    },

    // 退出登录，清除用户数据
    user_logout(){
      removeToken()
      this.user = {}
    }

  }


})

export  {myStore}