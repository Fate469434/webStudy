import axios from "~/axios"

async function getImageClassList(page) {
    try{
    return axios.get("/admin/image_class/" + page)
    }
    catch(err){ return Promise.reject(err) }
}

async function createImageClass(data) {
    try{
    return axios.post("/admin/image_class",data)
    }
    catch(err){ return Promise.reject(err) }
}

function updateImageClass(id,data){
    return axios.post("/admin/image_class/"+id,data)
}

function deleteImageClass(id){
    return axios.post(`/admin/image_class/${id}/delete`)
}

export {getImageClassList,createImageClass,updateImageClass,deleteImageClass}