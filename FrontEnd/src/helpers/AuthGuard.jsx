import { Navigate } from "react-router-dom";
import { accoutService } from "../services/account.service";


export default function AuthGuard( { children } ) { // qui est authentificationRouter
//    let logged =false//prend la valeur faux
   
   if(!accoutService.isLogged()){ //si logged est false sa renvoie icic
    return (<Navigate to ="/auth/login" />
    )
    
   }

    return   children //si c'est true sa renvoie a la route definie
    
}