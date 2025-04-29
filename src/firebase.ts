import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzUuTfnTBoDEhX3a1HZNIj7Jj0daid0aw",
  authDomain: "web-dd356.firebaseapp.com",
  databaseURL: "https://web-dd356-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "web-dd356",
  storageBucket: "web-dd356.firebasestorage.app",
  messagingSenderId: "650619046249",
  appId: "1:650619046249:web:374691d27e9897610615f8",
  measurementId: "G-J11PF7QHCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export async function emailSignIn(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function emailSignUp(email: string, password: string) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function userSignOut() {
  return await signOut(auth);
}
