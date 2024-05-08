

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,

  apiKey: "AIzaSyA5s2xYdWfXbgpsaEsN6j5tcewUCvruZLA",
  authDomain: "socialsphere-2da01.firebaseapp.com",
  projectId: "socialsphere-2da01",
  storageBucket: "socialsphere-2da01.appspot.com",
  messagingSenderId: "944803981395",
  appId: "1:944803981395:web:013eca39896966e8d33ea6",
  measurementId: "G-1K2E8YKNKT",
};

// Initialize Firebase for server side rendering(SSR)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
//const analytics = getAnalytics(app);

//let analytics; // Declare analytics variable

// Check if the code is running in the browser
// if (typeof window !== "undefined") {
//   // Dynamically import Firebase Analytics only in the browser
//   import("firebase/analytics")
//     .then(({ getAnalytics }) => {
//       analytics = getAnalytics(app);
//     })
//     .catch((error) => {
//       console.error("Error initializing Firebase Analytics:", error);
//     });
// }

export { app, auth, firestore, storage };