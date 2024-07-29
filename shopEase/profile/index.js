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
    query,
    where,

} from '../utils/utils.js' 


const uProductContainer = document.getElementById("uProductsContainer")


onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        getMyProducts(uid);
    } else {
       
        console.log("Signed Out");

    }
});






async function getMyProducts(uid) {
    try {
        const q = query(collection(db, "uProducts"),where("createdBy","==", uid))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            uProductContainer.innerHTML = "";
            // alert("getDoc function")

            const product = doc.data();
            

            const { productImage, category, title, price, createdBy, createdByEmail } = product; 
            console.log(createdBy);
            

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

           uProductsContainer.innerHTML += card;

        })
    } catch (err) {
        alert(err);
    }
}