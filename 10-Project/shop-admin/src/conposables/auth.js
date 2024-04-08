import { useCookies } from '@vueuse/integrations/useCookies'
const cookie = useCookies()

function getToken(key){
    return cookie.get(key)
}
function setToken(key,value){
    cookie.set(key,value)
}
function removeToken(key){
    cookie.remove(key)
}

export {getToken,setToken,removeToken}