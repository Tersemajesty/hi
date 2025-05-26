import axios from "axios"

const url = "https://capitalshop-3its.onrender.com/api/"

export const getAllProduct = async()=>{
    try {
        const res = await axios.get(`${url}products`)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}


