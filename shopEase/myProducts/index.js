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





onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
       
        getMyProducts(user.uid);
    } else {
       
        console.log("Signed Out");

    }
});






async function getMyProducts(uid) {
    try {

        const q = query(collection(db, "uProducts"),where("createdBy","==",uid))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            uProductContainer.innerHTML = "";
            // alert("getDoc function")

            const product = doc.data();

            const { productImage, category, title, price, createdBy, createdByEmail } = product;


            const card = `<div class="inline-block m-4">
            <a class="inline-block relative h-48 rounded overflow-hidden">
              <img style="width: 250px; height: 200px; object-fit: cover;" alt="ecommerce" class="object-cover object-center w-full h-full block" src="${productImage}">
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${category}</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">${title}</h2>
              <p class="mt-1">$ ${price}.0</p>
            </div>
          </div>`

            uProductContainer.innerHTML += card;

        })
    } catch (err) {
        alert(err);
    }
}