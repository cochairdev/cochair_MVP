import {createSlice} from "@reduxjs/toolkit";
export interface AuthState{
    status : 'not-authenticated' | 'authenticating' | 'authenticated',
    uid: string | null,
    email: string | null,
    displayName: string | null,
    photoURL: string | null,
    errorMessage: string | null
}

const initialState: AuthState = {
    status: 'not-authenticated',
    uid:null,
    email:null,
    displayName:null,
    photoURL:null,
    errorMessage:null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login: (state, action) =>{
            
        },
        logout: (state, action) =>{
            
        },
        checkingCredentials: (state, action) =>{
            //handle double clicks, handle double submit 
            
        },
        
    }
})
export const { login, logout, checkingCredentials} = authSlice.actions;