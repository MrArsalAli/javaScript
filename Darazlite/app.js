import{
    auth,
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,

}from'./utils/utils.js'

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    // window.location.href = "/"
} else {
    // window.location.href = "./auth/signup/index.html"

  }
});







