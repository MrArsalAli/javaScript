// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut ,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBybm7S6hPo_FRKNtDeysga7ftlMsAix_8",
    authDomain: "smit-bc807.firebaseapp.com",
    projectId: "smit-bc807",
    storageBucket: "smit-bc807.appspot.com",
    messagingSenderId: "504101330701",
    appId: "1:504101330701:web:bd7a31635c0fd943655a44",
    measurementId: "G-07W1WB249S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// console.log("app-->", app);

const auth = getAuth(app);
// console.log("auth-->", auth);

var signUpEmail = document.getElementById('signUpEmail');
var signUpPassword = document.getElementById('signUpPassword');
var signUpButton = document.getElementById('signUpButton');
var signInEmail = document.getElementById('signInEmail');
var signInPassword = document.getElementById('signInPassword');
var signInButton = document.getElementById('signInButton');
var signOutEmail = document.getElementById('signOutEmail');
var signOutPassword = document.getElementById('signOutPassword');
var signOutButton = document.getElementById('signOutButton');

signUpButton.addEventListener("click", createUserAccount)
signInButton.addEventListener("click", signIn);
signOutButton.addEventListener("click", logOut);

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(`User is logged in`);
        const uid = user.uid;

    } else {
        console.log(`User is not logged in`);
    }
});

function createUserAccount() {
    // console.log("Email-->", signUpEmail.value);
    // console.log("Password-->", signUpPassword.value);
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });

}


function signIn() {
    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

}

function logOut() {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}
