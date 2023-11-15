import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbM4eitIpYG2SvxodAmqGux3A8bRxWZEo",
  authDomain: "react-course-40412.firebaseapp.com",
  projectId: "react-course-40412",
  storageBucket: "react-course-40412.appspot.com",
  messagingSenderId: "337396730785",
  appId: "1:337396730785:web:798b8dec701ee4f1b719e0"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAppAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
