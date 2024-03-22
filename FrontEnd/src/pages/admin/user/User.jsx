import { userService } from "../../../services/user.service";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default  function User (){

    let naviger = useNavigate() //navigation controlé

    //Metho d'affiche la liste 'd'utilisateur
    useEffect(() => {
        userService.getAllusers()
              .then(res => console.log(res.date))
              .catch(err => console.log(err))

    },[]) //[] evite les execution cad tu agit enfontion etat d'une variable


    const kud = (userId) => {
            console.log()
            naviger("../edit/"+userId)
    }
    return (

        <div className="">
          user liste <br/>
          <button onClick={() =>kud(204)}
           className=" border-indigo-600">
            Param</button> 
            
        </div>
    );
}
