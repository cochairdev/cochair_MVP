import { Routes, Route} from "react-router-dom"
import { AuthRoutes } from './auth/routes/AuthRoutes';
import { DashboardRoutes } from './dashboard/routes/DashboardRoutes';
import { AppTheme } from "./theme/AppTheme";

function App() {


  return (
    <AppTheme>
          
      
        <Routes>

        {/* auth routes */}
        <Route path="/auth/*" element={<AuthRoutes/>} />
        {/* journal router */}
        <Route path="/*" element={<DashboardRoutes/>}/>
        

        </Routes>
    </AppTheme>
  )
}

export default App
/*<select className="custom-select" style={{width: 200}} onChange={onClickLanguageChange}>
<option value="en-UX" >English</option>
<option value="es-MX" >Spanish</option>
</select>
*/