import {
    auth,
    createUserWithEmailAndPassword,
    getStorage,
    storage,
    db,
    ref,
    uploadBytes,
    getDownloadURL,
    getFirestore,
    doc,
    setDoc,


} from '../../utils/utils.js'



const signUpForm = document.getElementById("signUpForm");

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);

    const email = e.target[0].value;
    const password = e.target[1].value;
    const firstName = e.target[2].value;
    const lastName = e.target[3].value;
    const phone = e.target[4].value;
    const company = e.target[5].value;
    const img = e.target[6].files[0];


    const userInfo = {
        email,
        password,
        firstName,
        lastName,
        phone,
        company,
        img,
    };



    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user.uid);

            const userRef = ref(storage, `${user.user.uid}`)
            uploadBytes(userRef, img).then((snapshot) => {
                console.log('Uploaded a blob or file!');
                getDownloadURL(userRef)
                    .then((url) => {
                        console.log(url);
                        userInfo.img = url;
                        const userDbRef = doc(db, 'users', user.user.uid);
                        setDoc(userDbRef, userInfo).then(() => {
                            console.log("User Object Updated");
                            window.location.href = "/";
                        }).catch((error) => {
                            console.log(error);
                        })
                    }).catch((error) => {
                        console.log(error);
                    })
                    .catch((error) => {
                        console.log(error);

                    });
            }).catch((error) => {
                console.log(error);
            })


        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            
        });


})


