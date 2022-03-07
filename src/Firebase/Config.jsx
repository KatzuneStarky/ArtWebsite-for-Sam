// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzjH93I8wY6GHzGW4PcJGnQ41yq7XBokM",
  authDomain: "react-gallery-art-sam.firebaseapp.com",
  projectId: "react-gallery-art-sam",
  storageBucket: "react-gallery-art-sam.appspot.com",
  messagingSenderId: "598462828380",
  appId: "1:598462828380:web:aa74c4d925691f2c27fb99"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage()
export const db = getFirestore()
export const auth = getAuth()