import {
    app,
    db,
    auth,
    onAuthStateChanged,
    signOut,
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,

} from './utils/utils.js'

const logInBtn = document.getElementById("logInBtn")
const logOutBtn = document.getElementById("logOutBtn")
const userImage = document.getElementById("userImage")
const userImgDiv = document.getElementById("userImgDiv")




onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        logInBtn.style.display = "none"
        logOutBtn.style.display = "inline-flex"
        getUserInfo(uid);
    } else {
        userImgDiv.style.display = "none"
        logOutBtn.style.display = "none"
        logInBtn.style.display = "inline-flex"
        console.log("Signed Out");

    }
});



logOutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
        window.location.href = "index.html"
    })
})


function getUserInfo(uid) {
    const userRef = doc(db, "users", uid);
    getDoc(userRef).then((data) => {
        userImage.src = data.data().img;
    });
}





