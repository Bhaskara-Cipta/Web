// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaSIFMDAyS-OVMlzCbSzm-UECui-HckKk",
  authDomain: "siaga-f42dd.firebaseapp.com",
  projectId: "siaga-f42dd",
  databaseURL:
    "https://siaga-f42dd-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "siaga-f42dd.appspot.com",
  messagingSenderId: "286654018522",
  appId: "1:286654018522:web:5d8fbe8a9b24a7e5e706e3",
  measurementId: "G-QNWVW65Z50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const dbRealtime = getDatabase(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, dbRealtime, auth };
