import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWsImn3BdpJBuGk7VJpxI_VdVYa1-RA84",
  authDomain: "testapp-8f859.firebaseapp.com",
  projectId: "testapp-8f859",
  storageBucket: "testapp-8f859.appspot.com",
  messagingSenderId: "720771576296",
  appId: "1:720771576296:web:21d7b2d323613cb354b45d"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getAuth(FIREBASE_APP);