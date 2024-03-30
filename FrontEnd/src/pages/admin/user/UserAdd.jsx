import { userService } from "../../../services/user.service";
import { useState } from "react";
import { motion } from "framer-motion"

export default function UserAdd () {

    //Ecoute du changement d'etat
    const [createUser , setCreateUser] = useState({// recupere tout les name des different imput
        name:'',
        age:'',
        sexe: ''
    })
    const onChange =(e)=>{ //gere les diff etat de changement 
        setCreateUser({
            ...createUser, ////crée une copie des valeur de champs
            [e.target.name] : e.target.value  //pour chanque valeur effectue un changement
        })
    }

    const onSubmit = (e ) =>{
        e.preventDefault() //empeche le chargement de la page
        console.log(createUser)
        userService.addUser(createUser)
            .then((res )=>{
                console.log(res)
                setCreateUser({
                    name:'',
                    age:'',
                    sexe :'',
                })
            }) 
            .catch(err=>console.log(err))
    }

    return (
        <div className="">
            add User <br/>

            <motion.div className="justify-center items-center" initial={{opacity: 0 ,}} animate={{opacity:1 , x: -200}}>
            <form onSubmit={onSubmit}
                 className="bg-orange-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                   Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                   value={createUser.name}
                   onChange={onChange}
                   name="name" type="text" placeholder="add name..."/>
                </div>

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                   Age
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                   value={createUser.age}
                   onChange={onChange}
                   name="age" type="number"  placeholder="add age..."/>

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sexe">
                  Sexe
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                   value={createUser.sexe}
                   onChange={onChange}
                   name="sexe" type="text" placeholder="add sexe... "/>
                    
                    
                <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                   Created
                </button>
                </div>
                
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2024 catechdigital2024@gmail.com  .|the cameroon.
            </p>
            </motion.div>
        </div>
    );
}

