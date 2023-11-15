import { Routes, Route, Navigate,  } from "react-router-dom"
import { Dashboard } from "../Dashboard"
import { Profile } from "../Profile";

export const DashboardRoutes = () => {
  return (
    <Routes>
      
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path='/*' element={ <Navigate to="/dashboard" /> } />


    </Routes>
  )
}