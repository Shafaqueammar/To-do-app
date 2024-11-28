var task = document.getElementById("task");
var ul = document.getElementById("ul");

function addItem() {
    if (task.value === "") {
        alert("Please enter your task");
    } else {
        var li = document.createElement("li");
        var litext = document.createTextNode(task.value);
        li.setAttribute("class", "task");
        li.appendChild(litext);

      
        var editButton = document.createElement("button");
        var editTextButton = document.createTextNode("Edit");
        editButton.appendChild(editTextButton);
        editButton.setAttribute("onclick", "editTask(this)");  
        li.appendChild(editButton);

        var delButton = document.createElement("button");
        var delTextButton = document.createTextNode("Delete");
        delButton.appendChild(delTextButton);
        delButton.setAttribute("onclick", "deleteTask(this)");
        li.appendChild(delButton);

        ul.appendChild(li);

        task.value = "";
    }
}

function deleteTask(button) {
    var li = button.parentElement;
    ul.removeChild(li);
}

function deleteAllButton() {
    ul.innerHTML = "";
}
function editTask(button) {
    var li = button.parentElement;
    var newTask = prompt("Edit your task:", li.firstChild.nodeValue);
    if (newTask) {
        li.firstChild.nodeValue = newTask; 
    }
}

