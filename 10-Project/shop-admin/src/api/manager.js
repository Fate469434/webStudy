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

export { login, getinfo }