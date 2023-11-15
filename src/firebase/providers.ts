import { createAsyncThunk } from "@reduxjs/toolkit";
import { FirebaseError } from '@firebase/util'
import { collection, addDoc, query, where, getDocs} from "firebase/firestore"; 

import {  createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, sendEmailVerification, signInWithEmailAndPassword, } from 'firebase/auth';
import { FirebaseAppAuth, FirebaseDB } from './config';

const googleProvider = new GoogleAuthProvider();
interface RegisterData{
    email:string,
    password:string
    name:string
    lastName:string,
    company:string
}
interface RegisterSocial{
    registerMethod:string
}
export const handleLogoutFirebase = createAsyncThunk("auth/handleLogout", async () => {
    return await FirebaseAppAuth.signOut();

});

export const handleLoginEmailPassword = createAsyncThunk<
    {ok:boolean, email:string | null,displayName: string | null },
    {email:string, password:string},
    { rejectValue: string}
>("auth/handleLoginEmailPassword", async (data: {email:string, password:string}, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const {email, password} = data;
    try {
        const { user } = await signInWithEmailAndPassword(FirebaseAppAuth, email, password);
        return {
            ok: true,
            email: user.email,
            displayName: user.displayName
        }
    } catch (e: unknown) {
        if (e instanceof FirebaseError) {
            return rejectWithValue(e.message as string);
        }
        return rejectWithValue('Unknown error occurred');
    }
})

interface RegisterSocial {
    registerMethod: string;
}

export const registerUserWithGoogle = createAsyncThunk<
    { ok: boolean; email: string | null; displayName: string | null; registerMethod: string, status:string },
    RegisterSocial,
    { rejectValue: string }
>('register/socialGoogle', async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const result = await signInWithPopup(FirebaseAppAuth, googleProvider);

        const { displayName, email, photoURL, uid } = result.user;
        const q = query(collection(FirebaseDB, "users"), where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            const newUser = {
                displayName: displayName,
                email: email,
                photoURL: photoURL,
                uid: uid,
                registerMethod: userData.registerMethod,
            };
            const refDoc = collection(FirebaseDB, 'users');
            
    
            await addDoc(refDoc, newUser);
    
            return {
                ok: true,
                email: email,
                displayName: displayName,
                registerMethod: 'socialGoogle',
                status:'authenticated'
            };
        } else{
            throw new Error('User already exists');       
        }
        
    } catch (e: unknown) {
        const message = e instanceof Error ? e.message : 'Unknown error occurred';
        if (e instanceof FirebaseError) {
            return rejectWithValue(e.message as string);
        }
        return rejectWithValue(message);
    }
});
    
export const registerUserWithEmailPassword = createAsyncThunk<
    { ok: boolean; email: string | null; displayName: string | null ; registerMethod: string},
    RegisterData,
    { rejectValue: string }
    >('register/emailPassword', async (userData, thunkAPI) => {

    const { rejectWithValue } = thunkAPI;
    
    const { email, password, name, lastName , company} = userData;
   
    try {
        const dataUser = await createUserWithEmailAndPassword(FirebaseAppAuth, email, password);

        await updateProfile(dataUser.user, { displayName: `${name} ${lastName}` });
        
        const newUser= {
            displayName: `${name} ${lastName}` ,
            email: email,
            uid: dataUser.user.uid,
            company: company,
            //emailPassword | social | magickLink
            registerMethod: 'emailPassword',
        }
        const refDoc= collection(FirebaseDB, "users")
        await addDoc(refDoc, newUser);

        await sendEmailVerification(dataUser.user);
        return {
            ok: true,
            email: dataUser.user.email,
            displayName: dataUser.user.displayName,
            registerMethod: 'emailPassword',
        };
    } catch (e: unknown) {
        if (e instanceof FirebaseError) {
            return rejectWithValue(e.message as string);
        }
        return rejectWithValue('Unknown error occurred');
    }
});
     
           

export const handleLoginWithGoogle = createAsyncThunk(
    'auth/authGoogle',
    async () => {
            
            const result = await signInWithPopup(FirebaseAppAuth, googleProvider);
            const { displayName, email, photoURL, uid } = result.user;
         
            return {
                ok: true,
                displayName,
                email,
                photoURL,
                uid,
            }
    }
)

