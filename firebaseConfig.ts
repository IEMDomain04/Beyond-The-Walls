import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjA4JUHN4x6VTrpcIfYUeqhl95kS1oLRA",
    authDomain: "beyond-the-walls-5ac43.firebaseapp.com",
    projectId: "beyond-the-walls-5ac43",
    storageBucket: "beyond-the-walls-5ac43.firebasestorage.app",
    messagingSenderId: "734553284688",
    appId: "1:734553284688:web:6c0f28f7af2c3763bb7155",
    measurementId: "G-DRP4GMCBF0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);