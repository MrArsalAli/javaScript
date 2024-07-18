import {
    auth,
    createUserWithEmailAndPassword,
    storage,
    uploadBytes,
    getDownloadURL,
    doc,
    db,
    setDoc,
    ref,
} from '../../utils/utils.js'



const signUpForm = document.getElementById('signUpForm');



signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const img = e.target[0].files[0];
    const email = e.target[1].value;
    const password = e.target[2].value;
    const firstName = e.target[3].value;
    const lastName = e.target[4].value;
    const phone = e.target[5].value;
    const company = e.target[6].value;

    const userInfo = {
        img,
        email,
        password,
        firstName,
        lastName,
        phone,
        company
    };

    createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            const userRef = ref(storage, `user/${user.user.uid}`);
            uploadBytes(userRef, img)
                .then(() => {
                    console.log("Image uploaded");
                    getDownloadURL(userRef)
                        .then((url) => {
                            console.log("url ==> ", url);
                            userInfo.img = url;

                            const userDbRef = doc(db, "users", user.user.uid);
                            setDoc(userDbRef, userInfo)
                                .then(() => {
                                    console.log("User object Updated to DB")
                                    window.location.href = '/'
                                })
                                .catch((err) => {
                                    console.log(err);

                                })
                        })
                        .catch((err) => {
                            console.log(err);
                        })

                })
                .catch((err) => { "Error in uploading" })
        })
        .catch((err) => {
            console.log(err);
        })

})
