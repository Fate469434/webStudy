import axios from "~/axios"

async function login(username, password) {
    return await axios.post("./admin/login", { username, password })
}

async function getinfo(username, password) {
    return await axios.post("./admin/getinfo", { username })
}

export { login, getinfo }