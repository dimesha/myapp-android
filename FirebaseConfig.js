import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFireStore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKvvFy2V1jLV6g0JKqma8uL5XnUdGpJDQ",
  authDomain: "myapp-801a7.firebaseapp.com",
  projectId: "myapp-801a7",
  storageBucket: "myapp-801a7.appspot.com",
  messagingSenderId: "318363964374",
  appId: "1:318363964374:web:1f34a0428ab9405ab38a77",
  measurementId: "G-1Y3K6VCNS8"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFireStore(FIREBASE_APP);
const analytics = getAnalytics(app);