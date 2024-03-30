import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { userService } from "../../../services/user.service";


export default function UserEdit (){

    let navigate = useNavigate() //pour l'utiliser on le declare toujours dans une variable
    //Ecoute d'etat
    const [user , setUsers] = useState({// recupere tout les name des different imput
        name:'',
        age: '',
        sexe: ''
    })

    const onChange = (e) =>{//gere les diff etat de changement 
        setUsers({
            ...user, //crée une copie des valeur de champs
            [e.target.name] : e.target.value //pour chanque valeur effectue un changement
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        console.log(user)
            //appelle de API par "api.service" | "account.service.js"
        userService.updateUser(user)
        .then(res =>{
            console.log(res)
            navigate('../index')
        })
        .catch(err =>{
            console.log(err)
        })

    }

 //Metho de Modification 'd'utilisateur
    const flag = useRef(false) // reference de const de netoyage du useEff
    useEffect(() => {
        if(flag.current === false){
            userService.getUsr(uid)
            .then(res =>{ 
            console.log(res.data) //recuper la reponce et affiche les donnée de la reponce
            setUsers(res.data)
        })
            .catch(err => console.log(err))
        }

        return () => flag.current = true //Systeme de nettoyage
            // // eslint-disable-next-line react-hooks/exhautive-deps
    },[]) //[] evite les execution cad tu agit enfontion etat d'une variable

    
   const {uid }= useParams()
    console.log(uid)

    return (
      
        <div className="">
            Edicted User <br/>

            <div className="justify-center items-center">
            <form onSubmit={onSubmit}
                 className="bg-green-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                   Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                   value={user.name}
                   onChange={onChange}
                   name="name" type="text" placeholder="...edit name"/>
                </div>

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                   Age
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                   value={user.age}
                   onChange={onChange}
                   name="age" type="number"  placeholder="...edit age"/>

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sexe">
                  Sexe
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                   value={user.sexe}
                   onChange={onChange}
                   name="sexe" type="text" placeholder="...edit sexe "/>
                    
                    
                <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                    Modifed
                </button>
                </div>
                
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2024 catechdigital2024@gmail.com  .|the cameroon.
            </p>
            </div>
        </div>
    );
}

