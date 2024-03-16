import { Route, Routes } from "react-router-dom";
import LayoutAdm from "./LayoutAdm";
import Dashbord from "./Dashbord";
import Error404 from "../../utils/Error";
import User from "./user/User";
import UserAdd from "./user/UserAdd";
import UserEdit from "./user/UserEdit";
import Cocktail from "./cocktail/Cocktail";
import CocktailEdit from "./cocktail/CocktailEdit";

export default function AdminRouter  (){
    return (
        <>
            <Routes>
                <Route element={<LayoutAdm />}>{/*acces au enfant : /admin/enfant*/}
                <Route index element={<Dashbord />} />
                    <Route path="dashboard" element={<Dashbord />} />
                        <Route path="user">
                            <Route path="index" element={<User/>}/>
                            <Route path="edit/:uid" element={<UserEdit/>}/>
                            <Route path="add" element={<UserAdd/>}/>
                        </Route>

                        <Route path="cocktail">
                            <Route path="index" element={<Cocktail/>}/>
                            <Route path="edit" element={<CocktailEdit/>}/>
                        </Route>
                </Route>
                <Route path="*" element={<Error404 />} />

            </Routes>
        </>
    );
}

