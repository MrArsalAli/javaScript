// localStorage.setItem("email", "user@gmail.com");
// localStorage.getItem(email);
// localStorage.removeItem(email);
// JSON.stringify();
// JSON.parse();




const loginContainer = document.getElementById("loginContainer");
const homeContainer = document.getElementById("homeContainer");
const email = document.getElementById("email");
const password = document.getElementById("password");
const userEmailShown = document.getElementById("userEmailShown");





function loginBtn() {
    if (!email.value || !password.value) 
        return alert("Enter Email And Password.")
    localStorage.setItem("email", email.value)
    checkUser();
}



function checkUser(){
    var email = localStorage.getItem("email");
    if(email){
        loginContainer.style.display = "none"
        homeContainer.style.display = "block"
        userEmailShown.innerText = email;
    }else{
        loginContainer.style.display = "block"
        homeContainer.style.display = "none"
    }
}



checkUser();



function logout(){
    localStorage.removeItem("email")
    checkUser();
}








