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
let products_Container = document.getElementById("productsContainer")



getAllProducts();

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
        window.location.href = "index.html  "
    })
})


function getUserInfo(uid) {
    const userRef = doc(db, "users", uid);
    getDoc(userRef).then((data) => {
        userImage.src = data.data().img;
    });
}




async function getAllProducts() {
    products_Container.innerHTML = ""
    try {
        const querySnapshot = await getDocs(collection(db, "uProducts"))
        querySnapshot.forEach((doc) => {
            // alert("getDoc function")
            const product = doc.data();
            const { productImage, category, title, price, createdBy , createdByEmail} = product;
            const card = `<div class="mx-4 inline-block my-4">
            <a class="block relative h-48 rounded overflow-hidden">
              <img style="width: 300px; height: 240px; object-fit: cover;" alt="ecommerce" class="object-cover object-center w-full h-full block" src="${productImage}">
            </a>
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${category}</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">${title}</h2>
              <p class="mt-1">$ ${price}.0</p>
              <a href="#">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
           </div>`

            products_Container.innerHTML += card;

        })
    } catch (err) {
        alert(err);
        console.log(err);

    }
}


