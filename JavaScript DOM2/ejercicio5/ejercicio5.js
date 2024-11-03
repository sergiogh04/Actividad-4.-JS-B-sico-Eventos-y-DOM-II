
let taskInput = document.getElementById("newTaskInput");
let addTaskButton = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

function addTask() {

    let taskText = taskInput.value.trim();

  
    if (taskText === "") {
        alert("Por favor, ingresa una tarea.");
        return; 
    }

    let listItem = document.createElement("li");
    listItem.textContent = taskText; 

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X"; 
    deleteButton.classList.add("deleteBtn"); 

  
    deleteButton.onclick = function() {
        taskList.removeChild(listItem); 
    };

    listItem.appendChild(deleteButton);
    
    taskList.appendChild(listItem);
    
    taskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);
