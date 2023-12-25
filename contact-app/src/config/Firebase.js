// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { Firestore, getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChyqSM6mvC_X40V86It_QTOo_Dj9GpdHU",
  authDomain: "vite-contact-app-d82f4.firebaseapp.com",
  projectId: "vite-contact-app-d82f4",
  storageBucket: "vite-contact-app-d82f4.appspot.com",
  messagingSenderId: "431783423301",
  appId: "1:431783423301:web:4b64a5f4cb8980b200222c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)