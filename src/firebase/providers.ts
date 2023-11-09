import { createAsyncThunk } from "@reduxjs/toolkit";
import { FirebaseError } from '@firebase/util'

import {  createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, sendEmailVerification} from 'firebase/auth';
import { FirebaseAppAuth } from './config';

const googleProvider = new GoogleAuthProvider();
interface RegisterData{
    email:string,
    password:string
    name:string
    lastName:string
}
export const registerUserWithEmailPassword = createAsyncThunk<
    { ok: boolean; email: string | null; uid: string; emailVerified: boolean; displayName: string | null },
    RegisterData,
    { rejectValue: string }
>('register/emailPassword', async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    
    const { email, password, name, lastName } = userData;

    try {
        const dataUser = await createUserWithEmailAndPassword(FirebaseAppAuth, email, password);

        await updateProfile(dataUser.user, { displayName: `${name} ${lastName}` });

        await sendEmailVerification(dataUser.user);
        return {
            ok: true,
            email: dataUser.user.email,
            uid: dataUser.user.uid,
            emailVerified: dataUser.user.emailVerified,
            displayName: dataUser.user.displayName,
        };
    } catch (e: unknown) {
        if (e instanceof FirebaseError) {
            return rejectWithValue(e.message as string);
        }
        return rejectWithValue('Unknown error occurred');
    }
});
     
           

export const authGoogle = createAsyncThunk(
    'auth/authGoogle',
    async () => {
            
            const result = await signInWithPopup(FirebaseAppAuth, googleProvider);
            const { displayName, email, photoURL, uid, emailVerified } = result.user;
            // console.log(displayName, email, photoURL, uid)
            //petición para actualizar tabla usuarios
            //await fetch('http://localhost:3001/users', {
            return {
                ok: true,
                // User info
                displayName,
                email,
                photoURL,
                uid,
                emailVerified
            }
    }
)

