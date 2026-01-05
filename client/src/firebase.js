import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyALgH5R-Jcni4Gq2dCLg4a3Ym5tuoPKfq8",
  authDomain: "ecommerce-mern-smit.firebaseapp.com",
  projectId: "ecommerce-mern-smit",
  storageBucket: "ecommerce-mern-smit.firebasestorage.app",
  messagingSenderId: "1006695246380",
  appId: "1:1006695246380:web:a0eb5f1430d0b74a733f89"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Create a new user with email and password
export function registerWithEmail(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
// Sign in with email and password
export function loginWithEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Sign in with Google (popup)
export function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}
// Sign out the current user
export function logout() {
  return signOut(auth);
}