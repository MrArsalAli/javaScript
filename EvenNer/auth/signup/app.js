import {
    auth,
    createUserWithEmailAndPassword,
    db,
    doc,
    setDoc,
    ref,
    uploadBytes,
    getDownloadURL,
    storage,


} from '../../utils/utils.js';

const signUpForm = document.getElementById('signUpForm');

signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const img = e.target[0].files[0];
    const email = e.target[1].value;
    const password = e.target[2].value;
    const firstName = e.target[4].value;
    const lastName = e.target[5].value;
    const phone = e.target[6].value;
    const company = e.target[7].value;


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
            console.log(user.user.uid);
            //uploading user image
            const userRef = ref(storage, `user/${user.user.uid}`)
            uploadBytes(userRef, img)
                .then(() => {
                    console.log("user image uploaded");
                    //getting url 
                    getDownloadURL(userRef)
                        .then((url) => {
                            console.log('url milgaya');

                            //user info updation
                            userInfo.img = url

                            const userDbRef = doc(db, 'users', user.user.uid);

                            //setting document
                            setDoc(userDbRef, userInfo).then(()=>{
                                console.log('object upadted');
                                window.location.href = '/';
                                
                            })
                        })
                        .catch((err) => console.log('no url'))
                })
                .catch(() => {
                    console.log('error in uploading image');

                })

        })









})