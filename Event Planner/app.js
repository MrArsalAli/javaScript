import {
    auth
} from './utils/utils.js';


const getStarted_btn = document.getElementById('getStarted_btn');

onAuthStateChanged(auth, (user));