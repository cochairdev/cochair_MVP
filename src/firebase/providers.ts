import { createAsyncThunk } from "@reduxjs/toolkit";

import {  createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, sendEmailVerification} from 'firebase/auth';
import { FirebaseAppAuth } from './config';

const googleProvider = new GoogleAuthProvider();
interface RegisterData{
    email:string,
    password:string
    name:string
    lastName:string
}
export const registerUserWithEmailPassword = createAsyncThunk('register/emailPassword',
    //Declare the type your function argument here:
    async (userData:RegisterData) => {
        
        const {email,password, name, lastName} =  userData;
        
            const dataUser = await createUserWithEmailAndPassword(FirebaseAppAuth, email,password);

            await updateProfile( dataUser.user, {displayName : `${name} ${lastName}`});

            await sendEmailVerification(dataUser.user);
               //crea en la tabla
               //email
               //company
               //

               //envio email confirmacion
               //redirecciom 
               //console.log(data)
                return{
                    ok:true,
                    email:dataUser.user.email,
                    uid: dataUser.user.uid,
                    emailVerified:dataUser.user.emailVerified,
                    displayName: dataUser.user.displayName,
    
                }
    }
)

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

