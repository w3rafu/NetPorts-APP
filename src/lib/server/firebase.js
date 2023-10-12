// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4z6sfSqdf8d1q3BXs6488TitAguHYOHk",
    authDomain: "portnumberlookup.firebaseapp.com",
    projectId: "portnumberlookup",
    storageBucket: "portnumberlookup.appspot.com",
    messagingSenderId: "621796311443",
    appId: "1:621796311443:web:ed48a1c76edc6298d8a866"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { app, db, auth }