// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiIW5c4vKkuSiRFn7Lo_SQ7yiUMl1tCiM",
  authDomain: "reactconnection-8e46f.firebaseapp.com",
  projectId: "reactconnection-8e46f",
  storageBucket: "reactconnection-8e46f.firebasestorage.app",
  messagingSenderId: "1019007429135",
  appId: "1:1019007429135:web:17ef674afe6e779743517a",
  measurementId: "G-LK9BZYKKJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


 export const auth =getAuth(app);
 ////////////////////////////

