import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJnVQuoADTamRgklx6SwTGlzq0ImuzUCA",
    authDomain: "eshop-c73b1.firebaseapp.com",
    projectId: "eshop-c73b1",
    storageBucket: "eshop-c73b1.appspot.com",
    messagingSenderId: "289338747052",
    appId: "1:289338747052:web:d92ec3d603912ccfee1709",
    measurementId: "G-JYSF6ZJ3MT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};