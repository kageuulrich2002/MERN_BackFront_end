import { Navigate } from "react-router-dom";

export default function AuthGuard( {children} ) { // qui est authentificationRouter
   let logged = false //prend la valeur faux
   
   if(!logged){ //si logged est false sa renvoie icic
    return (<Navigate to ="/auth/login" />)
   }
    return   children //si c'est true sa renvoie a la route definie
    
}