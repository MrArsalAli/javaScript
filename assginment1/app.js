import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
    getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getStorage, ref , uploadBytes } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";



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
const auth = getAuth(app);
const storage = getStorage(firebaseApp, "gs://my-custom-bucket");
const storage = getStorage();
const storageRef = ref(storage);

var signUpEmail = document.getElementById('signUpEmail');
var signUpPassword = document.getElementById('signUpPassword');
var signUpButton = document.getElementById('signUpButton');

var signInEmail = document.getElementById('signInEmail');
var signInPassword = document.getElementById('signInPassword');
var signInButton = document.getElementById('signInButton');

var signOutButton = document.getElementById('signOutButton');

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(`User is logged in`);
        const uid = user.uid;

    } else {
        console.log(`User is not logged in`);
    }
});

signUpButton.addEventListener("click", createUserAccount)
function createUserAccount() {
    createUserWithEmailAndPassword(auth, signUpEmail.value, signUpPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });

}


signInButton.addEventListener("click", signIn);
function signIn() {
    signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });

}

signOutButton.addEventListener("click", logOut);
function logOut() {
    signOut(auth).then(() => {
    }).catch((error) => {
        alert(error);
    });
}


uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });