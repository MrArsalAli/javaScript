import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

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
const db = getFirestore(app);

// const storage = getStorage(app);

// getting elements

const signUp_Email = document.getElementById("floating_email_signUp")
const signUp_Password = document.getElementById("floating_password_signUp")
const signUpButton = document.getElementById("signUpButton")

const signIn_Email = document.getElementById("email_signIn")
const signIn_Password = document.getElementById("password_signIn")
const signInButton = document.getElementById("signInButton")

var userInput = document.getElementById('imgInput');
// var Image = document.getElementById('img');

signUpButton.addEventListener("click", createUserAccount);
function createUserAccount(email, password) {
    createUserWithEmailAndPassword(auth, signUp_Email.value, signUp_Password.value)
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
function signIn(email, password) {
    signInWithEmailAndPassword(auth, signIn_Email, signIn_Password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });

}


// const uploadImage = () => {
//     const imagesRef = ref(storage, 'images/${userInput.files[0].name}');

//     uploadBytes(imagesRef, userInput.files[0]).then((snapshot) => {
//         console.log('Uploaded a blob or file!');


//         getDownloadURL(imagesRef)
//             .then((url) => {
//                 Image.src = url;

//             })
//             .catch((error) => {
//                 alert(error)
//             });

//     });
// }


// EventListeners



// userInput.addEventListener('change', uploadImage);