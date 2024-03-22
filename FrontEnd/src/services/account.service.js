//dif fontion pour gerer les token et fontion du navigateur

import Axios from "./api.service";

let login = (credential) =>{ //funtion d'authentification et connexion
    return Axios.post('/admin/login' , credential) //synth d'appelle d'api avec Axios
}

function saveToken(secretKey, token) { // Stocker le jeton dans le stockage local
    localStorage.setItem('token', token);
    console.log('Jeton sauvegardé dans le navigateur');  
    return token;
  }

  
let logout = () =>{ //Mteh de deconnexion
  localStorage.removeItem('token') 
}

function isLogged (){ // Metho pour savoir si on n'est logged ou pas
    let token = localStorage.getItem('token')
    return !!token //transforme token en booleen de sorte que si y'a pas de valeur c'est "False" si ya de valeur c'est "True"

}

export const accoutService = {
    login, saveToken , logout , isLogged
}