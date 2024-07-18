import {
    auth,
    signInWithEmailAndPassword
} from '../../utils/utils.js'

const signInForm = document.getElementById('signInForm');

signInForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    const userInfo = {
        email, password
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
         window.location.href = '/';
        })
        .catch((err) => {
            console.log("Error In Logging In");
        })

})