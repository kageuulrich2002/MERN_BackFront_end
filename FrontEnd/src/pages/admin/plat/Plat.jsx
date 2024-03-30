import { platService } from "../../../services/plat.service";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"

export default function Plat () {
/**
 * Methode d'affiche des Plat de la bd
 */
    const [plats, setPlats] = useState([])
    //Methode d'affiche la liste de Plat
    const flag = useRef(false) // reference de const de netoyage du useEff
    useEffect(() =>{
        if(flag.current === false){
            platService.getAllPlat()
                .then(res =>{
                    setPlats(res.data)
                    console.log(res.data)
                })
                .catch(err=>console.log(err))
        }
        return () =>  flag.current = true //Systeme de nettoyage
    }, [])

    return (
        <div>
        <div className="bg-gray-100 text-lg area  border-x-4 border-green-500 font-bold text-center h-auto ">
            Liste de Nos Plat </div><br/>
            <motion.table  initial={{opacity: 0 ,}} animate={{opacity:1 , x: -200}}>
                <thead>
                    <tr>
                        <th className="w-44 bg-blue-500">NamePLat</th>
                        <th className="w-44 bg-gray-200">Origine</th>
                        <th className="w-44 bg-green-700">Prix</th>
                    </tr>
                </thead>

                <tbody>
                   {
                    plats.map(plat => (
                        <tr key={plat._id}>
                            <td className="bg-blue-300"><b>{plat.namePlat}</b></td>
                            <td className="bg-gray-100">{plat.originePlat}</td>
                            <td className="bg-green-500">{plat.prix}. Fcfa</td>
                        </tr>
                    ))
                   }
                </tbody>
            </motion.table>

        </div>
    );
}

