import {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../store';
import { FirebaseAppAuth } from '../firebase/config';
import { logout, login} from '../store/auth';
import {  onAuthStateChanged } from "firebase/auth";

export const useAuth = () => {
    const {status} = useAppSelector((state) => state.auth);

    const dispatch = useAppDispatch();
  
  
    useEffect(() => {
      // firebase listener function 
      onAuthStateChanged(FirebaseAppAuth, (user) => {
        
        if(!user) return dispatch(logout())
          const{uid, displayName, email, photoURL} = user;
            if(user.emailVerified === false) return dispatch(logout())
            dispatch(login({uid, displayName, email, photoURL}))
        });
        
        
    },[dispatch])
    return status;
  
}
