import { useCookies } from '@vueuse/integrations/useCookies'
const cookie = useCookies()

function getToken(){
    return cookie.get("login-token")
}
function setToken(value){
    cookie.set("login-token",value)
}
function removeToken(){
    cookie.remove("login-token")
}

export {getToken,setToken,removeToken}