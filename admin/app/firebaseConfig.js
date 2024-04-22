// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5s2xYdWfXbgpsaEsN6j5tcewUCvruZLA",
  authDomain: "socialsphere-2da01.firebaseapp.com",
  projectId: "socialsphere-2da01",
  storageBucket: "socialsphere-2da01.appspot.com",
  messagingSenderId: "944803981395",
  appId: "1:944803981395:web:013eca39896966e8d33ea6",
  measurementId: "G-1K2E8YKNKT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };