import {  createSlice } from "@reduxjs/toolkit";
import { 
    registerUserWithEmailPassword,
    handleLogoutFirebase,
    handleLoginEmailPassword,
    handleLoginWithGoogle
} from "../../firebase/providers";
export interface AuthState {
    status: 'not-authenticated' | 'checking' | 'authenticated' ,
    registerMethod: string | null,
    uid: string | null,
    email: string | null,
    name: string | null,
    photoURL: string | null,
    errorMessageRegister: string | null,
    errorMessageLogin: string | null

}

const initialState: AuthState = {
    status: 'not-authenticated',
    registerMethod: null,
    uid: null,
    email: null,
    name: null,
    photoURL: null,
    errorMessageRegister: null,
    errorMessageLogin: null

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
            state.status = 'not-authenticated';
            state.uid = null;
            state.name = null;
            state.email = null;
            state.photoURL = null;
        },
        checkingCredentials: () => {
            //handle double clicks, handle double submit 

        },
        loginWithGoogle: (state) => {
            state.status = 'checking';
        },
        savingNewUser: (state) => {
            state.status = 'checking';
        }

    },
    extraReducers: (builder) => {
        builder.addCase(registerUserWithEmailPassword.pending, (state) => {
            state.status = 'checking'
        })
        builder.addCase(registerUserWithEmailPassword.fulfilled, (state, {payload}) => {
            state.status = 'authenticated';
            state.registerMethod = payload.registerMethod;
            state.name = payload.displayName;   
            state.email = payload.email;
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
            state.status = 'not-authenticated';
            state.uid = null;
            state.name = null;
            state.email = null;
        })
        //handleLoginEmailPassword
        builder.addCase(handleLoginEmailPassword.pending, (state) => {
            state.status = 'checking'
            state.errorMessageLogin = null;
        })
        builder.addCase(handleLoginEmailPassword.fulfilled, (state, {payload}) => {
            state.status = 'authenticated';
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
            state.name = payload.displayName;   
            state.email = payload.email;
            state.errorMessageLogin = null;
        })
        builder.addCase(handleLoginWithGoogle.rejected, (state, action) => {
            state.status = 'not-authenticated';
            state.errorMessageLogin = handleErrorMessage(action.payload as string)
        })
    }
    
})
const handleErrorMessage = (error: string) => {
    switch (error) {
        case 'Firebase: Error (auth/email-already-in-use).':
            return 'Email already in use';
        case 'Firebase: Error (auth/invalid-login-credentials).':
            return 'Email or password incorrect';
        case 'auth/weak-password':
            return 'Weak password';
        default:
            return 'Unknown error occurred';
    }
}
export const { login, logout, checkingCredentials, loginWithGoogle , savingNewUser} = authSlice.actions;