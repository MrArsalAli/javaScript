import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
    getFirestore,
    doc,
    setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyA0JKI26kTLyAntN8fAeZRPpT-8N6E1QJ4",
    authDomain: "blog-app-56386.firebaseapp.com",
    projectId: "blog-app-56386",
    storageBucket: "blog-app-56386.appspot.com",
    messagingSenderId: "906901749495",
    appId: "1:906901749495:web:5570f5047cf18255c1ddf2",
    measurementId: "G-ZVG49EYFEV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
    auth,
    db,
    storage,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    doc,
    setDoc,
    ref,
    uploadBytes,
    signOut,
    signInWithEmailAndPassword,
    getDownloadURL,
};