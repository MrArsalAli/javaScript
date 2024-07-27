import {
    app,
    auth,
    getAuth,
    createUserWithEmailAndPassword,
    storage,
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    db,
    doc,
    setDoc,



} from '../../utils/utils.js'



const signUpForm = document.getElementById('signUpForm')
const signInSubmitBtn = document.getElementById('signInSubmitBtn')

signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();


    const img = e.target[0].files[0];
    const email = e.target[1].value;
    const password = e.target[2].value;
    const firstName = e.target[4].value;
    const lastName = e.target[5].value;
    const number = e.target[6].value;
    const companyNum = e.target[7].value;



    const userInfo = {
        img,
        email,
        password,
        firstName,
        lastName,
        number,
        companyNum,
    }


    createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log('user made');

            const userRef = ref(storage, `user/${user.user.uid}`)
            uploadBytes(userRef, img)
                .then(() => {
                    console.log("image Uploaded");


                    getDownloadURL(userRef)
                        .then((url) => {
                            console.log("Url milgaya");
                            userInfo.img = url;
                            const userDbRef = doc(db, "users", user.user.uid)
                            setDoc(userDbRef, userInfo).then(() => {
                                console.log("object Updated to Db");
                                window.location.href = "../login/index.html"

                            }).catch((error) => {
                                console.log("error in setDoc");

                            })
                        }).catch((error) => {
                            console.log("Error in getting URL");

                        })

                }).catch((error) => {
                    console.log("error in uploading image");

                })
        })
        .catch((error) => {
            console.log("error in creating user");

        });




})


