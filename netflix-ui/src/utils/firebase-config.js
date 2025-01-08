// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCttYPs6UqvzH6YUmXzqEKWH2i_Kb3xDUY",
  authDomain: "netflix-clone-be582.firebaseapp.com",
  projectId: "netflix-clone-be582",
  storageBucket: "netflix-clone-be582.firebasestorage.app",
  messagingSenderId: "201627877970",
  appId: "1:201627877970:web:e4152c0f419112bebcd58b",
  measurementId: "G-QVZ2DXMBX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);