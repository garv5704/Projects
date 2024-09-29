const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const btn = document.getElementsByTagName("button")
let historyBtnsaved

function addTask() {
    if (inputBox.value == '') {
        alert("write Something to add it in your To-Do List")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.append(li)
        inputBox.value = ''


        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.append(span)
    }
}

listContainer.addEventListener("click", (u) => {
    if (u.target.tagName == "LI") {
        u.target.classList.toggle("checked")
    }
    else if (u.target.tagName == "SPAN") {
        historydata()
        u.target.parentElement.remove()
        
    }

}, false)


function historydata(){
    localStorage.setItem("history",listContainer.innerHTML)
}

function callhistory(){
    listContainer.innerHTML = localStorage.getItem("history")
}







