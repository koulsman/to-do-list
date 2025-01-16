// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import 'firebase/auth';
import 'firebase/functions';
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth"
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRACmCxr3247difw74J5AjdL__JMOJ_-8",
  authDomain: "todo-b9d70.firebaseapp.com",
  projectId: "todo-b9d70",
  storageBucket: "todo-b9d70.appspot.com",
  messagingSenderId: "1040538536099",
  appId: "1:1040538536099:web:dc2f8b0ca2abc811749716"
};

// Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const firestore = getFirestore(app);

// const storage = getStorage(app);
// const db = getFirestore(app);

// export { app, firestore, auth , storage, db};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth,db};