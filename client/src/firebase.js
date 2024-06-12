// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-bb850.firebaseapp.com",
  projectId: "real-estate-bb850",
  storageBucket: "real-estate-bb850.appspot.com",
  messagingSenderId: "268787869258",
  appId: "1:268787869258:web:eee991a63a30062e1b68b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);