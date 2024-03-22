import { accoutService } from "../../services/account.service";
import { useNavigate } from "react-router-dom";

export default function HeaderAdm() {
    let navigate = useNavigate()
    function logout (){
        accoutService.logout()
        navigate('/')
    }
    return (
        <div className="">
                    <div className='bg-gray-100 text-lg area  border-x-4 border-indigo-500 font-bold text-center h-auto '>Bienvenue A Vous Monsieur & Madame !!!</div>
                    
            <button 
            onClick={logout}
                type="button" 
                className="leftkud bg-red-500 hover:bg-red-700 text-white font-bold py-0 px-4 rounded shadow-sm outline-none focus:outline-ring focus:ring-red-500 focus:ring-opacity-75 h-8"
                >
            Logout
            </button>
                     <br/><br/>

        </div>
    );
}

