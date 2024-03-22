import Axios from "./api.service"

let getAllusers =() =>{
    return Axios.get('/users/')
}

let getUsr = (uid) =>{
    return Axios.get('/users/'+uid)
}

export const userService ={
    getAllusers , getUsr
}