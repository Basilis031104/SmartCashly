/*  auth.js  –  vanilla ES-module wrapper around Firebase Auth  */
import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from
  "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

/*  ⬇︎  paste YOUR real config from Firebase console here  */
const firebaseConfig = {
  apiKey: "AIzaSy…",
  authDomain: "smartcashly.firebaseapp.com",
  projectId: "smartcashly",
  storageBucket: "smartcashly.appspot.com",
  messagingSenderId: "381392374609",
  appId: "1:381392374609:web:f500a5e781af3fd45b13c"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* expose tiny helpers globally */
window.smartAuth = {
  signUp : (email, pass) => createUserWithEmailAndPassword(auth, email, pass),
  signIn : (email, pass) => signInWithEmailAndPassword(auth, email, pass),
  signOut: ()            => signOut(auth),
  user   : ()            => auth.currentUser       // null if signed-out
};
