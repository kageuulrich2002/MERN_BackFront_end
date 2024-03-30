import axios from "axios";
import { accoutService } from "./account.service";

const Axios = axios.create({  //methode axios pour creee le lin localhost avec Api
    baseURL: 'http://localhost:3000'
})


/**
 * Intercepteur pour Token
 */

Axios.interceptors.request.use(request =>{

    if(accoutService.isLogged()){ //si nous sommes logged..!!
            request.headers.Authorization = 'Bearer' + accoutService.getToken() //dans l'entete de la requette j'injecte mon Token
    }
    return request
})

export default Axios