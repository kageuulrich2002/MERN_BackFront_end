import Axios  from "./api.service"


let getAllPlat =() =>{ //Api de Affiche All Plat
    return Axios.get('/plats/')
}
let addPlat = (createPlat) =>{ //Api de CreateUser
    return Axios.post('/plats/' , createPlat)
} 

export const platService ={
    getAllPlat, addPlat
}