import { useEffect } from 'react';
import {  Divider } from '@mui/material';
import { RegisterForm } from "./components/RegisterForm";
import AuthLayout from "../../layout/AuthLayout";
import { LoginSocial } from '../../../components/shared/LoginSocial';
import { useAppDispatch, useAppSelector } from '../../../store';
import { registerUserWithGoogle } from '../../../firebase/providers';
import { useNavigate } from 'react-router-dom';
import { clearState } from '../../../store/auth';


export const Register = () => {
  const { success,email } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const loginGoogle = () => {
    
     dispatch(registerUserWithGoogle({registerMethod:'google'}))
    
  }

  useEffect(() => {
    if (success){
      navigate(`/auth/verification-email?email=${email}`);
      dispatch(clearState())
    } 

  }, [success, navigate, email, dispatch])

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