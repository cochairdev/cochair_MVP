// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//auth firebase 

import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbM4eitIpYG2SvxodAmqGux3A8bRxWZEo",
  authDomain: "react-course-40412.firebaseapp.com",
  projectId: "react-course-40412",
  storageBucket: "react-course-40412.appspot.com",
  messagingSenderId: "337396730785",
  appId: "1:337396730785:web:798b8dec701ee4f1b719e0"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAppAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
