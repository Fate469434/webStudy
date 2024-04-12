import axios from "~/axios"

async function getStatistics1() {
    try{
        return await axios.get("./admin/statistics1")
    }
    catch(err){ return Promise.reject(err) }
}

export {getStatistics1}