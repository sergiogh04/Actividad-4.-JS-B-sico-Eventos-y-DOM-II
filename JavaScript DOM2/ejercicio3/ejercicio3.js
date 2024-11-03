
let inputElement = document.getElementById("newItemInput");
let addButton = document.getElementById("addItemBtn");
let itemsList = document.getElementById("itemsList");

function addItem() {
    let itemText = inputElement.value.trim(); 

    
    if (itemText === "") { 
        alert("Por favor, ingresa un ítem.");
        return;
    }


    let listItem = document.createElement("li");
    listItem.textContent = itemText;

    let completeButton = document.createElement("button");
    completeButton.classList.add("completeBtn");
    completeButton.innerHTML = '<span class="material-icons">done</span>';

    completeButton.onclick = function() {
        listItem.classList.toggle("completed"); 
    }; 


    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteBtn");
    deleteButton.innerHTML = '<span class="material-icons">delete</span>';
    deleteButton.onclick = function() {
        itemsList.removeChild(listItem); 
    };

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    itemsList.appendChild(listItem);

    inputElement.value = "";
}

addButton.addEventListener("click", addItem);
