import {  createSlice } from "@reduxjs/toolkit";
import { registerUserWithEmailPassword  } from "../../firebase/providers";
export interface AuthState {
    status: 'not-authenticated' | 'checking' | 'authenticated',
    uid: string | null,
    email: string | null,
    name: string | null,
    photoURL: string | null,
    errorMessage: string | null
}

const initialState: AuthState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    name: null,
    photoURL: null,
    errorMessage: null
}

//asyncThunk is a function(typePrefix, function return a promise)


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email;
            state.uid = action.payload.uid;
        },
        setError: (state, action) => {
            state.errorMessage = action.payload
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
        }

    },
    extraReducers: (builder) => {
        builder.addCase(registerUserWithEmailPassword.pending, (state) => {
            state.status = 'checking'
        })
        builder.addCase(registerUserWithEmailPassword.fulfilled, (state, {payload}) => {
            console.log(payload)
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.name = payload.displayName;
            state.email = payload.email;
            state.photoURL = payload.photoURL;
        })
        builder.addCase(registerUserWithEmailPassword.rejected, (state, action) => {

        //state.status = action
            console.log(action.payload)
            state.status = 'not-authenticated';
            state.errorMessage = action.payload as string;
        })
    }
    
})
export const { login, logout, checkingCredentials, loginWithGoogle , setError} = authSlice.actions;