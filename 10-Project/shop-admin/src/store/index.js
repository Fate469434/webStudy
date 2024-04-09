import { defineStore} from 'pinia'
import { getinfo } from '../api/manager'
import { setToken } from '../conposables/auth';
import { notify } from '../conposables/util';
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
            setToken("login_token", res.token)
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
    }
  }
})

export  {myStore}