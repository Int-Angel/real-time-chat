// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "messenger-809d4",
  storageBucket: "messenger-809d4.appspot.com",
  messagingSenderId: "785938096655",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-1L5J961EKC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
