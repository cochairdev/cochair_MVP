import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiI4c5TyY_poLwpZ4MY_x9kL7UHrf0Qmw",
  authDomain: "cochairtest.firebaseapp.com",
  projectId: "cochairtest",
  storageBucket: "cochairtest.appspot.com",
  messagingSenderId: "238832161441",
  appId: "1:238832161441:web:5d051d9836e7a4bd50d6e0",
  measurementId: "G-CKXNQVZ0FM"
};


export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAppAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
