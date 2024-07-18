import {
    auth,
    signInWithEmailAndPassword, 

} from '../../utils/utils.js';

const signInForm = document.getElementById('signInForm');

signInForm.addEventListener('submit', function(e){
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password).then(()=>{
        window.location.href = '/';
    }).catch((err)=>{console.log(err);
    })
    
})