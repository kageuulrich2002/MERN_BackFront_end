import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminRouter from './pages/admin/AdminRouter';
import PublicRouter from './pages/public/PublicRouter';

function App() {
 

  return (
    <> 
    <Routes>
      <Route path='/*' element={<PublicRouter />} /> {/*  /*: pour indiquer au router qu'il y'aura des routes enfants  */}
      <Route path='/admin/*' element={<AdminRouter />} />
    </Routes>
  
      
    </>
  )
}

export default App
