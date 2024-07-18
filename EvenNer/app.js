import {auth, db, storage, onAuthStateChanged, signOut } from './utils/utils.js'





const logOut_btn =document.getElementById('logOut_btn');

logOut_btn.addEventListener("click", ()=>{
  signOut(auth);
});

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
        window.location.href = 'auth/login/index.html'
    }
  });