import {useState} from 'react'
export default function Login (){

    // const [login, setLogin] =useState('')
    // const [password , setPassword] = useState('')
    const [credential, setCredential] = useState({ // recupere tout les name des different imput
        login: '',
        password: ''
    }) 

    const onChange =(e) =>{ //gere les diff etat de changement 
        setCredential({
            ...credential, //crée une copie des valeur de champs
            [e.target.name] : e.target.value //pour chanque valeur effectue un changement
        })
    } 

    const onSubmit = (e) =>{ //declanche tout le formulaire
        e.preventDefault()//empeche le chargement de la page
        console.log(credential)
    }
    return (
        <div>
            <div className="flex flex-col mt-32 justify-center items-center">
            <form onSubmit={onSubmit}
                 className="bg-gray-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login">
                    Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                   value={credential.login}
                   onChange={onChange}
                   name="login" type="text" placeholder="Username
                    "/>
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    value={credential.password}
                    onChange={onChange}
                   name="password" type="texte" placeholder="******************"
                   />
                </div>
                <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                    Connexion
                </button>
                </div>
                
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2024 catechdigital2024. the cameroon.
            </p>
            </div>
        </div>
    );
}

