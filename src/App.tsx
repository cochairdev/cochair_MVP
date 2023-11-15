import { Routes, Route, Navigate} from "react-router-dom"

import { AppTheme } from "./assets/styles/AppTheme";
//import { CheckingAuth } from "./components/CheckingAuth";
import { DashboardRoutes } from "./dashboard/routes/DashboardRoutes";
import { AuthRoutes } from "./auth/routes/AuthRoutes";
import { useAuth } from "./hooks";
function App() {

  //onAuthStateChange 
  //Redirigir si es la primera vez 
  //Redirigir si viene el codigo 

  //Verificar si el usuario esta verificado
  //Verificar si el usuario esta logueado
  
  //Spinner action if status === 'checking'
  //if(status === 'checking') return <CheckingAuth/>
  const status = useAuth();

  return (
    <AppTheme>
      
        <Routes>
            {
              (status === 'authenticated')? 
            <Route path="/*" element={<DashboardRoutes/>}/>

            :
            <Route path="/auth/*" element={ <AuthRoutes/>}/>

            }
          
          <Route path='/*' element={ <Navigate to="/auth/login" /> } />


      
        </Routes>
    </AppTheme>
  )
}
export default App;