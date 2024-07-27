import {
    auth,
    getAuth,
    signInWithEmailAndPassword
} from '../../utils/utils.js'




const signInForm = document.getElementById("signInForm");

signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);

    const email = e.target[0].value;
    const password = e.target[1].value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(email);
            
            window.location.href = "/"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error)
        });



});