
import {  Divider } from '@mui/material';
import { RegisterForm } from "./components/RegisterForm";
import AuthLayout from "../../layout/AuthLayout";
import { LoginSocial } from '../../../components/shared/LoginSocial';
import { useAppDispatch } from '../../../store';
import { authGoogle } from '../../../firebase/providers';
export const Register = () => {

  const dispatch = useAppDispatch()


  const loginGoogle = () => {
    //handleLoginGoogle()
    dispatch(authGoogle())

  }

  return (
    <AuthLayout 
      title="Welcome to Cochair" 
      subtitle="Select a method to sign up"
      linkText="Already have an account?"
      linkPath="/auth/login"
      linkPathText="Login"
      >
        <LoginSocial handleLoginGoogle={loginGoogle}/>
          
          <Divider sx={{
            fontStyle: 'italic',
            color: '#666',
          }}>
            Or continue manually
          </Divider>
          <RegisterForm/>
  
    </AuthLayout>
  )
}