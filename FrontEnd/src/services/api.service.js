import axios from "axios";

const Axios = axios.create({  //methode axios pour creee le lin localhost avec Api
    baseURL: 'http://localhost:3000'
})


/**
 * Intercepteur pour Token
 */
export default Axios