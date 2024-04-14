import axios from "~/axios"

async function getStatistics1() {
    try{
        return await axios.get("./admin/statistics1")
    }
    catch(err){ return Promise.reject(err) }
}

async function getStatistics3(type) {
    try{
        return await axios.get("./admin/statistics3?type="+type)
    }
    catch(err){ return Promise.reject(err) }
}

async function getStatistics2() {
    try{
        return await axios.get("./admin/statistics2")
    }
    catch(err){ return Promise.reject(err) }
}


export {getStatistics1,getStatistics3,getStatistics2}