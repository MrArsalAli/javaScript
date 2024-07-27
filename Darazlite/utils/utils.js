import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBybm7S6hPo_FRKNtDeysga7ftlMsAix_8",
  authDomain: "smit-bc807.firebaseapp.com",
  projectId: "smit-bc807",
  storageBucket: "smit-bc807.appspot.com",
  messagingSenderId: "504101330701",
  appId: "1:504101330701:web:bd7a31635c0fd943655a44",
  measurementId: "G-07W1WB249S"
};

const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);





















export {
  auth,
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getStorage,
  storage,
  db,
  ref,
  uploadBytes,
  getDownloadURL,
  getFirestore,
  doc,
  setDoc,


}