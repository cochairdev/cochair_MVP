import {  GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseAppAuth } from './config';

const googleProvider = new GoogleAuthProvider();


export const singInWithGoogle = async() => {

    try {
        
        const result = await signInWithPopup(FirebaseAppAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;
        console.log(displayName, email, photoURL, uid)
        
        return {
            ok: true,
            // User info
            displayName, email, photoURL, uid
        }
        

    } catch (error) {
        
        const errorCode = error.code;
        const errorMessage = error.message;
    
        return {
            ok: false,
            errorMessage,
        }
    }

}