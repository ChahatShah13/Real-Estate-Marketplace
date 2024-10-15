// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-ecb10.firebaseapp.com",
  projectId: "real-estate-ecb10",
  storageBucket: "real-estate-ecb10.appspot.com",
  messagingSenderId: "1055834465169",
  appId: "1:1055834465169:web:0e1270a069625c3d6e7030"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);