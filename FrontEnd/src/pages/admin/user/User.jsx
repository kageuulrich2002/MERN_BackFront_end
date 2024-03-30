import { Link } from "react-router-dom";
import { userService } from "../../../services/user.service";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"
//import { useNavigate } from "react-router-dom";
export default  function User (){

   // let naviger = useNavigate() //navigation controlé


    const [users, setUsers] =  useState([]) //fution d'ecoute d'affichage de use de la BD

    //Metho d'affiche la liste 'd'utilisateur
    const flag = useRef(false) // reference de const de netoyage du useEff
    useEffect(() => {
        if(flag.current === false){
            userService.getAllusers()
            .then(res =>{ 
              setUsers(res.data)
              console.log(res.data) //recuper la reponce et affiche les donnée de la reponce
          })
            .catch(err => console.log(err))
        }

        return () => flag.current = true //Systeme de nettoyage

    },[]) //[] evite les execution cad tu agit enfontion etat d'une variable



//Fontion de Delete one User
const deleUser = (userId) =>{
    console.log(userId)
    userService.deleUser(userId)
        .then(res => 
            {console.log(res)
            setUsers((current) => current.filter(user => user._id !== userId)) //renvoie le liste avec des Id diff de celui suprime
            }) 
        .catch( err => console.log(err))
}
    // const kud = (userId) => {
    //         console.log()
    //         naviger("../edit/"+userId)
    // }
    return (

        <div className="">
          user liste <br/>
{    /*      <button onClick={() =>kud(204)}
           className=" border-indigo-600">
    Param</button>*/ }
        <motion.table   initial={{opacity: 0 ,}} animate={{opacity:1 , x: 20}}>
            <thead>   
                <tr>
                    <th className="bg-blue-100">***</th>
                    <th className="bg-blue-100">#</th>
                    <th className=" w-44  bg-rose-100">Name</th>
                    <th  className=" bg-blue-100">Age</th>
                    <th  className=" w-44  bg-rose-100">Sexe</th>
                    <th  className=" w-64 bg-blue-100">CreateDate</th>
                    <th className=" w-64  bg-rose-100">UpdateLastDate</th>
                </tr>
            </thead>

            <tbody>
                { 
                users.map( user => (
                      <tr key={user._id}>
                        <td className="bg-red-500 hover:bg-red-700 text-white font-bold  px-2 rounded shadow-sm outline-none focus:outline-ring focus:ring-red-500 focus:ring-opacity-75 h-8"
                            onClick={() => deleUser(user._id)}
                            > X</td>
                        <td ><Link to ={`/admin/user/edit/${user._id}`} style={{color : 'green ',padding:'15px'}}
                            
                        >edit</Link> </td>
                        <td  className=" bg-rose-100"><b>{user.name}</b></td>
                        <td className="bg-blue-100">{user.age}</td>
                        <td className="bg-rose-100">{user.sexe}</td>
                        <td className="bg-blue-100">{user.createdAt}</td>
                        <td className="bg-rose-100">{user.updatedAt}</td>
                    </tr>
                ))
                 }
            </tbody>
        </motion.table>
           
        
        </div>
    );
}
