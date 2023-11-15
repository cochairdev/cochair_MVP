import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks";

interface Props{
    children: React.ReactNode
}
export const RequireAuth = ({children}:Props) => {
  const status = useAuth();
  
  if(status === 'not-authenticated'){
    return <Navigate to='/auth/login'/>
  
    }
    return children;
  


}
