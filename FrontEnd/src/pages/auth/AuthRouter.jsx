import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Error404 from "../../utils/Error";

export default function AuthRouter ()  {
    return (
        <Routes>
            <Route index element={<Login/>} />
            <Route path="login" element={<Login/>} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

