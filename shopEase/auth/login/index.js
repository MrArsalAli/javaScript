import{
    auth,
    getAuth,
    signInWithEmailAndPassword,

}from'../../utils/utils.js'




const signInForm = document.getElementById("signInForm");

signInForm.addEventListener("submit", function(e){
    e.preventDefault();


    const email = e.target[0].value;
    const password = e.target[1].value;


    const userInfo = {
        email,
        password
    }



    signInWithEmailAndPassword(auth, email, password)
  .then((user) => {
      console.log("signedIn");
      window.location.href = "/"
    
      
  })
  .catch((error) => {
      console.log("Error in signing in-->", error );
      
  });
})
