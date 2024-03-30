import { platService } from "../../../services/plat.service";
import { motion } from "framer-motion"
import { useState } from "react";
export default  function PlatAdd() {
    /**
     * Methode d'ajout de new Plat
     */
    const [creatPlat , setCreatedAt] = useState({// recupere tout les name des different imput
        namePlat: '',
        originePlat:'',
        prix:'',
    })

    const onChange =(e) =>{//gere les diff etat de changement 
        setCreatedAt({
            ...creatPlat, //crée une copie des valeur de champs
            [e.target.name] : e.target.value   //pour chanque valeur effectue un changement
        })
    }

    const onSubmit =(e) =>{
        e.preventDefault()//empeche le chargement de la page
        console.log(creatPlat)
        platService.addPlat(creatPlat)
        .then((res )=>{
            console.log(res)
            setCreatedAt({
                namePlat: '',
                originePlat:'',
                prix:'',
            })
        }) 
        .catch(err=>console.log(err))
    }
    return (
    <div>
        <div className="bg-orange-100 text-lg area  border-x-4 border-green-500 font-bold text-center h-auto w-64">
                coltaileAdd </div> <br/>
                <motion.div className="justify-center items-center" initial={{opacity: 0 ,}} animate={{opacity:1 , x: -200}}>

                <form onSubmit={onSubmit}
                 className="bg-blue-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="namePlat">
                NamePlat
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                   value={creatPlat.namePlat}
                   onChange={onChange}
                   name="namePlat" type="text" placeholder="add namePlat..."/>
                </div>

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="originePlat">
                OriginePlat
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                   value={creatPlat.originePlat}
                   onChange={onChange}
                   name="originePlat" type="text"  placeholder="add originePlat..."/>

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prix">
                Prix
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                   value={creatPlat.prix}
                   onChange={onChange}
                   name="prix" type="number" placeholder="add prix.. "/>
                    
                    
                <div className="flex items-center justify-between">
                <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                   Ajouter
                </button>
                </div>
                
            </form>
                </motion.div>

        </div>
    );
}
