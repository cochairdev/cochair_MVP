import { createAsyncThunk, createSlice, PayloadAction, } from "@reduxjs/toolkit";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAppAuth } from "../../firebase/config";
import { authGoogle , registerUserWithEmailPassword } from "../../firebase/providers";

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
const googleProvider = new GoogleAuthProvider();

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
        checkingCredentials: (state, action) => {
            //handle double clicks, handle double submit 

        },
        loginWithGoogle: (state) => {
            state.status = 'checking';
        }

    },
    extraReducers: (builder) => {
        builder.addCase(authGoogle.pending, (state) => {
            state.status = 'checking'
        })
        builder.addCase(authGoogle.fulfilled, (state, {payload}) => {
            console.log(payload)
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.name = payload.displayName;
            state.email = payload.email;
            state.photoURL = payload.photoURL;
        })
        builder.addCase(authGoogle.rejected, (state, action) => {
            console.log(action.payload)
            state.status = 'not-authenticated'
        })
    }
    
})
export const { login, logout, checkingCredentials, loginWithGoogle , setError} = authSlice.actions;