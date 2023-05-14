// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDrEMb_MTPJvVWheOL25IZCdRq2Cq4WjD4",
  authDomain: "alphabi-a665b.firebaseapp.com",
  projectId: "alphabi-a665b",
  storageBucket: "alphabi-a665b.appspot.com",
  messagingSenderId: "553445392353",
  appId: "1:553445392353:web:dd0036a5c186a14d269ca0",
  measurementId: "G-ZES5X6NXRT"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { app, auth, provider };