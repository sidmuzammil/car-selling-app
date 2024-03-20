// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ1bn1vcJFcykjnqSvG996wvhUKyIhsRQ",
  authDomain: "car-selling-app-12d95.firebaseapp.com",
  projectId: "car-selling-app-12d95",
  storageBucket: "car-selling-app-12d95.appspot.com",
  messagingSenderId: "287572978694",
  appId: "1:287572978694:web:0b11dd12ea21787c43a787",
  measurementId: "G-TW0FC4XZ8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
