// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAhfCCAGmeLTW1uQbWEdYWgZEhE3a8q2Pk",
  authDomain: "blogdev-230df.firebaseapp.com",
  projectId: "blogdev-230df",
  storageBucket: "blogdev-230df.appspot.com",
  messagingSenderId: "452365884126",
  appId: "1:452365884126:web:8bc515c4952efd8c5b804f",
  measurementId: "G-J22GP7636F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();