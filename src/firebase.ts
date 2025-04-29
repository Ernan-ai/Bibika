import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpZ-CHuzgXJIwkvN1lUwyDlftdBUnmOdM",
  authDomain: "denchikpuhlyi.firebaseapp.com",
  databaseURL: "https://denchikpuhlyi-default-rtdb.firebaseio.com",
  projectId: "denchikpuhlyi",
  storageBucket: "denchikpuhlyi.firebasestorage.app",
  messagingSenderId: "904822185328",
  appId: "1:904822185328:web:7ed50c4e6f04b1872cc3b5"
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
