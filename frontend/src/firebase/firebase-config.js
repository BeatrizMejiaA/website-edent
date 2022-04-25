import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCwaFwxGst5lIm9FuYfpuVar5mSTIonAZA",
    authDomain: "react-app-01-d4479.firebaseapp.com",
    projectId: "react-app-01-d4479",
    storageBucket: "react-app-01-d4479.appspot.com",
    messagingSenderId: "1074024570794",
    appId: "1:1074024570794:web:638704f7b18b4767ab55d3"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}