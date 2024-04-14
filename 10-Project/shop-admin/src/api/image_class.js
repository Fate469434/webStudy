import axios from "~/axios"

async function getImageClassList(page) {
    try{
    return axios.get("/admin/image_class/" + page)
    }
    catch(err){ return Promise.reject(err) }
}

export {getImageClassList}