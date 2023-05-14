// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAo175CSb9ETLwoiDxsFmya9O4WMpnBzHA",
  authDomain: "alpha-56d52.firebaseapp.com",
  projectId: "alpha-56d52",
  storageBucket: "alpha-56d52.appspot.com",
  messagingSenderId: "757333854686",
  appId: "1:757333854686:web:0f6b4284de233bad78b54f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app);