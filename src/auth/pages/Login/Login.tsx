import { Divider} from '@mui/material'
import AuthLayout from '../../layout/AuthLayout'
import { LoginForm } from './components/LoginForm'
import { LoginSocial } from '../../../components/shared/LoginSocial'
import { useAppDispatch } from '../../../store'
import { handleLoginWithGoogle } from '../../../firebase/providers'

export const Login = () => {
    const dispatch = useAppDispatch();

    const handleLoginGoogle = () => {
        console.log('login google')
        dispatch(handleLoginWithGoogle())
    }
    return (
        <AuthLayout 
            title="Welcome to Cochair" 
            subtitle="Select a method to sign up"
            linkText="Don't have an account?"
            linkPath="/auth/register"
            linkPathText="Sign up"
            >
            <LoginSocial handleLoginGoogle={handleLoginGoogle} />

            <Divider sx={{
                fontStyle: 'italic',
                color: '#666',
            }}>
                Or continue manually
            </Divider>
            <LoginForm />
            

        </AuthLayout>
    )
}
