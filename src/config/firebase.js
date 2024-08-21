// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth/cordova";
import { getFirestore, setDoc } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJkDiOS0iLTdpXG5YARrUWSGx_WiwB3SM",
  authDomain: "linkup-chat-app-7bfa3.firebaseapp.com",
  projectId: "linkup-chat-app-7bfa3",
  storageBucket: "linkup-chat-app-7bfa3.appspot.com",
  messagingSenderId: "336760901136",
  appId: "1:336760901136:web:d60e0c81125dd90e6fc495"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

