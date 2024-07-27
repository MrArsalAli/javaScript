import {
    ref,
    storage,
    uploadBytes,
    getDownloadURL,
    getDocs,
    db,
    collection,
    addDoc,
} from '../utils/utils.js'


const addprdForm = document.getElementById('addprdForm');
const prd_btn = document.getElementById('prd_btn');


getUserProducts();



addprdForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);


    const prdInfo = {
        name: e.target[0].value,
        price: e.target[1].value,
        description: e.target[2].value,
        productImage: e.target[3].files[0],
    }

    console.log(prdInfo);

    const imgRef = ref(storage, prdInfo.productImage.name)
    uploadBytes(imgRef, prdInfo.productImage)
        .then(() => {
            console.log("upload hogai");

            getDownloadURL(imgRef)
                .then((url) => {
                    console.log("Url milgaya");
                    prdInfo.productImage = url

                    const myProduct = collection(db, "userproducts")
                    addDoc(myProduct, prdInfo).then(() => {
                        console.log('Document Added')
                        window.location.href = 'index.html'
                    }).catch(() => {

                    })
                }).catch(() => {

                })
        }).catch(() => {
        })


})



prd_btn.addEventListener("click", () => {
    window.location.href = './myproducts/index.html'
})





async function getUserProducts() {
    try {
        const querySnapshot = await getDocs(collection(db, "userproducts"));
        querySnapshot.forEach((doc) => {

            console.log(doc.id, " => ", doc.data());
        });
    } catch (error) {
        alert(error)
    }
}
