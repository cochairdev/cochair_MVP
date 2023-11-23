import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../store";

interface Props{
    children: React.ReactNode
}
export const RequireAuth = ({children}:Props) => {
  const {status, registerStep} = useAppSelector((state) => state.auth);
  console.log(registerStep)
  
  
  if(status === 'not-authenticated'){
    return <Navigate to='/auth/login'/>
  }
 
    return children;
  


}
