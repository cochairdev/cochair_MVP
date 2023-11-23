import { Routes, Route, Navigate } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Verification } from "../pages/Verification"

export const AuthRoutes = () => {

  return (
    <Routes>
      
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/verification-email" element={<Verification/>}/>
        <Route path='/*' element={ <Navigate to="/auth/login" /> } />


    </Routes>
  )
}