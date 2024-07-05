import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
const analytics = getAnalytics(app);
const db = getFirestore(app);
let numbersCollection = collection(db, "numbers");
let todosCollection = collection(db, "todos");


var todoInput = document.getElementById('todoInput');
var todoList = document.getElementById('todoList');
var addTodo = document.getElementById('addTodo');


async function addTodoToDb() {
    try {
        const obj = {
            todo: todoInput.value,
            createdAt: new Date().toISOString(),
        };

        const docRef = await addDoc(todosCollection, obj);
        getTodosFromDb();
        todoInput.value = "";
    } catch (e) {
        console.log(e);
    }
}

addTodo.addEventListener("click", addTodoToDb);




async function getTodosFromDb() {
    try {
        const querySnapshot = await getDocs(todosCollection);
        todoList.innerHTML = "";
        querySnapshot.forEach((doc) => {
            console.log("Doc=>", doc.id);
            const { todo, createdAt } = doc.data();
            const ele = `<li id = ${doc.id}>${todo} -  ${new Date(
                createdAt
            ).toLocaleDateString()}</li>`;
            todoList.innerHTML += ele;
        });

        todoList.childNodes.forEach((li) =>
            li.addEventListener("click", deleteTodo)
        );
    } catch (e) {
        console.log(e);
    }
}

async function deleteTodo() {
    try {
        const docId = this.id;
        const docCollection = doc(db, "todos", docId);
        const docRef = await deleteDoc(docCollection);
        getTodosFromDb()
        console.log("Document deleted=>", docRef);
    } catch (e) {
        console.log(e);
    }
}

addNumberToDB();
async function addNumberToDB() {
    try {
        const docRef = await addDoc(numbersCollection, {
            number: Math.round(Math.random() * 1000000),
        });

        console.log("docRef=>", docRef);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}