// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2OsDBLfwjYkwVtgz4t2uz6wqcIFFnirY",

  authDomain: "fir-101-d7289.firebaseapp.com",

  projectId: "fir-101-d7289",

  storageBucket: "fir-101-d7289.appspot.com",

  messagingSenderId: "565057153788",

  appId: "1:565057153788:web:a5a2549ec5684931538579",

  measurementId: "G-6ELNX550EP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { db, auth, provider };
