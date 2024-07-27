import {
    getAuth,
    auth,
    onAuthStateChanged,
    signOut,
    db,
    storage,
    doc,
    getDoc,
} from './utils/utils.js';


const signup_btn = document.getElementById('signup_btn');
const userImage = document.getElementById('userImage');



onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        signup_btn.innerHTML = "LogOut";
        userImage.style.display = 'inline-block';
        getUserInfo(uid);
    } else {
        signup_btn.innerHTML = "SignUp/LogIn"
        userImage.style.display = "none"
    }
});



signup_btn.addEventListener('click', () => {
    if (signup_btn.innerHTML === 'LogOut') {
        signOut(auth);
        window.location.href = "auth/signup/index.html"
    } else {
        window.location.href = "auth/signup/index.html"
    }
});



function getUserInfo(uid) {
    const userRef = doc(db, 'users', uid)
    getDoc(userRef).then((data) => {
        console.log(data.data());
        userImage.src = data.data().img;
    })
}