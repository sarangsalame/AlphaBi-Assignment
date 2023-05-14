// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore'
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
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


// setup database 
const db = getFirestore()

// collection ref
const colRef = collection(db, "favouritegifs")

//get collection data
getDocs(colRef)
  .then((snapshort) => {
    let favgif = []
    snapshort.docs.forEach((doc) => {
      favgif.push({ ...doc.data(), id: doc.id })
    })
    console.log(favgif)
  }).catch(err => {
    console.log(err.message)
  })

export { auth, provider };