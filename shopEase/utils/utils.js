import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,

} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,

} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
import {
    getFirestore,
    doc,
    setDoc,
    addDoc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    onSnapshot, 
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

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
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);




export {
    app,
    auth,
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    storage,
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    db,
    getFirestore,
    doc,
    setDoc,
    getDoc,
    getDocs,
    addDoc,
    collection,
    query,
    where,
    onSnapshot, 





}