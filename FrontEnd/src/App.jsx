import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminRouter from './pages/admin/AdminRouter';
import PublicRouter from './pages/public/PublicRouter';
import AuthRouter from './pages/auth/AuthRouter';
import AuthGuard from './helpers/AuthGuard';

function App() {
 

  return (
    <> 
    <Routes>
      <Route path='/*' element={<PublicRouter />} /> {/*  /*: pour indiquer au router qu'il y'aura des routes enfants  */}
      <Route path='/admin/*' element={
            <AuthGuard>
              <AdminRouter />{/*elemnt enfant de AuthGuard verification d'autentification*/}
            </AuthGuard>
      } />{/*dashoard*/}
      <Route path='/auth/*' element={<AuthRouter />} /> {/*authentification*/}
    </Routes>
  
      
    </>
  )
}

export default App
