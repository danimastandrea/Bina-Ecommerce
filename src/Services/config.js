// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaXItfY8N97NtFBl6fvNMyg2VbO0jWHho",
  authDomain: "bina-tienda-online.firebaseapp.com",
  projectId: "bina-tienda-online",
  storageBucket: "bina-tienda-online.firebasestorage.app",
  messagingSenderId: "904990784144",
  appId: "1:904990784144:web:b9244117b1a2740a813615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);