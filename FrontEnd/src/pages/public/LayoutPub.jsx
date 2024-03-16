import { Outlet } from "react-router-dom"; //pour lire les composant enfants
import HeaderPub from "../../components/public/HeaderPub";

export default function LayoutPub() { //permet d'atribuer a ses enfant tous composant a son seint
    return <div>
        <div className='bg-gray-100 text-lg area  border-x-4 border-indigo-500 font-bold text-center h-auto '>BackEnd && FrontEnd : &copy;Copyright catechdigital2024@gmail.com</div> <br/>
        <HeaderPub />
        <Outlet/>

            </div>
    
}