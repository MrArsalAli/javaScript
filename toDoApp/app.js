

var input = document.getElementById('userInput')
var list = document.getElementById('list')



function addRecord() {
    var li = `<li> <span>${input.value} </span> 
    <button class="btn" onclick="editThis(this)"> Edit</button>
    <button class="btn" onclick="deleteThis(this)"> Del</button> </li>`

    // var now = new Date()
    // var time = now.toLocaleTimeString() 
    // var listview = `<li>User clicked on ${time} <button onclick="deleteThis(this)"> Del</button> </li>`
    list.innerHTML += li
}


function deleteThis(currentElement) {
    currentElement.parentElement.remove()
}


function editThis(currentElement) {

    var newTxt = prompt(currentElement.parentElement.firstElementChild.innerText)

    currentElement.parentElement.firstElementChild.innerText = newTxt

}