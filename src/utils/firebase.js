// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9iSa9fFg-rg4ZAk5N_Ys6ds1gbdSlA64",
  authDomain: "vibely-2827.firebaseapp.com",
  projectId: "vibely-2827",
  storageBucket: "vibely-2827.firebasestorage.app",
  messagingSenderId: "983068347437",
  appId: "1:983068347437:web:442c1f2cd42493661f7ca4",
  measurementId: "G-LS3ZXPRBZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();