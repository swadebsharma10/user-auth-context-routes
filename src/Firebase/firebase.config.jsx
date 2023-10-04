// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEOj7GpDzmJSp1bl7e7nBqIDggcorHLAs",
  authDomain: "user-auth-context-app.firebaseapp.com",
  projectId: "user-auth-context-app",
  storageBucket: "user-auth-context-app.appspot.com",
  messagingSenderId: "491866694224",
  appId: "1:491866694224:web:d7ccebadda62a07fd72755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;