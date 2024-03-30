import Axios from "./api.service"

let getAllusers =() =>{ //Api de Affiche All User
    return Axios.get('/users/')
}

let getUsr = (uid) =>{ //Api de Affiche User
    return Axios.get('/users/'+uid)
}

let updateUser = (user) => { //Api de Modification User
    return Axios.put('users/'+user._id , user)
}

let deleUser = (uid) =>{ //Api de Delete one User
    return Axios.delete('users/'+uid)
}

let addUser = (createUser) =>{ //Api de CreateUser
    return Axios.post('users/' , createUser)
} 
export const userService ={
    getAllusers , getUsr , updateUser , deleUser , addUser
}