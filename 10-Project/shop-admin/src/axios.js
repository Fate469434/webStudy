import axios from "axios"
import { getToken } from "./composables/auth"
import { notify } from "./composables/util"

const service = axios.create({
    baseURL: "/api"
})

service.interceptors.request.use(request => {
    // 在发送请求前要做的事儿, 自动带上cookie, 如果有的话
    const token = getToken()
    if (token) {
        request.headers["token"] = token
    }
    return request
}, err => {
    // 在请求错误时要做的事儿
    // 该返回的数据则是axios.catch(err)中接收的数据
    return Promise.reject(err)
})

service.interceptors.response.use(response => {
    // 请求成功对响应数据做处理
    // 该返回的数据则是axios.then(res)中接收的数据
    return response.data.data
}, err => {
    // 在请求错误时要做的事儿
    // 该返回的数据则是axios.catch(err)中接收的数据
    const msg = err.response.data.msg || "请求失败"
    if(msg.includes("仅供演示，禁止操作"))
    notify("仅供演示，禁止操作原有数据，或许你可以尝试新增数据并修改或删除它", "error")
    return Promise.reject(err)
})

export default service