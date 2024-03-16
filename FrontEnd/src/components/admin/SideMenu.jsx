
import {NavLink } from 'react-router-dom';
export default function SideMenu(){
    return (
<div>
<div className="pr-9 border-r-4 border-indigo-500">
            <ul className=''>
                <li><NavLink to='/'>Acceuil</NavLink></li>
                <li>&nbsp;</li>
                <li><NavLink to='/admin/dashboard'>Dashboard</NavLink></li>
                <li>&nbsp;</li>
                <li>
                    User
                        <ul className='ml-4 '>
                            <li className='hover:bg-orange-100 rounded-full'><NavLink to='/admin/user/index' className="ml-3">Liste</NavLink></li>
                            <li className='hover:bg-orange-100 rounded-full'><NavLink to='/admin/user/add' className="ml-3">Ajouter</NavLink></li>
                        </ul>
                </li>
                <li>
                    Cocktail
                        <ul className='ml-4 '>
                            <li className=' hover:bg-green-100 rounded-full'><NavLink to='/admin/cocktail/index' className="ml-3">Liste</NavLink></li>
                            <li className=' hover:bg-green-100 rounded-full'><NavLink to='/admin/cocktail/edit' className="ml-3">Editer</NavLink></li>
                        </ul>
                </li>

            </ul>
        </div>
</div>
    );
}

