import SideMenu from "../../components/admin/SideMenu";
import HeaderAdm from "../../components/admin/HeaderAdm";
import { Outlet } from "react-router-dom"; //pour lire les composant enfants

export default function LayoutAdm() {//permet d'atribuer a ses enfant tous composant a son seint
    return (
    <div className="">
        <HeaderAdm />
        <div className="flex">
            <SideMenu />
            <div className="ml-auto ">
            <Outlet /> 
            </div>
        </div>
    </div>
    )
    
}