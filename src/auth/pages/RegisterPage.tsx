import Layout from "../layout/Layout"

import {  Divider } from '@mui/material';
import { LoginSocial } from './Login/components/Login/LoginSocial';


import { RegisterForm } from "./Register/RegisterForm";
import { useAppDispatch } from "../../store";
import { authGoogle } from "../../firebase/providers";

export const RegisterPage = () => {

  const dispatch = useAppDispatch()

  const handleSubmit = () => {
    console.log('handleSubmit')
  }

  const loginGoogle = () => {
    //handleLoginGoogle()
    dispatch(authGoogle())

  }

  return (
    <Layout title="Welcome to Cochair" subtitle="Select a method to sign up">
        <LoginSocial handleLoginGoogle={loginGoogle}/>
          
          <Divider sx={{
            fontStyle: 'italic',
            color: '#666',
          }}>
            Or continue manually
          </Divider>
          <RegisterForm handleSubmit={handleSubmit }/>
  
    </Layout>
  )
}
