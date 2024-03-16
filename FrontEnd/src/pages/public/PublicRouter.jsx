import { Route, Routes } from "react-router-dom";
import LayoutPub from "./LayoutPub";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import Error404 from "../../utils/Error";

export default function PublicRouter() {
    return <>
          <Routes>
            <Route element={<LayoutPub />}>{/* acces au enfant : /enfant */}
            <Route index element={<Home />} />{/* pour permettre d'afficher <Home/> par default*/}
            <Route path='/home' element={<Home/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/contact' element={<Contact/>} />
            </Route>
           <Route path="*" element={<Error404/>}/>
        </Routes>
    
    </>
    
}