const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", deleteToDo);
    
    const editButton = document.createElement("button");
    editButton.innerText = "✏️";
    editButton.classList.add("edit-button");
    editButton.addEventListener("click", editToDo);
    
    const completeButton = document.createElement("button");
    completeButton.innerText = "✅";
    completeButton.classList.add("complete-button");
    completeButton.addEventListener("click", completeToDo);
    
    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    li.appendChild(completeButton);
    
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function editToDo(event) {
    const li = event.target.parentElement;
    const span = li.querySelector("span");
    const newTodo = prompt("Edit your todo", span.innerText);
    if (newTodo !== null && newTodo !== "") {
        span.innerText = newTodo;
    }
}

function completeToDo(event) {
    const li = event.target.parentElement;
    li.classList.toggle("completed");
}

toDoForm.addEventListener("submit", handleToDoSubmit);
