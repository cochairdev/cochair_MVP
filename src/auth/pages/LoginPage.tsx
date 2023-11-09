
import Layout from "../layout/Layout"

import { Divider } from '@mui/material';
import { LoginForm } from './Login/components/Login/LoginForm';
import { LoginSocial } from './Login/components/Login/LoginSocial';
export const LoginPage = () => {

  const loginGoogle = () => {
    //handleLoginGoogle()
    
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
          <LoginForm />
        
    </Layout>
  )
}
