import { Routes, Route, Navigate} from "react-router-dom"

import { AppTheme } from "./assets/styles/AppTheme";
//import { CheckingAuth } from "./components/CheckingAuth";
import { Login } from "./auth/pages/Login";
import { Register } from "./auth/pages/Register";
import { RequireAuth } from "./components/common/permission/RequireAuth";
import { Dashboard } from "@mui/icons-material";
import { Verification } from "./auth/pages/Verification";
function App() {

  //onAuthStateChange 
  //Redirigir si es la primera vez 
  //Redirigir si viene el codigo 

  //Verificar si el usuario esta verificado
  //Verificar si el usuario esta logueado
  
  //Spinner action if status === 'checking'
  //if(status === 'checking') return <CheckingAuth/>

  return (
    <AppTheme>
      
        <Routes>

            <Route path="/auth/login" element={<Login/>}/>
            <Route path="/auth/register" element={<Register/>}/>
            <Route path="/auth/verification-email" element={<Verification/>}/>
            <Route path="/auth/email-verified" element={<h1>EmailVerified</h1> }/>
            <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}>
          
            </Route>
            
            <Route path='/*' element={ <Navigate to="/auth/login" /> } />

        </Routes>
    </AppTheme>
  )
}
export default App;