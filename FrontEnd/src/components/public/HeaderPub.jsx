import {NavLink } from 'react-router-dom'
export default function HeaderPub() {
    /* className='text-xl mr-14 font-serif px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900  */
    return <div className=''>
        <header>
            <nav>
                <ul className='flex justify-center  '>
                    <li><NavLink to="/home"   className='text-xl mr-14 font-serif px-3 py-2 text-slate-900 rounded-lg hover:bg-slate-100 hover:text-slate-900 '>Accueil</NavLink> </li>
                    <li ><NavLink to="/service" className='text-xl mr-14 font-serif px-3 py-2 text-slate-900 rounded-lg hover:bg-slate-100 hover:text-slate-900 '>Service </NavLink></li>
                    <li><NavLink to="/contact" className='text-xl mr-14 font-serif px-3 py-2 text-slate-900 rounded-lg hover:bg-slate-100 hover:text-slate-900 '> Conctact</NavLink></li>
                </ul>
            </nav>
        </header>
    
<br/>
    </div>
    
}