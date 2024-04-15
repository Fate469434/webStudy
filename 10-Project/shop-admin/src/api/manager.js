import axios from "~/axios"

async function login(username, password) {
    try{
        return await axios.post("./admin/login", { username, password })
    }
    catch(err){ return Promise.reject(err) }
}

async function getinfo() {
    try{
        return await axios.post("./admin/getinfo")
    }
    catch(err){ return Promise.reject(err) }
}

async function logout() {
    try{
        return await axios.post("./admin/logout")
    }
    catch(err){return Promise.reject(err)}
}

async function updatepassword(data){
    try{
        return await axios.post("./admin/updatepassword",data)
    }
    catch(err){return Promise.reject(err)}
}


export function getManagerList(page,query = {}){
    let q = []
    for (const key in query) {
        if(query[key]){
            q.push(`${key}=${encodeURIComponent(query[key])}`)
        }
    }
    let r = q.join("&")
    r = r ? ("?"+r) : ""
    console.log(`/admin/manager/${page}${r}`);
    return axios.get(`/admin/manager/${page}${r}`)
}

export function updateManagerStatus(id,status){
    return axios.post(`/admin/manager/${id}/update_status`,{
        status
    })
}


export function createManager(data){
    return axios.post(`/admin/manager`,data)
}

export function updateManager(id,data){
    return axios.post(`/admin/manager/${id}`,data)
}

export function deleteManager(id){
    return axios.post(`/admin/manager/${id}/delete`)
}

export { login, getinfo, logout ,updatepassword}