// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoeEh6eCvwQ3NxL3XVJSfnqdnhSR44RRc",
  authDomain: "linkedin-clone-3aad6.firebaseapp.com",
  projectId: "linkedin-clone-3aad6",
  storageBucket: "linkedin-clone-3aad6.appspot.com",
  messagingSenderId: "370733988321",
  appId: "1:370733988321:web:ee4ea42b1474918761baa0",
  measurementId: "G-QVSFBZ5Q2T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);