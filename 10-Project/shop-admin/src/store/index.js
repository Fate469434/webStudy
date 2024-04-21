import { defineStore } from 'pinia'
import { getinfo } from '../api/manager'
import { removeToken, setToken } from '../composables/auth';
import { login } from '../api/manager';

const myStore = defineStore('myStore', {
  state() {
    return {
      isHasUserInfo:false,
      user: {},
      // 侧边栏宽度
      asideWidth: "250px",
      menus:[],
      ruleNames:[]
    }
  },
  getters: {},
  actions: {
    // 登录
    async user_login(username, password) {
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
    async get_userinfo() {
      try {
        const userdata = await getinfo()
        // userdata.menus[0].child[0].frontpath = '/index'
        this.user = userdata
        // this.menus = userdata.menus

        this.menus = userdata.menus.filter((item)=>{return item.name!="分销模块"})

        this.ruleNames = userdata.ruleNames
        this.isHasUserInfo = true
        return Promise.resolve(userdata)
      }
      catch (err) { console.log(err); }
    },

    // 退出登录，清除用户数据
    user_logout() {
      removeToken()
      this.user = {}
    },
    // 展开和收缩侧边栏
    handleAsideWidth() {
      this.asideWidth = this.asideWidth == "250px" ? "64px" : "250px"
    }

  }


})

export { myStore }