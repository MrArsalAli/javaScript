import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBybm7S6hPo_FRKNtDeysga7ftlMsAix_8",
    authDomain: "smit-bc807.firebaseapp.com",
    projectId: "smit-bc807",
    storageBucket: "smit-bc807.appspot.com",
    messagingSenderId: "504101330701",
    appId: "1:504101330701:web:bd7a31635c0fd943655a44",
    measurementId: "G-07W1WB249S"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

var userInput = document.getElementById('imgInput');

const uploadImage = () => {
    const imagesRef = ref(storage, 'images/${userInput.files[0].name}');

    uploadBytes(imagesRef, userInput.files[0]).then((snapshot) => {
        console.log('Uploaded a blob or file!');


        getDownloadURL(imagesRef)
            .then((url) => {
                Image.src = url;

            })
            .catch((error) => {
                alert(error)
            });

    });
}

userInput.addEventListener('change', uploadImage);
