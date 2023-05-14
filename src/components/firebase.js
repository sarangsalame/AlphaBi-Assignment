// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need






import firebase from 'firebase/compat/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBmb3wF-Uel3aLPNhVqW8jNK8ZlgrxBE8Q",
  authDomain: "aplhabiassignement.firebaseapp.com",
  projectId: "aplhabiassignement",
  storageBucket: "aplhabiassignement.appspot.com",
  messagingSenderId: "252052095172",
  appId: "1:252052095172:web:853e72e62b197271aa8991",
  measurementId: "G-9E898B2J4H"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };