// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth/cordova";
import { getFirestore, setDoc } from "firebase/firestore/lite";
import { toast } from "react-toastify";
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
const auth = getAuth(app);
const db = getFirestore(app);
//Signup method
const signup = async (username,email,password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey, There I'm using LinkUp",
            lastSeen:Date.now()
        })
        await setDoc(doc(db,"chats",user.uid),{
            chatData:[],
        })
    } catch (error) {
        console.error(error)
        toast.error(error.code)
    }
}
