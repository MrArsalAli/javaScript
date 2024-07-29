import {
    storage,
    ref,
    uploadBytes,
    getDownloadURL,
    db,
    getDocs,
    collection,
    addDoc,
    auth,
} from '../utils/utils.js'


const userProducts = document.getElementById("uProducts");

userProducts.addEventListener("submit", function (e) {
    e.preventDefault();
    const productInfo = {
        productImage: e.target[0].files[0],
        category: e.target[1].value,
        title: e.target[2].value,
        price: e.target[3].value,
        createdBy : auth.currentUser.uid,
        createdByEmail : auth.currentUser.email,
    }
    const imgRef = ref(storage, productInfo.productImage.name)
    uploadBytes(imgRef, productInfo.productImage)
        .then(() => {
            console.log("File Uploaded");
            getDownloadURL(imgRef).then((url) => {
                console.log("URL");
                productInfo.productImage = url;
                const uProdductsCollection = collection(db, "uProducts", )
                addDoc(uProdductsCollection, productInfo).then((doc) => {
                    console.log("Document Added");
                    window.location.href = "../profile/index.html"
                }).catch(() => { })
            }).catch(() => { })
        }).catch(() => { })
    })

