import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAawG4YQoL0KyrtGEXs9tTbes7SyeK4wRk",
  authDomain: "chit-chat-7ae11.firebaseapp.com",
  projectId: "chit-chat-7ae11",
  storageBucket: "chit-chat-7ae11.appspot.com",
  messagingSenderId: "11710086324",
  appId: "1:11710086324:web:df992d528f04204343abe1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
