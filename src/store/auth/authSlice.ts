import {  createSlice } from "@reduxjs/toolkit";
import { 
    registerUserWithEmailPassword,
    handleLogoutFirebase,
    handleLoginEmailPassword,
    handleLoginWithGoogle,
    registerUserWithGoogle,
    sendVerificationEmail
} from "../../firebase/providers";
export interface AuthState {
    status: 'not-authenticated' | 'checking' | 'authenticated',
    success:boolean,
    registerMethod: string | null,
    registerStep: string| null,
    uid: string | null,
    email: string | null,
    name: string | null,
    photoURL: string | null,
    errorMessageRegister: string | null,
    errorMessageLogin: string | null,
    showNotification: string | null,
    notificationText: string | null

}

const initialState: AuthState = {
    status: 'not-authenticated',
    registerStep:null,
    success:false,
    registerMethod: null,
    uid: null,
    email: null,
    name: null,
    photoURL: null,
    errorMessageRegister: null,
    errorMessageLogin: null,
    showNotification:  null,
    notificationText:  null,

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = 'authenticated';
            state.name = action.payload.displayName;
            state.email = action.payload.email;
            state.uid = action.payload.uid;
            state.photoURL = action.payload.photoURL ;
        },
        
        logout: (state) => {
            state.status='not-authenticated',
            state.success=false,
            state.registerMethod= null,
            state.uid= null,
            state.email= null,
            state.name= null,
            state.photoURL= null,
            state.errorMessageRegister= null,
            state.errorMessageLogin= null
           
        },
        checkingCredentials: () => {
            //handle double clicks, handle double submit 

        },
        loginWithGoogle: (state) => {
            state.status = 'checking';
        },
        savingNewUser: (state) => {
            state.status = 'checking';
        },
        clearState : state =>{
            state.status='not-authenticated',
            state.registerStep= null,
            state.success=false,
            state.registerMethod= null,
            state.uid=null,
            state.email= null,
            state.name= null,
            state.photoURL= null,
            state.errorMessageRegister= null,
            state.errorMessageLogin= null
        
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUserWithEmailPassword.pending, (state) => {
            state.status = 'checking'
            state.errorMessageLogin = null;

        })
        builder.addCase(registerUserWithEmailPassword.fulfilled, (state, {payload}) => {
            state.status = 'not-authenticated';
            state.registerStep="validation-email";
            state.success = true;
            state.registerMethod = payload.registerMethod;
            state.name = payload.displayName;   
            state.email = payload.email;
            state.errorMessageLogin = null;

        })
        builder.addCase(registerUserWithEmailPassword.rejected, (state, action) => {
            state.status = 'not-authenticated';
            state.errorMessageRegister = handleErrorMessage(action.payload as string)
        })
        //handleLogoutFirebase
        builder.addCase(handleLogoutFirebase.pending, (state) => {
            state.status = 'checking'

        })
        builder.addCase(handleLogoutFirebase.fulfilled, (state) => {
            state.status='not-authenticated',
            state.success=false,
            state.registerMethod= null,
            state.uid= null,
            state.email= null,
            state.name= null,
            state.photoURL= null,
            state.errorMessageRegister= null,
            state.errorMessageLogin= null
                
        })
        //handleLoginEmailPassword
        builder.addCase(handleLoginEmailPassword.pending, (state) => {
            state.status = 'checking'
            state.errorMessageLogin = null;
        })
        builder.addCase(handleLoginEmailPassword.fulfilled, (state, {payload}) => {
            state.status = 'authenticated';
            state.success = true;
            state.name = payload.displayName;   
            state.email = payload.email;
            state.errorMessageLogin = null;
        })
        builder.addCase(handleLoginEmailPassword.rejected, (state, action) => {
            state.status = 'not-authenticated';
            state.errorMessageLogin = handleErrorMessage(action.payload as string)
        })
        //handleLoginWithGoogle
        builder.addCase(handleLoginWithGoogle.pending, (state) => {
            state.status = 'checking'
            state.errorMessageLogin = null;

        })
        builder.addCase(handleLoginWithGoogle.fulfilled, (state, {payload}) => {
            state.status = 'authenticated';
            state.success = true;

            state.name = payload.displayName;   
            state.email = payload.email;
            state.errorMessageLogin = null;
        })
        builder.addCase(handleLoginWithGoogle.rejected, (state) => {
            state.status = 'not-authenticated';
            state.errorMessageLogin = null
        })
        //handleLoginWithGoogle
        builder.addCase(registerUserWithGoogle.pending, (state) => {
            state.status = 'checking'
            state.errorMessageRegister = null;
        })
        builder.addCase(registerUserWithGoogle.fulfilled, (state, {payload}) => {
            state.status = 'authenticated';
            state.name = payload.displayName;   
            state.email = payload.email;
            state.errorMessageRegister = null;
        })
        builder.addCase(registerUserWithGoogle.rejected, (state, action) => {
            state.status = 'not-authenticated';
            state.errorMessageRegister = handleErrorMessage(action.payload as string)
        })
        //            state.success = true;

        builder.addCase(sendVerificationEmail.pending, (state) => {
            state.status = 'checking'
            state.errorMessageRegister = null;
        })
        builder.addCase(sendVerificationEmail.fulfilled, (state, {payload}) => {
            state.success = payload.ok;
        })
        
    }
    
})
const handleErrorMessage = (error: string) => {
    console.log(error)
    switch (error) {
        case 'Firebase: Error (auth/email-already-in-use).':
            return 'Email already in use';
        case 'Firebase: Error (auth/invalid-login-credentials).':
            return 'Email or password incorrect';
        case 'User already exists':
            return 'User already exists';
        case 'Firebase: Error (auth/popup-closed-by-user).':
            return 'User already exists';

        default:
            return 'Unknown error occurred';
    }
}
export const { login, logout, checkingCredentials, loginWithGoogle , savingNewUser, clearState} = authSlice.actions;