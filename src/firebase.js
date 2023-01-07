// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: AADCIONEI SUA APUI
  authDomain: SEU DOMONI
  projectId: ID DO SEU PROJETO
  storageBucket: SEU BUCKET
  messagingSenderId: SEU NUMERO ID
  appId: SEU API ID
  measurementId:IFELIZMENTE ISSO AQUI E MEU ENTAO NAO IREI DEIXAR NADA DISPONIVEL NA INTERNET BAIXE E ESSE PROJETO E FAÇA AS SUAS CONFIGURACOES
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
