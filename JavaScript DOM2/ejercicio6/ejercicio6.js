
let inputName = document.getElementById("inputName");
let addBtn = document.getElementById("addBtn");
let nameList = document.getElementById("nameList");
let randomBtn = document.getElementById("randomBtn");

let names = [];

function addName() {
    const name = inputName.value.trim();
    if (name === "") {
        alert("ingresa un nombre");
        return;
    }

    names.push(name);
    renderNames();
    inputName.value = "";
}

function renderNames() {
    nameList.innerHTML = "";
    for (let i = 0; i < names.length; i++) {
        const li = document.createElement("li");
        li.textContent = names[i];
        nameList.appendChild(li);
    }
}

function selectRandomName() {
    if (names.length === 0) {
        alert("No hay nombres en ");
        return;
    }

    let randomIndex = Math.floor(Math.random() * names.length);
    let selectedName = names[randomIndex];
    let listItems = nameList.getElementsByTagName("li");
    
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("selected");
    }
    
    listItems[randomIndex].classList.add("selected");
    
    alert(`Se ha seleccionado: ${selectedName}`);
}

addBtn.addEventListener("click", addName);
randomBtn.addEventListener("click", selectRandomName);
